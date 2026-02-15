import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-api',
  imports: [AsyncPipe],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi {
  private http = inject(HttpClient);
  // RxJS (old school) implementation
  userList: any[] = [];
  userList$?: Observable<any[]>;

  // Signal (modern) implementation
  userListSignal = signal<any[]>([]);

  // Readonly signal to prevent external mutation and make private the writable
  userListSignalReadOnly = this.userListSignal.asReadonly();

  getUsers() {
    this.http.get<any>("https://jsonplaceholder.typicode.com/users").subscribe(users => {
      this.userList = users;
    });
  }

  getUsersAsync() {
    this.userList$ = this.http.get<any[]>("https://jsonplaceholder.typicode.com/users");
  }

  getUsersSignal() {
    this.http.get<any[]>("https://jsonplaceholder.typicode.com/users").subscribe(users => {
      this.userListSignal.set(users);
    });
  }
}
