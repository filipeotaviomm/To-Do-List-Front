import { TestBed } from '@angular/core/testing';

import { UserRequest } from './user.request';

describe('UserRequest', () => {
  let service: UserRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRequest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
