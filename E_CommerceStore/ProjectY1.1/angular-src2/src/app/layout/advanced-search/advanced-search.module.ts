import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdvancedSearchComponent } from './advanced-search.component';
import { AdvancedSearchRoutingModule } from './advanced-search-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductBoxModule } from '../../shared';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        AdvancedSearchRoutingModule,
        NgbModule.forRoot(),
        ProductBoxModule,
    ],
    declarations: [AdvancedSearchComponent]
})
export class AdvancedSearchModule { }
