import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoveConfirmComponent } from './remove-confirm.component';

const routes: Routes = [
    { path: '', component: RemoveConfirmComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RemoveConfirmRoutingModule { }
