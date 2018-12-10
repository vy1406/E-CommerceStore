import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { CategoryService } from '../../../../shared';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../../shared';

@Component({
  selector: 'app-category-remove',
  templateUrl: './category-remove.component.html',
  styleUrls: ['./category-remove.component.scss'],
  animations: [routerTransition()]
})
export class CategoryRemoveComponent implements OnInit {

    category: Category = new Category();
    id: number;

    constructor(
        private flashMessage: FlashMessagesService,
        private router: Router,
        private categoryService: CategoryService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });

        // Get category object from serve
        this.categoryService.getCategoryById(this.id).subscribe(data => {
            this.category = data.answer;

            if (this.category == null) {
                this.router.navigate(['/admin-tools/category']);
            }
        },
            err => {
                console.log(err);
                return false;
            });
    }

    // Remove category
    onClickRemoveConfirm() {
        this.categoryService.removeCategory(this.category).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('Category has been removed', { cssClass: 'alert-success', timeout: 3000 });
                this.router.navigate(['/admin-tools/category']);
            }
            else {
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                window.scrollTo(0, 0);
                this.router.navigate(['/admin-tools/category/category-remove', this.id]);
            }
        });
    }


}
