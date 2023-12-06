import { TestBed } from '@angular/core/testing';

import { MarmetoShopService } from './marmeto-shop.service';

describe('MarmetoShopService', () => {
  let service: MarmetoShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarmetoShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
