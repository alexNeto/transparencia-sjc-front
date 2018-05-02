import { Injectable } from '@angular/core';
import { Remuneracao } from '../data-models/remuneracao';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RemuneracaoDataserviceService {
  url = 'http://localhost:5000/salario_camara_municipal';

  constructor(private http: HttpClient) {}

  public getData() {
    return this.http.get(this.url);
  }
}
