import { Component, OnInit } from '@angular/core';

import { Dados } from './dados';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  private req: any;
  title: String = 'Salários SJC';
  constructor() {
  }

  ngOnInit() { }
}
