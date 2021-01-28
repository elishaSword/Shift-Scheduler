import { TestBed } from '@angular/core/testing';

import { MailboxApiService } from './mailbox-api.service';

describe('MailboxApiService', () => {
  let service: MailboxApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailboxApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
