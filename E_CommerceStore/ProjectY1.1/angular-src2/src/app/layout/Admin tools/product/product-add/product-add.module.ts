import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductAddRoutingModule } from './product-add-routing.module';
import { ProductAddComponent } from './product-add.component';
import { AdminHeaderModule } from './../../../../shared';

@NgModule({
  imports: [
    CommonModule,
      ProductAddRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      AdminHeaderModule
  ],
  declarations: [ProductAddComponent]
})
export class ProductAddModule { }
