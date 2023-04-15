import { TestBed } from '@angular/core/testing';

import { AdminDeActivateGuard } from './admin-de-activate.guard';

describe('AdminDeActivateGuard', () => {
  let guard: AdminDeActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminDeActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
