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
import { RemuneracaoCamaraSjcComponent } from './remuneracao-camara-sjc/remuneracao-camara-sjc.component';
// tslint:disable-next-line:max-line-length
import { RemuneracaoCamaraSjcTabelaInicialComponent } from './remuneracao-camara-sjc-modules/remuneracao-camara-sjc-tabela-inicial/remuneracao-camara-sjc-tabela-inicial.component';
import { RemuneracaoCardComponent } from './remuneracao-card/remuneracao-card.component';
import { RemuneracaoDataserviceService } from './remuneracao-camara-sjc-services/remuneracao-dataservice.service';

const appRoutes: Routes = [
  {
    path: 'remuneracao-camara',
    component: RemuneracaoCamaraSjcComponent
  },
  {
    path: 'remuneracao-camara/tabela-inicial',
    component: RemuneracaoCamaraSjcTabelaInicialComponent
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
    RemuneracaoCardComponent,
    RemuneracaoCamaraSjcComponent,
    RemuneracaoCamaraSjcTabelaInicialComponent
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
