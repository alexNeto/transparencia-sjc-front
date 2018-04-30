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
    let result: any;
    if (this.verificaAtributo(ano, mes)) {
      result = this.getFromApi(ano, mes);
    } else {
      result = this.remuneracao;
    }
    this.mes = mes;
    this.ano = ano;
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
