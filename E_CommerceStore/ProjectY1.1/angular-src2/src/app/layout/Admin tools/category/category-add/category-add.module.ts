import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoryAddRoutingModule } from './category-add-routing.module';
import { CategoryAddComponent } from './category-add.component';
import { AdminHeaderModule } from './../../../../shared';

@NgModule({
  imports: [
    CommonModule,
      CategoryAddRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      AdminHeaderModule
  ],
  declarations: [CategoryAddComponent]
})
export class CategoryAddModule { }
