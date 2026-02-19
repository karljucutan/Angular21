import { inject, Injectable } from '@angular/core';
import { ProjectCompetition } from '../components/project-competition-crud-reactive-form/project-competition-crud-reactive-form';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectCompetitionService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl =
    'https://api.freeprojectapi.com/api/ProjectCompetition';

  getAllCompetitions(): Observable<ProjectCompetition[]> {
    return this.http
      .get<ProjectCompetition[]>(`${this.baseUrl}/GetAllCompetition`)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }
}
