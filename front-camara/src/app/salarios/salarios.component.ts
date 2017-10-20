import { Dados } from './dados';
import { GetSalariosService } from './get-salarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salarios',
  templateUrl: './salarios.component.html',
  styleUrls: ['./salarios.component.scss']
})
export class SalariosComponent implements OnInit {

  dadosParcial: any;
  dados: Dados;

  constructor(private getSalarios: GetSalariosService) {
    this.dadosParcial = this.getSalarios.getDados();
    this.dados = this.dadosParcial;
    console.log(this.dados);
    console.log(this.dados);
    console.log(this.dadosParcial);


   }

  ngOnInit() {
  }

}
