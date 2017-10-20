import { SalariosComponent } from './salarios/salarios.component';
import { SalariosModule } from './salarios/salarios.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SalariosModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}


