import { GetSalariosService } from './get-salarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salarios',
  templateUrl: './salarios.component.html',
  styleUrls: ['./salarios.component.scss']
})
export class SalariosComponent implements OnInit {

  dados: any;

  constructor(private getSalarios: GetSalariosService) {
    this.dados = this.getSalarios.getDados();
    console.log(this.dados);


   }

  ngOnInit() {
  }

}
