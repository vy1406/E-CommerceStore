import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminHeaderComponent } from './admin-header.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [AdminHeaderComponent],
    exports: [AdminHeaderComponent]
})
export class AdminHeaderModule { }
