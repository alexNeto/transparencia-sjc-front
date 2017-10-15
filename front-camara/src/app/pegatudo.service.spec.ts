import { TestBed, inject } from '@angular/core/testing';

import { PegatudoService } from './pegatudo.service';

describe('PegatudoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PegatudoService]
    });
  });

  it('should be created', inject([PegatudoService], (service: PegatudoService) => {
    expect(service).toBeTruthy();
  }));
});
