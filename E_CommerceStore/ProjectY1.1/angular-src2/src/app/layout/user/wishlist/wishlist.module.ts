import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentHeaderModule } from '../../../shared';
import { ProductBoxModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        WishlistRoutingModule,
        ContentHeaderModule,
        NgbModule.forRoot(),
        ProductBoxModule
    ],
    declarations: [WishlistComponent]
})
export class WishlistModule { }
