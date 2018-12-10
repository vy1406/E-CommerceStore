import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ContentHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CartRoutingModule,
        ContentHeaderModule,
        NgbModule.forRoot(),
    ],
    declarations: [CartComponent]
})
export class CartModule { }
