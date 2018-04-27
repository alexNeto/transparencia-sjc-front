import { TestBed, inject } from '@angular/core/testing';

import { RemuneracaoDataserviceService } from './remuneracao-dataservice.service';

describe('RemuneracaoDataserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemuneracaoDataserviceService]
    });
  });

  it('should be created', inject([RemuneracaoDataserviceService], (service: RemuneracaoDataserviceService) => {
    expect(service).toBeTruthy();
  }));
});
