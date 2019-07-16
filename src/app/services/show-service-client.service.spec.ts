import { TestBed } from '@angular/core/testing';

import { ShowServiceClientService } from './show-service-client.service';

describe('ShowServiceClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowServiceClientService = TestBed.get(ShowServiceClientService);
    expect(service).toBeTruthy();
  });
});
