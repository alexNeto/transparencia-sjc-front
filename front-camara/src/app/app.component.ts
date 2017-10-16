import { Component, OnInit } from '@angular/core';

import { PegatudoService } from './pegatudo.service';
import { Dados } from './dados';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PegatudoService]
})

export class AppComponent implements OnInit{

  private req: any;
  title: String = 'Salários SJC';
  constructor(){
  }

  ngOnInit(){ }
}
