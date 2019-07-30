import { TestBed } from '@angular/core/testing';

import { SearchDoctorService } from './search-doctor.service';

describe('SearchDoctorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchDoctorService = TestBed.get(SearchDoctorService);
    expect(service).toBeTruthy();
  });
});
