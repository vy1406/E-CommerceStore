import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminToolsComponent } from './admin-tools.component';
import { AuthGuard } from "app/shared";

const routes: Routes = [
    { path: '', component: AdminToolsComponent },
    { path: 'product', loadChildren: './product/product.module#ProductModule' },
    { path: 'category', loadChildren: './category/category.module#CategoryModule' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminToolsRoutingModule { }
