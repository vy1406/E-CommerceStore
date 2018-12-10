import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { CategoryService } from '../../../shared';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Category } from '../../../shared';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [routerTransition()]
})
export class CategoryComponent implements OnInit {

    categories: Category[] = [];
    column: string;
    isDesc: boolean = false;
    direction: number;

    constructor(
        private flashMessage: FlashMessagesService,
        private router: Router,
        private categoryService: CategoryService) { }

    ngOnInit() {
        this.categoryService.getAllCategories().subscribe(data => {
            this.categories = data.answer;
            //console.log(this.products);
        },
            err => {
                console.log(err);
                return false;
            });
    }

    sort(property) {
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    }

}
