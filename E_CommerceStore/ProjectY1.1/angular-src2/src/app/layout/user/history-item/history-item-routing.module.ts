import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryItemComponent } from './history-item.component';

const routes: Routes = [
    { path: '', component: HistoryItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryItemRoutingModule { }
