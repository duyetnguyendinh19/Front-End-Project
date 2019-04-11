import { TestBed } from '@angular/core/testing';

import { CategoryserviceService } from './categoryservice.service';

describe('CategoryserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryserviceService = TestBed.get(CategoryserviceService);
    expect(service).toBeTruthy();
  });
});
