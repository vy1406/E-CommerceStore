import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoryRemoveRoutingModule } from './category-remove-routing.module';
import { CategoryRemoveComponent } from './category-remove.component';
import { AdminHeaderModule } from './../../../../shared';

@NgModule({
  imports: [
    CommonModule,
      CategoryRemoveRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      AdminHeaderModule
  ],
  declarations: [CategoryRemoveComponent]
})
export class CategoryRemoveModule { }
