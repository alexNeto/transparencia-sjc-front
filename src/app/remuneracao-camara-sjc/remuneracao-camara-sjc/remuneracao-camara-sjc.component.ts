import { Component, OnInit } from '@angular/core';
import { inputRemuneracaoCamara } from '../../services/interfaces/input-remuneracao-camara.service';

@Component({
  selector: 'app-remuneracao-camara-sjc',
  templateUrl: './remuneracao-camara-sjc.component.html',
  styleUrls: ['./remuneracao-camara-sjc.component.less']
})
export class RemuneracaoCamaraSjcComponent implements OnInit {
  remuneracaoCamaraTabelaInicial: inputRemuneracaoCamara;

  constructor() {
    this.remuneracaoCamaraTabelaInicial = {
      imagem: '../../../assets/images/sample.png',
      cardTitle: 'Tabela Inicial',
      cardInfo:
        'Aqui está a tabela da qual os dados foram analizados. ' +
        'Todos os dados analizados são públicos e livre para acesso e utilização da população',
      linkAddress: 'tabela-inicial',
      linkTitle: 'ver tabela inicial'
    };
  }

  ngOnInit() {}
}
