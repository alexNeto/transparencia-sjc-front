import { Component, OnInit } from '@angular/core';
import { RemuneracaoStorageService } from '../../services/remuneracao-storage.service';

@Component({
  selector: 'app-por-cargo',
  templateUrl: './por-cargo.component.html',
  styleUrls: ['./por-cargo.component.less']
})
export class PorCargoComponent implements OnInit {
  cargos: String[];
  funcionarios: any;
  cargo: String;
  constructor(private remuneracaoStorage: RemuneracaoStorageService) {}

  ngOnInit() {
    this.cargos = this.remuneracaoStorage.getDadosCargos();
    this.funcionarios = this.remuneracaoStorage.getDadosRemuneracao();
  }
}
