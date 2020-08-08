import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatlogRoutingModule } from './catlog-routing.module';
import { CatlogComponent } from './catlog.component';


@NgModule({
  declarations: [CatlogComponent],
  imports: [
    CommonModule,
    CatlogRoutingModule
  ]
})
export class CatlogModule { }
