import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ProductService } from '../../../shared';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [routerTransition()]
})
export class ProductComponent implements OnInit {
    products: Object[] = [];
    column: string;
    isDesc: boolean = false;
    direction: number;

    constructor(
        private flashMessage: FlashMessagesService,
        private router: Router,
        private productService: ProductService) { }

    ngOnInit() {
        this.productService.getAllProducts().subscribe(data => {
            this.products = data.answer;
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
