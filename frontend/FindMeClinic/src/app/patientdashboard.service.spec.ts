import { TestBed } from '@angular/core/testing';

import { PatientdashboardService } from './patientdashboard.service';

describe('PatientdashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientdashboardService = TestBed.get(PatientdashboardService);
    expect(service).toBeTruthy();
  });
});
