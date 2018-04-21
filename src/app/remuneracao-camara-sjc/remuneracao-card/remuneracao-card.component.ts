import { Component, OnInit, Input } from '@angular/core';
import { inputRemuneracaoCamara } from '../../services/interfaces/input-remuneracao-camara.service';

@Component({
  selector: 'app-remuneracao-card',
  templateUrl: './remuneracao-card.component.html',
  styleUrls: ['./remuneracao-card.component.less']
})
export class RemuneracaoCardComponent implements OnInit {
  @Input() data: inputRemuneracaoCamara;

  constructor() {
    this.data = {
      imagem: '',
      cardTitle: '',
      linkTitle: '',
      linkAddress: '',
      cardInfo: ''
    };
  }

  ngOnInit() {}
}
