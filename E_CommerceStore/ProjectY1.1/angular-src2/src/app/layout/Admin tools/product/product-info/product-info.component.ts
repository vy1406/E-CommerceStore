import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ValidateService, ProductService, CategoryService, CountryService } from '../../../../shared';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../shared';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
  animations: [routerTransition()]
})
export class ProductInfoComponent implements OnInit {
    form: FormGroup;
    countries: Object[] = [];
    categories: Object[] = [];
    product: Product;
    formData: FormData = new FormData;
    id: number;

    constructor(
        private validateService: ValidateService,
        private flashMessage: FlashMessagesService,
        private router: Router,
        private fb: FormBuilder,
        private categoryService: CategoryService,
        private countryService: CountryService,
        private productService: ProductService,
        private route: ActivatedRoute)
    {
        this.form = this.fb.group({
            productName: ["", [Validators.required, Validators.minLength(3)]],
            price: ["", [Validators.required, Validators.min(1)]],
            info: [''],
            pic: [''],
            category: ['', Validators.required],
            volume: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
            origin: ['', Validators.required],
            capacity: ['', [Validators.required, Validators.min(0.33), Validators.max(2)]],
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        // Get product info by id
        this.productService.getProductById(this.id).subscribe(data => {
            this.product = data.answer;

            if (this.product == null) {
                this.router.navigate(['/admin-tools/product']);
            }
            else {
                //console.log(this.product)
                this.form.controls['productName'].setValue(this.product.productName);
                this.form.controls['price'].setValue(this.product.price);
                this.form.controls['info'].setValue(this.product.info);
                this.form.controls['pic'].setValue("");
                this.form.controls['category'].setValue(this.product.category);
                this.form.controls['volume'].setValue(this.product.volume);
                this.form.controls['origin'].setValue(this.product.origin);
                this.form.controls['capacity'].setValue(this.product.capacity);
            }
        },
            err => {
                console.log(err);
                return false;
            });

        // Get all categories for select
        this.categoryService.getAllCategories().subscribe(data => {
            this.categories = data.answer;
        },
            err => {
                console.log(err);
                return false;
            });

        // Get all countries for select
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
            let file: File = fileList[0];
            this.formData.append('pic', file, file.name);
        }
    }

    onUpdateSubmit() {
        //console.log("Form status: " + this.form.status);
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
        this.formData.append("_id", this.product._id);
        this.formData = this.validateService.buildFormData(this.form, this.formData);

        // Update product
        this.productService.updateProduct(this.formData).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('Product has been updated', { cssClass: 'alert-success', timeout: 3000 });
                this.router.navigate(['/admin-tools/product']);
            }
            else {
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                window.scrollTo(0, 0);
                this.router.navigate(['/admin-tools/product/info',this.product._id]);
            }
        });
    }

    onClickRemoveConfirm() {
        this.router.navigate(['/admin-tools/product/remove-confirm', this.product._id]);
    }
}
