import { TestBed } from '@angular/core/testing';

import { DoctorregistrationService } from './doctorregistration.service';

describe('DoctorregistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorregistrationService = TestBed.get(DoctorregistrationService);
    expect(service).toBeTruthy();
  });
});
