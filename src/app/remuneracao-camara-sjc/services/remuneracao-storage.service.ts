import { Injectable, OnInit } from '@angular/core';
import { RemuneracaoDataserviceService } from './remuneracao-dataservice.service';

@Injectable()
export class RemuneracaoStorageService implements OnInit {
  constructor(private remuneracaoService: RemuneracaoDataserviceService) {}

  funcionarios: any;

  ngOnInit() {
    if (this.funcionarios !== undefined) {
      this.getRemuneracao();
    }
  }
  public getRemuneracao() {
    this.remuneracaoService.getData().subscribe(
      data => {
        this.funcionarios = data;
      },
      err => console.error(err), // TODO - tratar os erros
      () => console.log('done loading foods')
    );
  }

  public separaCargos(){
    let cargos: String[];

    this.funcionarios.forEach(element => {
      cargos.push(element.cargo);
    });
    return cargos;
  }
  public getDadosRemuneracao() {
    return this.funcionarios;
  }

  public getDadosCargos() {
    return this.separaCargos();
  }
}
