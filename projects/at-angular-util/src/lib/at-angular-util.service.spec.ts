import { TestBed } from '@angular/core/testing';

import { ATAngularUtilService } from './at-angular-util.service';

describe('ATAngularUtilService', () => {
  let service: ATAngularUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ATAngularUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
