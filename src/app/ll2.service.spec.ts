import { TestBed } from '@angular/core/testing';

import { Ll2Service } from './ll2.service';

describe('Ll2Service', () => {
  let service: Ll2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ll2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
