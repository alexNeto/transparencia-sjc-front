import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Remuneracao } from '../data-models/remuneracao';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RemuneracaoDataserviceService {
  url = '';
  constructor(private http: Http) {}

  public getDadosRemuneracao(
    mes: String,
    ano: String
  ): Observable<Remuneracao[]> {
    const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    return this.http
      .get(this.url)
      .map(res => this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response): Promise<any> {
    return res.json();
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
