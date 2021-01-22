import { TestBed } from '@angular/core/testing';

import { BulletinMessageApiService } from './bulletin-message-api.service';

describe('BulletinMessageApiService', () => {
  let service: BulletinMessageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulletinMessageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
