import { Component, OnInit } from '@angular/core';
import { TabelaMockService } from '../../../services/mock/tabela-mock.service';
import { RemuneracaoDataserviceService } from '../../remuneracao-camara-sjc-services/remuneracao-dataservice.service';
import { Remuneracao } from '../../data-models/remuneracao';

@Component({
  selector: 'app-remuneracao-camara-sjc-tabela-inicial',
  templateUrl: './remuneracao-camara-sjc-tabela-inicial.component.html',
  styleUrls: ['./remuneracao-camara-sjc-tabela-inicial.component.less']
})
export class RemuneracaoCamaraSjcTabelaInicialComponent implements OnInit {
  dadosIniciais: any;
  funcionarios: any;
  constructor(
    private tabela: TabelaMockService,
    private remuneracaoService: RemuneracaoDataserviceService
  ) {}

  ngOnInit() {
    this.getRemuneracao();
    // this.funcionarios = this.tabela.getTabelaInicial();
  }

  public getRemuneracao() {
    this.remuneracaoService.getData().subscribe(
      data => {
        this.funcionarios = data;
      },
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }
}
