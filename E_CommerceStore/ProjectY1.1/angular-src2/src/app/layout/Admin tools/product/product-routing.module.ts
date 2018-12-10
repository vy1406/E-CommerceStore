import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';

const routes: Routes = [
    { path: '', component: ProductComponent },
    { path: 'add', loadChildren: './product-add/product-add.module#ProductAddModule' },
    { path: 'info/:id', loadChildren: './product-info/product-info.module#ProductInfoModule' },
    { path: 'remove-confirm/:id', loadChildren: './remove-confirm/remove-confirm.module#RemoveConfirmModule' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
