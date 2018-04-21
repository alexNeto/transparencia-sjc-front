import { TestBed, inject } from '@angular/core/testing';

import { TabelaMockService } from './tabela-mock.service';

describe('TabelaMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabelaMockService]
    });
  });

  it('should be created', inject([TabelaMockService], (service: TabelaMockService) => {
    expect(service).toBeTruthy();
  }));
});
