import { TestBed, inject } from '@angular/core/testing';

import { RemeneracaoStorageService } from './remeneracao-storage.service';

describe('RemeneracaoStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemeneracaoStorageService]
    });
  });

  it('should be created', inject([RemeneracaoStorageService], (service: RemeneracaoStorageService) => {
    expect(service).toBeTruthy();
  }));
});
