import { TestBed } from '@angular/core/testing';

import { SpaceyService } from './spacey.service';

describe('SpaceyService', () => {
  let service: SpaceyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
