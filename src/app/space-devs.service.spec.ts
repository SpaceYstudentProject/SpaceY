import { TestBed } from '@angular/core/testing';

import { SpaceDevsService } from './space-devs.service';

describe('SpaceDevsService', () => {
  let service: SpaceDevsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceDevsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
