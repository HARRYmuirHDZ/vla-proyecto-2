import { TestBed } from '@angular/core/testing';

import { ConsumoapiPersonaService } from './consumoapi-persona.service';

describe('ConsumoapiPersonaService', () => {
  let service: ConsumoapiPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoapiPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
