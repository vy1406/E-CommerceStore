import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryProductsComponent } from './category-products.component';
import { CategoryProductsRoutingModule } from './category-products-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductBoxModule } from '../../shared';
import { ContentHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        CategoryProductsRoutingModule,
        NgbModule.forRoot(),
        ContentHeaderModule,
        ProductBoxModule
    ],
    declarations: [CategoryProductsComponent]
})
export class CategoryProductsModule { }
