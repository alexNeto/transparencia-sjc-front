import { TestBed, inject } from '@angular/core/testing';

import { RemuneracaoStorageService } from './remuneracao-storage.service';

describe('RemuneracaoStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemuneracaoStorageService]
    });
  });

  it('should be created', inject([RemuneracaoStorageService], (service: RemuneracaoStorageService) => {
    expect(service).toBeTruthy();
  }));
});
