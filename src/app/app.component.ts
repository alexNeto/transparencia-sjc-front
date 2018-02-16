import { Component, OnInit } from '@angular/core';
import { CommonsService } from './services/commons/commons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  logo: String = "";
  git: String[] = [];

  constructor(private commons: CommonsService) { }

  ngOnInit(){
    this.logo = this.commons.getLogo();
    this.git = this.commons.getGit();
    
  }

}
