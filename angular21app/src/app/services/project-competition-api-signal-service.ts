import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface ProjectCompetition {
  competitionId: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectCompetitionApiSignalService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://api.freeprojectapi.com/api/ProjectCompetition';

  private readonly competitionResource = httpResource<ProjectCompetition[]>(() =>
    `${this.baseUrl}/GetAllCompetition`,
  );

  readonly competitions = computed(() => this.competitionResource.value() ?? []);
  readonly isLoading = computed(() => this.competitionResource.isLoading());
  readonly error = computed(() => this.competitionResource.error());

  reloadCompetitions(): void {
    this.competitionResource.reload();
  }

  saveCompetition(payload: unknown): Observable<unknown> {
    return this.http
      .post(this.baseUrl, payload)
      .pipe(tap(() => this.competitionResource.reload()));
  }

  updateCompetition(competitionId: number, payload: unknown): Observable<unknown> {
    return this.http
      .post(`${this.baseUrl}/update/${competitionId}`, payload)
      .pipe(tap(() => this.competitionResource.reload()));
  }

  deleteCompetition(competitionId: number): Observable<unknown> {
    return this.http
      .delete(`${this.baseUrl}/delete/${competitionId}`)
      .pipe(tap(() => this.competitionResource.reload()));
  }
}
