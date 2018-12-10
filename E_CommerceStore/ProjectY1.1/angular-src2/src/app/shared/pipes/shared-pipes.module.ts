import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { OrderByPipe } from './order-by.pipe';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [FilterPipe, OrderByPipe, CapitalizePipe],
    exports: [FilterPipe, OrderByPipe, CapitalizePipe]
})
export class SharedPipesModule { }
