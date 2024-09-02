import { TestBed } from '@angular/core/testing';

import { QuittingService } from './quitting.service';

describe('QuittingService', () => {
  let service: QuittingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuittingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
