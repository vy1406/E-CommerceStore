import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ValidateService, CategoryService } from '../../../../shared';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../../shared';

@Component({
  selector: 'app-category-info',
  templateUrl: './category-info.component.html',
  styleUrls: ['./category-info.component.scss'],
  animations: [routerTransition()]
})
export class CategoryInfoComponent implements OnInit {

    form: FormGroup;
    category: Category;
    formData: FormData = new FormData;
    id: number;

    constructor(
        private validateService: ValidateService,
        private flashMessage: FlashMessagesService,
        private router: Router,
        private fb: FormBuilder,
        private categoryService: CategoryService,
        private route: ActivatedRoute) {
        this.form = this.fb.group({
            categoryName: ["", [Validators.required, Validators.minLength(3)]],
            pic: [''],
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });

        // Get category info by id
        this.categoryService.getCategoryById(this.id).subscribe(data => {
            this.category = data.answer;

            if (this.category == null) {
                this.router.navigate(['/admin-tools/category']);
            }
            else {
                //console.log(this.category)
                this.form.controls['categoryName'].setValue(this.category.categoryName);
                this.form.controls['pic'].setValue("");
            }
        },
            err => {
                console.log(err);
                return false;
            });
    }

    fileChange(event) {
        let fileList: FileList = event.target.files;

        if (fileList.length > 0) {
            let file: File = fileList[0];
            this.formData.append('pic', file, file.name);
        }
    }

    onUpdateSubmit() {

        // Required Fields
        if (this.form.status == "INVALID") {
            this.form.controls['categoryName'].markAsDirty();
            return false;
        }
        this.formData.append("_id", this.category._id);
        this.formData = this.validateService.buildFormData(this.form, this.formData);

        // Update product
        this.categoryService.updateCategory(this.formData).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('Category has been updated', { cssClass: 'alert-success', timeout: 3000 });
                this.router.navigate(['/admin-tools/category']);
            }
            else {
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                window.scrollTo(0, 0);
                this.router.navigate(['/admin-tools/category/info', this.category._id]);
            }
        });
    }

    onClickRemoveConfirm() {
        this.router.navigate(['/admin-tools/category/category-remove', this.category._id]);
    }

}
