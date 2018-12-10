import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AdminHeaderModule } from './../../../shared';
import { SharedPipesModule } from './../../../shared';

@NgModule({
  imports: [
    CommonModule,
      ProductRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      AdminHeaderModule,
      SharedPipesModule
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
