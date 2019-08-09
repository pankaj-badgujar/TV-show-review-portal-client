import { TestBed } from '@angular/core/testing';

import { LoginServiceClientService } from './login-service-client.service';

describe('LoginServiceClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginServiceClientService = TestBed.get(LoginServiceClientService);
    expect(service).toBeTruthy();
  });
});
