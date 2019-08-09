import { TestBed } from '@angular/core/testing';

import { RegisterClientService } from './register-client.service';

describe('RegisterClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterClientService = TestBed.get(RegisterClientService);
    expect(service).toBeTruthy();
  });
});
