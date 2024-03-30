import { TestBed } from '@angular/core/testing';

import { HeaderScrollService } from './header-scroll.service';

describe('HeaderScrollService', () => {
  let service: HeaderScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
