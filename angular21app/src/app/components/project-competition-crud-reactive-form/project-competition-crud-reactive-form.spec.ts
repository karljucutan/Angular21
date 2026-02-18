import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCompetitionCRUDReactiveForm } from './project-competition-crud-reactive-form';

describe('ProjectCompetitionCRUDReactiveForm', () => {
  let component: ProjectCompetitionCRUDReactiveForm;
  let fixture: ComponentFixture<ProjectCompetitionCRUDReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCompetitionCRUDReactiveForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCompetitionCRUDReactiveForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
