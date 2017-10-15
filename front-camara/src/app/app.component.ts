import { Component, OnInit, OnDestroy } from '@angular/core';

import { PegatudoService } from './pegatudo.service';
import { Dados } from './dados';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PegatudoService]
})

export class AppComponent implements OnInit, OnDestroy{

/*
  private req: any;
  title: String = 'Salários SJC';
  dados: [Dados];
  constructor(private tudo:PegatudoService){
  }

  ngOnInit(){
    this.req = this.tudo.list().subscribe(data=>{
      this.dados = data as [Dados];
    })
  }

  ngOnDestroy(){
    this.req.unsubscribe()
  }
*/
}
