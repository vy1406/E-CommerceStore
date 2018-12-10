import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistoryItemRoutingModule } from './history-item-routing.module';
import { HistoryItemComponent } from './history-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentHeaderModule } from '../../../shared';
import { SharedPipesModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        HistoryItemRoutingModule,
        ContentHeaderModule,
        NgbModule.forRoot(),
        SharedPipesModule,
        FormsModule
    ],
    declarations: [HistoryItemComponent]
})
export class HistoryItemModule { }
