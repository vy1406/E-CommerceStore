import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PurchaseHistoryRoutingModule } from './purchase-history-routing.module';
import { PurchaseHistoryComponent } from './purchase-history.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentHeaderModule } from '../../../shared';
import { SharedPipesModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        PurchaseHistoryRoutingModule,
        ContentHeaderModule,
        NgbModule.forRoot(),
        SharedPipesModule,
        FormsModule
    ],
    declarations: [PurchaseHistoryComponent]
})
export class PurchaseHistoryModule { }
