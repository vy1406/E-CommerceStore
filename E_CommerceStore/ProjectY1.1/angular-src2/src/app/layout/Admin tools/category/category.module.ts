import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { AdminHeaderModule } from './../../../shared';
import { SharedPipesModule } from './../../../shared';

@NgModule({
    imports: [
        CommonModule,
        CategoryRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AdminHeaderModule,
        SharedPipesModule
    ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
