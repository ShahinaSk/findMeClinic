import { TestBed } from '@angular/core/testing';

import { DoctorprofileService } from './doctorprofile.service';

describe('DoctorprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorprofileService = TestBed.get(DoctorprofileService);
    expect(service).toBeTruthy();
  });
});
