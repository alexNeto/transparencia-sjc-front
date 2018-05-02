/**
 * Angular Core
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
/**
 * Seervicos
 */
import { TabelaMockService } from '../services/mock/tabela-mock.service';
import { CommonsService } from '../services/commons/commons.service';
import { CrawlerService } from '../services/crawler/crawler.service';
/**
 * Componentes
 */
import { RemuneracaoCardComponent } from './remuneracao-card/remuneracao-card.component';
import { HomeComponent } from './home/home.component';
import { RemuneracaoDataserviceService } from './services/remuneracao-dataservice.service';
import { TabelaInicialComponent } from './modules/tabela-inicial/tabela-inicial.component';
import { PorCargoComponent } from './modules/por-cargo/por-cargo.component';

const appRoutes: Routes = [
  {
    path: 'remuneracao-camara',
    component: HomeComponent
  },
  {
    path: 'remuneracao-camara/tabela-inicial',
    component: TabelaInicialComponent
  },
  {
    path: 'remuneracao-camara/por-cargo',
    component: PorCargoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    MaterializeModule
  ],
  declarations: [
    HomeComponent,
    TabelaInicialComponent,
    RemuneracaoCardComponent,
    PorCargoComponent
  ],
  exports: [],
  providers: [
    CommonsService,
    CrawlerService,
    TabelaMockService,
    RemuneracaoDataserviceService
  ]
})
export class RemuneracaoCamaraSjcModule {}
