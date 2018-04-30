/**
 * Angular Core
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { HttpModule } from '@angular/http';

/**
 * Seervicos
 */
import { TabelaMockService } from './services/mock/tabela-mock.service';
import { CommonsService } from './services/commons/commons.service';
import { CrawlerService } from './services/crawler/crawler.service';
/**
 * Componentes
 */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
/**
 *  Modules
 */
import { RemuneracaoCamaraSjcModule } from './remuneracao-camara-sjc/remuneracao-camara-sjc.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    /**
     * Módulos internos
     */
    RemuneracaoCamaraSjcModule,
    /**
     * Módulos externos
     */
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpModule,
    BrowserModule,
    MaterializeModule
  ],
  providers: [CommonsService, CrawlerService, TabelaMockService],
  bootstrap: [AppComponent]
})
export class AppModule {}
