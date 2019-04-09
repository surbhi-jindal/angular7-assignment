import { TestBed } from '@angular/core/testing';

import { AuthPublicService } from './auth-public.service';

describe('AuthPublicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthPublicService = TestBed.get(AuthPublicService);
    expect(service).toBeTruthy();
  });
});
