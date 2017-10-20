import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetSalariosService {

private apiUrl: string;
private data: any;

  constructor(private http: Http) {
    this.apiUrl = 'http://127.0.0.1:8000/';
    console.log('conectando ' + this.apiUrl);
    console.log(this.getContract());
    console.log(this.getDados());
    console.log('conectado');
  }

/*
  getDados() {
    return ['Java', 'PHP', 'Node.js', 'Angular'];
  }
*/

  getDados() {
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json());
  }

  getContract() {
    this.getDados().subscribe(data => {
      console.log(data);
      this.data = data;
    });

  }


}
