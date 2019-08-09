import { TestBed } from '@angular/core/testing';

import { HomepageIndexService } from './homepage-index.service';

describe('HomepageIndexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomepageIndexService = TestBed.get(HomepageIndexService);
    expect(service).toBeTruthy();
  });
});
