import { TestBed } from '@angular/core/testing';

import { ProjectCompetitionService } from './project-competition-service';

describe('ProjectCompetitionService', () => {
  let service: ProjectCompetitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectCompetitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
