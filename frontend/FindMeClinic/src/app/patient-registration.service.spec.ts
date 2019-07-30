import { TestBed } from '@angular/core/testing';

import { PatientRegistrationService } from './patient-registration.service';

describe('PatientRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientRegistrationService = TestBed.get(PatientRegistrationService);
    expect(service).toBeTruthy();
  });
});
