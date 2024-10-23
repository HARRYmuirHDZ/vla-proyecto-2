import { TestBed } from '@angular/core/testing';

import { ConsumoapiPaisService } from './consumoapi-pais.service';

describe('ConsumoapiPaisService', () => {
  let service: ConsumoapiPaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoapiPaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
