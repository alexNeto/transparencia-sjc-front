import { TestBed, inject } from '@angular/core/testing';

import { GetSalariosService } from './get-salarios.service';

describe('GetSalariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSalariosService]
    });
  });

  it('should be created', inject([GetSalariosService], (service: GetSalariosService) => {
    expect(service).toBeTruthy();
  }));
});
