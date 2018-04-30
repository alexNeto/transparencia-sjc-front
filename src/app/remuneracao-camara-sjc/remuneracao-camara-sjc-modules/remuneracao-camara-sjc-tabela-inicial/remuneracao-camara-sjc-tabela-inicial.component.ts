import { Component, OnInit } from '@angular/core';
import { TabelaMockService } from '../../../services/mock/tabela-mock.service';
import { RemeneracaoStorageService } from '../../remuneracao-camara-sjc-services/remeneracao-storage.service';

@Component({
  selector: 'app-remuneracao-camara-sjc-tabela-inicial',
  templateUrl: './remuneracao-camara-sjc-tabela-inicial.component.html',
  styleUrls: ['./remuneracao-camara-sjc-tabela-inicial.component.less']
})
export class RemuneracaoCamaraSjcTabelaInicialComponent implements OnInit {
  funcionarios: Object;
  dadosIniciais: any;
  constructor(private tabela: TabelaMockService, private dados: RemeneracaoStorageService) {}

  ngOnInit() {
    this.funcionarios = this.tabela.getTabelaInicial();
    this.dadosIniciais = this.dados.getDadosRemuneracao('Fevereiro', '2018');
  }

}
