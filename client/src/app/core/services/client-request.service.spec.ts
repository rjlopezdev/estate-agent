import { TestBed, inject } from '@angular/core/testing';

import { ClientRequestService } from './client-request.service';

describe('ClientRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientRequestService]
    });
  });

  it('should be created', inject([ClientRequestService], (service: ClientRequestService) => {
    expect(service).toBeTruthy();
  }));
});
