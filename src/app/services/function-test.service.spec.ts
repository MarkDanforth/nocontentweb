import { TestBed, inject } from '@angular/core/testing';

import { FunctionTestService } from './function-test.service';

describe('FunctionTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FunctionTestService]
    });
  });

  it('should be created', inject([FunctionTestService], (service: FunctionTestService) => {
    expect(service).toBeTruthy();
  }));
});
