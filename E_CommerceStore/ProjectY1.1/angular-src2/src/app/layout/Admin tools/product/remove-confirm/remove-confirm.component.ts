import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ProductService } from '../../../../shared';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../shared';

@Component({
  selector: 'app-remove-confirm',
  templateUrl: './remove-confirm.component.html',
  styleUrls: ['./remove-confirm.component.scss'],
  animations: [routerTransition()]
})
export class RemoveConfirmComponent implements OnInit {
    product: Product = new Product();
    id: number;

    constructor(
        private flashMessage: FlashMessagesService,
        private router: Router,
        private productService: ProductService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });

        // Get product object from serve
        this.productService.getProductById(this.id).subscribe(data => {
            this.product = data.answer;

            if (this.product == null) {
                this.router.navigate(['/admin-tools/product']);
            }
        },
            err => {
                console.log(err);
                return false;
            });
    }

    // Remove product
    onClickRemoveConfirm() {
        this.productService.removeProduct(this.product).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('Product has been removed', { cssClass: 'alert-success', timeout: 3000 });
                this.router.navigate(['/admin-tools/product']);
            }
            else {
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                window.scrollTo(0, 0);
                this.router.navigate(['/admin-tools/product/remove-confirm',this.id]);
            }
        });
    }
     
}
