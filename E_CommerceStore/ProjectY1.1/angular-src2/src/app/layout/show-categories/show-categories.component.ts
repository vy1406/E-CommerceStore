import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CategoryService } from '../../shared';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Category } from '../../shared';

@Component({
  selector: 'app-show-categories',
  templateUrl: './show-categories.component.html',
  styleUrls: ['./show-categories.component.scss'],
  animations: [routerTransition()]
})
export class ShowCategoriesComponent implements OnInit {
    categories: Object[] = [];
    constructor(private flashMessage: FlashMessagesService,
        private router: Router,
        private categoryService: CategoryService) { }

    ngOnInit() {
        this.categoryService.getAllCategories().subscribe(data => {
            this.categories = data.answer;
            //console.log(this.categories);
        },
            err => {
                console.log(err);
                return false;
            });
    }

}
