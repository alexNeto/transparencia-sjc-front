import { Component, OnInit } from '@angular/core';
import { inputRemuneracaoCamara } from '../../services/interfaces/input-remuneracao-camara.service';

@Component({
  selector: 'app-remuneracao-camara-sjc',
  templateUrl: './remuneracao-camara-sjc.component.html',
  styleUrls: ['./remuneracao-camara-sjc.component.less']
})
export class RemuneracaoCamaraSjcComponent implements OnInit {
  rawTable: inputRemuneracaoCamara;

  constructor() {
    this.rawTable = {
      imagem: '../../../assets/images/sample.png',
      cardTitle: 'Card Title',
      cardInfo: ' Card Info',
      linkAddress: '#',
      linkTitle: 'Link Title'
    };
  }

  ngOnInit() {}
}
