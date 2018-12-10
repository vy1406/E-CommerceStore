import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ValidateService, ProductService, CategoryService, CountryService } from '../../../../shared';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
  animations: [routerTransition()]
})
export class ProductAddComponent implements OnInit {
    form: FormGroup;
    countries: Object[] = [];
    categories: Object[] = [];
    formData: FormData = new FormData;

    constructor(
        private validateService: ValidateService,
        private flashMessage: FlashMessagesService,
        private router: Router,
        private fb: FormBuilder,
        private categoryService: CategoryService,
        private countryService: CountryService,
        private productService: ProductService)
    {
        this.form = this.fb.group({
            productName: ['', [Validators.required, Validators.minLength(3)]],
            price: ['', [Validators.required, Validators.min(1)]],
            info: [''],
            pic: [''],
            category: ['', Validators.required],
            volume: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
            origin: ['', Validators.required],
            capacity: ['', [Validators.required, Validators.min(0.33), Validators.max(2)]],
        });
    }

    ngOnInit() {
        this.categoryService.getAllCategories().subscribe(data => {
            this.categories = data.answer;
        },
            err => {
                console.log(err);
                return false;
        });

        this.countryService.getAllCountries().subscribe(data => {
            this.countries = data.answer;
        },
            err => {
                console.log(err);
                return false;
            });
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
            this.form.controls['productName'].markAsDirty();
            this.form.controls['price'].markAsDirty();
            this.form.controls['category'].markAsDirty();
            this.form.controls['volume'].markAsDirty();
            this.form.controls['origin'].markAsDirty();
            this.form.controls['capacity'].markAsDirty();
            return false;
        }

        this.formData = this.validateService.buildFormData(this.form, this.formData);

        // Add product
        this.productService.addProduct(this.formData).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('Product has been added', { cssClass: 'alert-success', timeout: 3000 });
                this.router.navigate(['/admin-tools/product']);
            }
            else {
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                window.scrollTo(0, 0);
                this.router.navigate(['/admin-tools/product/add']);
            }
        });
  }

}
