import { TestBed } from '@angular/core/testing';

import { DbconnectorService } from './dbconnector.service';

describe('DbconnectorService', () => {
  let service: DbconnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbconnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
