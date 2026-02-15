import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-user-master',
  imports: [FormsModule],
  templateUrl: './user-master.html',
  styleUrl: './user-master.css',
})
export class UserMaster {
  userObj = {
    id: 0,
    name: '',
    username: '',
    email: '',
    password: '',
  };
}
