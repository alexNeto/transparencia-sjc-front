import { GetSalariosService } from './get-salarios.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalariosComponent } from './salarios.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SalariosComponent
  ],
  exports: [
    SalariosComponent
  ],
  providers: [
    GetSalariosService
  ]
})
export class SalariosModule { }
