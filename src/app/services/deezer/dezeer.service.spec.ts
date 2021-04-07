import { TestBed } from '@angular/core/testing';

import { DezeerService } from './dezeer.service';

describe('DezeerService', () => {
  let service: DezeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DezeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
