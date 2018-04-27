import { Injectable, OnInit } from '@angular/core';
import { Remuneracao } from '../data-models/remuneracao';
import { RemuneracaoDataserviceService } from './remuneracao-dataservice.service';

@Injectable()
export class RemeneracaoStorageService {
  remuneracao: Remuneracao[];
  mes: String;
  ano: String;
  statusCode: number;

  constructor(private remuneracaoDataservice: RemuneracaoDataserviceService) {}

  public getDadosRemuneracao(ano: String, mes: String) {
    if (this.verificaAtributo(ano, mes)) {
      return this.getFromApi(ano, mes);
    } else {
      return this.remuneracao;
    }
  }
  private getFromApi(mes: String, ano: String) {
    return this.remuneracaoDataservice
      .getDadosRemuneracao(mes, ano)
      .subscribe(
        data => (this.remuneracao = data),
        errorCode => (this.statusCode = errorCode)
      );
  }

  private verificaAtributo(ano: String, mes: String): Boolean {
    if (
      this.remuneracao === undefined &&
      (this.ano !== ano || this.mes !== mes)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
