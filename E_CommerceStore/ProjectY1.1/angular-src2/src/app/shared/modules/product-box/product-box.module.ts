import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductBoxComponent } from './product-box.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [ProductBoxComponent],
    exports: [ProductBoxComponent],
})
export class ProductBoxModule { }
