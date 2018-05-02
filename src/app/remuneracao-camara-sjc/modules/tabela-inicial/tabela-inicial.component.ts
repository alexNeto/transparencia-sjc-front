import { Component, OnInit } from '@angular/core';
import { TabelaMockService } from '../../../services/mock/tabela-mock.service';
import { Remuneracao } from '../../data-models/remuneracao';
import { RemuneracaoStorageService } from '../../services/remuneracao-storage.service';

@Component({
  selector: 'app-tabela-inicial',
  templateUrl: './tabela-inicial.component.html',
  styleUrls: ['./tabela-inicial.component.less']
})
export class TabelaInicialComponent implements OnInit {
  funcionarios: any;
  constructor(
    private tabela: TabelaMockService,
    private remuneracaoStorage: RemuneracaoStorageService
  ) {}

  ngOnInit() {
    this.remuneracaoStorage.getDadosRemuneracao();
    // this.funcionarios = this.tabela.getTabelaInicial();
  }
}
