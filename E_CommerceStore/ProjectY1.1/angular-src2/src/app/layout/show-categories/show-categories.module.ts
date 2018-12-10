import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCategoriesComponent } from './show-categories.component';
import { ShowCategoriesRoutingModule } from './show-categories-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryBoxComponent } from '../../shared';
import { ContentHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        ShowCategoriesRoutingModule,
        NgbModule.forRoot(),
        ContentHeaderModule
    ],
    declarations: [ShowCategoriesComponent, CategoryBoxComponent]
})
export class ShowCategoriesModule { }
