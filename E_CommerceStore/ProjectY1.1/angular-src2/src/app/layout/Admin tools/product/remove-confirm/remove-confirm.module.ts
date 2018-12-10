import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RemoveConfirmRoutingModule } from './remove-confirm-routing.module';
import { RemoveConfirmComponent } from './remove-confirm.component';
import { AdminHeaderModule } from './../../../../shared';

@NgModule({
  imports: [
    CommonModule,
      RemoveConfirmRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      AdminHeaderModule
  ],
  declarations: [RemoveConfirmComponent]
})
export class RemoveConfirmModule { }
