import { TestBed, inject } from '@angular/core/testing';

import { InputRemuneracaoCamaraService } from './input-remuneracao-camara.service';

describe('InputRemuneracaoCamaraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputRemuneracaoCamaraService]
    });
  });

  it('should be created', inject([InputRemuneracaoCamaraService], (service: InputRemuneracaoCamaraService) => {
    expect(service).toBeTruthy();
  }));
});
