import { TestBed } from '@angular/core/testing';

import { AvailabilityApiService } from './availability-api.service';

describe('AvailabilityApiService', () => {
  let service: AvailabilityApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailabilityApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
