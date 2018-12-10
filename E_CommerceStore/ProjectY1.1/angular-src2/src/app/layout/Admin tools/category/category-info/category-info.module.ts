import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoryInfoRoutingModule } from './category-info-routing.module';
import { CategoryInfoComponent } from './category-info.component';
import { AdminHeaderModule } from './../../../../shared';

@NgModule({
  imports: [
    CommonModule,
      CategoryInfoRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      AdminHeaderModule
  ],
  declarations: [CategoryInfoComponent]
})
export class CategoryInfoModule { }
