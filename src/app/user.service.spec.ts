import { TestBed } from '@angular/core/testing';

import { BossService } from './user.service';

describe('UserService', () => {
  let service: BossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
