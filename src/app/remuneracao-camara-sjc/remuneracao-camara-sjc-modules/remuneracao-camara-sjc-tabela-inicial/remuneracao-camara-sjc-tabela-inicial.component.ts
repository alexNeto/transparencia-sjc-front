import { Component, OnInit } from '@angular/core';
import { TabelaMockService } from '../../../services/mock/tabela-mock.service';

@Component({
  selector: 'app-remuneracao-camara-sjc-tabela-inicial',
  templateUrl: './remuneracao-camara-sjc-tabela-inicial.component.html',
  styleUrls: ['./remuneracao-camara-sjc-tabela-inicial.component.less']
})
export class RemuneracaoCamaraSjcTabelaInicialComponent implements OnInit {
  funcionarios: Object;
  constructor(private tabela: TabelaMockService) {}

  ngOnInit() {
    this.funcionarios = this.tabela.getTabelaInicial();
  }
}
