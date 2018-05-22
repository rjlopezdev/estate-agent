import { TestBed, inject } from '@angular/core/testing';

import { SimplePaginationService } from './simple-pagination.service';

describe('SimplePaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimplePaginationService]
    });
  });

  it('should be created', inject([SimplePaginationService], (service: SimplePaginationService) => {
    expect(service).toBeTruthy();
  }));
});
