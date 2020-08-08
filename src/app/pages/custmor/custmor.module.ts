import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustmorRoutingModule } from './custmor-routing.module';
import { CustmorComponent } from './custmor.component';


@NgModule({
  declarations: [CustmorComponent],
  imports: [
    CommonModule,
    CustmorRoutingModule
  ]
})
export class CustmorModule { }
