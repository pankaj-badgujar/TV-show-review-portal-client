import { TestBed } from '@angular/core/testing';

import { EnrollUnderFacultyService } from './enroll-under-faculty.service';

describe('EnrollUnderFacultyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrollUnderFacultyService = TestBed.get(EnrollUnderFacultyService);
    expect(service).toBeTruthy();
  });
});
