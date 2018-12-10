import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowCategoriesComponent } from './show-categories.component';

const routes: Routes = [
    { path: '', component: ShowCategoriesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowCategoriesRoutingModule { }
