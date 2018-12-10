import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminToolsRoutingModule } from './admin-tools-routing.module';
import { AdminToolsComponent } from './admin-tools.component';
import { AdminHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        AdminToolsRoutingModule,
        AdminHeaderModule
    ],
    declarations: [AdminToolsComponent]
})
export class AdminToolsModule { }
