import { TestBed } from '@angular/core/testing';

import { HttpConnectionService } from './http-connection.service';

describe('HttpConnectionService', () => {
  let service: HttpConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
