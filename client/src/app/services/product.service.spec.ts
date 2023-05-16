import { TestBed } from '@angular/core/testing';

import { ProductHttpService } from './product.service';

describe('ProductHttpServiceService', () => {
  let service: ProductHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
