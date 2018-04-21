import { Injectable } from '@angular/core';

@Injectable()
export class InputRemuneracaoCamaraService {
  constructor() {}
}

// tslint:disable-next-line:class-name
export interface inputRemuneracaoCamara {
  imagem: String;
  cardTitle: String;
  linkTitle: String;
  linkAddress: String;
  cardInfo: String;
}
