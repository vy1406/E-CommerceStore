import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ValidateService, CategoryService } from '../../../../shared';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss'],
  animations: [routerTransition()]
})
export class CategoryAddComponent implements OnInit {

    form: FormGroup;
    formData: FormData = new FormData;

    constructor(
        private validateService: ValidateService,
        private flashMessage: FlashMessagesService,
        private router: Router,
        private fb: FormBuilder,
        private categoryService: CategoryService) {
        this.form = this.fb.group({
            categoryName: ['', [Validators.required, Validators.minLength(3)]],
            pic: [''],
        });
    }

    ngOnInit() {
    }

    fileChange(event) {
        let fileList: FileList = event.target.files;

        if (fileList.length > 0) {
            console.log("upload file attempt");
            let file: File = fileList[0];
            this.formData.append('pic', file, file.name);
        }
    }

    onAddSubmit() {
        console.log("Form status: " + this.form.status);

        // Required Fields
        if (this.form.status == "INVALID") {
            this.form.controls['categoryName'].markAsDirty();
            return false;
        }

        this.formData = this.validateService.buildFormData(this.form, this.formData);

        // Add product
        this.categoryService.addCategory(this.formData).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('Category has been added', { cssClass: 'alert-success', timeout: 3000 });
                this.router.navigate(['/admin-tools/category']);
            }
            else {
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                window.scrollTo(0, 0);
                this.router.navigate(['/admin-tools/category/add']);
            }
        });
    }

}
