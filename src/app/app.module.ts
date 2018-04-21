import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { CommonsService } from './services/commons/commons.service';
import { CrawlerService } from './services/crawler/crawler.service';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RemuneracaoCamaraSjcComponent } from './remuneracao-camara-sjc/remuneracao-camara-sjc/remuneracao-camara-sjc.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RemuneracaoCardComponent } from './remuneracao-camara-sjc/remuneracao-card/remuneracao-card.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'remuneracao-camara', component: RemuneracaoCamaraSjcComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    RemuneracaoCamaraSjcComponent,
    HeaderComponent,
    FooterComponent,
    RemuneracaoCardComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    MaterializeModule
  ],
  providers: [CommonsService, CrawlerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
