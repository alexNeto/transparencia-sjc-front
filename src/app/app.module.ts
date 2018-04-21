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
// tslint:disable-next-line:max-line-length
import { RemuneracaoCamaraSjcTabelaInicialComponent } from './remuneracao-camara-sjc/remuneracao-camara-sjc-modules/remuneracao-camara-sjc-tabela-inicial/remuneracao-camara-sjc-tabela-inicial.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },

  /**
   * Remuneracao Camara
   * Módulo de Remuneracao da Câmara municipal de
   * São José dos Campos
   */
  { path: 'remuneracao-camara', component: RemuneracaoCamaraSjcComponent },
  { path: 'remuneracao-camara/tabela-inicial', component: RemuneracaoCamaraSjcTabelaInicialComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    HeaderComponent,
    FooterComponent,
    RemuneracaoCardComponent,
    RemuneracaoCamaraSjcComponent,
    RemuneracaoCamaraSjcTabelaInicialComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    MaterializeModule
  ],
  providers: [CommonsService, CrawlerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
