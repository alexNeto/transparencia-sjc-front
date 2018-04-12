import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { CommonsService } from './services/commons/commons.service';
import { CrawlerService } from './services/crawler/crawler.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, MaterializeModule],
  providers: [CommonsService, CrawlerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
