import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';

const routes: Routes = [
    { path: '', component: CategoryComponent },
    { path: 'add', loadChildren: './category-add/category-add.module#CategoryAddModule' },
    { path: 'info/:id', loadChildren: './category-info/category-info.module#CategoryInfoModule' },
    { path: 'category-remove/:id', loadChildren: './category-remove/category-remove.module#CategoryRemoveModule' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule { }
