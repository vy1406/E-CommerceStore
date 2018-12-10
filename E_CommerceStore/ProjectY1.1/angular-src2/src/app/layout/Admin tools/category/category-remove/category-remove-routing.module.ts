import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryRemoveComponent } from './category-remove.component';

const routes: Routes = [
    { path: '', component: CategoryRemoveComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRemoveRoutingModule { }
