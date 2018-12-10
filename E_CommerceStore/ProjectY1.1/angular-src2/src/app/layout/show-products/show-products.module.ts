import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowProductsComponent } from './show-products.component';
import { ShowProductsRoutingModule } from './show-products-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductBoxModule } from '../../shared';
import { ContentHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        ShowProductsRoutingModule,
        NgbModule.forRoot(),
        ProductBoxModule,
        ContentHeaderModule
    ],
    declarations: [ShowProductsComponent]
})
export class ShowProductsModule { }
