import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { CommonsService } from './services/commons/commons.service';
import { CrawlerService } from './services/crawler/crawler.service';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  BrowserModule, MaterializeModule],
  providers: [CommonsService, CrawlerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
