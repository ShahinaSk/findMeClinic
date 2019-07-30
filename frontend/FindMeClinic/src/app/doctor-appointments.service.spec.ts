import { TestBed } from '@angular/core/testing';

import { DoctorAppointmentsService } from './doctor-appointments.service';

describe('DoctorAppointmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorAppointmentsService = TestBed.get(DoctorAppointmentsService);
    expect(service).toBeTruthy();
  });
});
