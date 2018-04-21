import { Component, OnInit } from '@angular/core';
import { CommonsService } from '../services/commons/commons.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  logo: String = '';
  git: String[] = [];

  constructor(private commons: CommonsService) {}

  ngOnInit() {
    this.logo = this.commons.getLogo();
    this.git = this.commons.getGit();
  }
}
