import { TestBed } from '@angular/core/testing';

import { FormErrorInfoService } from './form-error-info.service';

describe('FormErrorInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormErrorInfoService = TestBed.get(FormErrorInfoService);
    expect(service).toBeTruthy();
  });
});
