import { Component, OnInit } from '@angular/core';
import { CommonsService } from '../services/commons/commons.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  logo: String;

  constructor(private commons: CommonsService) {}

  ngOnInit() {
    this.logo = this.commons.getLogo();
  }
}
