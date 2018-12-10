import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Product } from '../../shared';
import { ProductService } from '../../shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss'],
  animations: [routerTransition()]
})
export class ShowProductsComponent implements OnInit {
    products: Product[] = [];
    searchWord:string="";

    constructor(private route: ActivatedRoute,
                private productService:ProductService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.searchWord = params['searchWord'];
            //console.log(this.searchWord);
            this.productService.getProductsByKeyWord(this.searchWord).subscribe(data => {
                if (data.success) {
                    this.products = data.answer;
                    //console.log(data);
                }
            });
        });
    }
}
