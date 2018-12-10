import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { ContentHeaderComponent } from './content-header.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedPipesModule
    ],
    declarations: [ContentHeaderComponent],
    exports: [ContentHeaderComponent]
})
export class ContentHeaderModule { }
