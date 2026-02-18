import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

export interface ProjectCompetition {
  competitionId: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
}

@Component({
  selector: 'app-project-competition-crud-reactive-form',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './project-competition-crud-reactive-form.html',
  styleUrl: './project-competition-crud-reactive-form.css',
})
export class ProjectCompetitionCRUDReactiveForm {
  http = inject(HttpClient);
  competitionList = signal<ProjectCompetition[]>([]);
  projectForm = new FormGroup({
    competitionId: new FormControl(0),
    title: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    status: new FormControl(''),
  });

  ngOnInit() {
    this.getAllCompetitions();
  }

  getAllCompetitions() {
    this.http
      .get('https://api.freeprojectapi.com/api/ProjectCompetition/GetAllCompetition')
      .subscribe((response) => {
        this.competitionList.set(response as ProjectCompetition[]);
      });
  }

  saveCompetition() {
    const formValue = this.projectForm.value;

    this.http.post('https://api.freeprojectapi.com/api/ProjectCompetition', formValue).subscribe({
      next: (response) => {
        alert('Competition saved successfully!');
      },
      error: (error) => {
        alert('Error saving competition: ' + error.message);
      },
    });
  }

  updateCompetition() {
    const formValue = this.projectForm.value;
    this.http
      .post(
        'https://api.freeprojectapi.com/api/ProjectCompetition/update/' + formValue.competitionId,
        formValue,
      )
      .subscribe({
        next: (response) => {
          alert('Competition saved successfully!');
        },
        error: (error) => {
          alert('Error saving competition: ' + error.message);
        },
      });
  }

  onEdit(item: ProjectCompetition) {
    this.projectForm.setValue({
      competitionId: item.competitionId,
      title: item.title,
      description: item.description,
      startDate: item.startDate,
      endDate: item.endDate,
      status: item.status,
    });
  }

  deleteCompetition(id: number) {
    const formValue = this.projectForm.value;
    this.http
      .delete(
        'https://api.freeprojectapi.com/api/ProjectCompetition/delete/' + id
      )
      .subscribe({
        next: (response) => {
          alert('Competition deleted successfully!');
        },
        error: (error) => {
          alert('Error deleting competition: ' + error.message);
        },
      });
  }
}
