import { TestBed, inject } from '@angular/core/testing';

import { BillDataService } from './bill-data.service';

describe('BillDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillDataService]
    });
  });

  it('should be created', inject([BillDataService], (service: BillDataService) => {
    expect(service).toBeTruthy();
  }));
});
