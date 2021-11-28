import { TestBed } from '@angular/core/testing';

import { PurchaseItemService } from './purchase-item.service';

describe('PurchaseItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchaseItemService = TestBed.get(PurchaseItemService);
    expect(service).toBeTruthy();
  });
});
