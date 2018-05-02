import { Component, OnInit } from '@angular/core';
import { inputRemuneracaoCamara } from '../../services/interfaces/input-remuneracao-camara.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  tabelaInicial: inputRemuneracaoCamara;
  porCargo: inputRemuneracaoCamara;

  constructor() {
    this.tabelaInicial = {
      imagem: '../../../assets/images/sample.png',
      cardTitle: 'Tabela Inicial',
      cardInfo:
        'Aqui está a tabela da qual os dados foram analizados. ' +
        'Todos os dados analizados são públicos e livre para acesso e utilização da população',
      linkAddress: 'tabela-inicial',
      linkTitle: 'ver tabela inicial'
    };
    this.porCargo = {
      imagem: '../../../assets/images/sample.png',
      cardTitle: 'Tabela Por Cargo',
      cardInfo:
        'Aqui tabela está separada por cargos. ' +
        'Todos os dados analizados são públicos e livre para acesso e utilização da população',
      linkAddress: 'por-cargo',
      linkTitle: 'ver tabela de cargos'
    };
  }

  ngOnInit() {}
}
