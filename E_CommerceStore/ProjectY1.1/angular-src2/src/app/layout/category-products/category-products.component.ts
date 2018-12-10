import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Product } from '../../shared';
import { ProductService } from '../../shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss'],
  animations: [routerTransition()]
})

export class CategoryProductsComponent implements OnInit {
    products: Product[] = [];
    categoryName: string;

    constructor(private productService: ProductService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.categoryName = params['categoryName'];
            console.log(this.categoryName);
        });

        // getting the products with 
        this.productService.getProductsByCategory(this.categoryName).subscribe(data => {
            if (data.success)
            {
                this.products = data.answer;
                console.log(data);
            }
        });
    }

}
