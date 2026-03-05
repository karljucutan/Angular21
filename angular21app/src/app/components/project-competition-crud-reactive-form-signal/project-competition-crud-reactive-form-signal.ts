import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  ProjectCompetition,
  ProjectCompetitionApiSignalService,
} from '../../services/project-competition-api-signal-service';

@Component({
  selector: 'app-project-competition-crud-reactive-form-signal',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './project-competition-crud-reactive-form-signal.html',
  styleUrl: './project-competition-crud-reactive-form-signal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCompetitionCRUDReactiveFormSignal {
  private readonly projectCompetitionApiSignalService = inject(ProjectCompetitionApiSignalService);

  competitionList = computed(() => this.projectCompetitionApiSignalService.competitions());

  projectForm = new FormGroup({
    competitionId: new FormControl(0),
    title: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    status: new FormControl(''),
  });

  getAllCompetitions() {
    this.projectCompetitionApiSignalService.reloadCompetitions();
  }

  saveCompetition() {
    const formValue = this.projectForm.value;

    this.projectCompetitionApiSignalService.saveCompetition(formValue).subscribe({
      next: () => {
        alert('Competition saved successfully!');
      },
      error: (error: Error) => {
        alert('Error saving competition: ' + error.message);
      },
    });
  }

  updateCompetition() {
    const formValue = this.projectForm.value;

    this.projectCompetitionApiSignalService
      .updateCompetition(formValue.competitionId ?? 0, formValue)
      .subscribe({
        next: () => {
          alert('Competition saved successfully!');
        },
        error: (error: Error) => {
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
    this.projectCompetitionApiSignalService.deleteCompetition(id).subscribe({
      next: () => {
        alert('Competition deleted successfully!');
      },
      error: (error: Error) => {
        alert('Error deleting competition: ' + error.message);
      },
    });
  }
}
