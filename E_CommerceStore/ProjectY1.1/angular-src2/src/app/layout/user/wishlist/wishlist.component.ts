import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Product } from '../../../shared';
import { AuthService, SharedService } from '../../../shared';
import { ActivatedRoute, Router } from '@angular/router';

export class myClass {
    product: Product;
    user: Object;
}

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  animations: [routerTransition()]
})
export class WishlistComponent implements OnInit {
    products: myClass[] = [];

    constructor(private authService: AuthService, private sharedService: SharedService) {
        sharedService.wishlistEmitted$.subscribe(
            text => {
                var tmpArray = [];
                for (var i = 0; i < this.products.length; i++)
                {
                    if (this.products[i].product._id != text)
                        tmpArray.push(this.products[i]);
                }
                this.products = tmpArray;
            });
    }

    ngOnInit() {
        this.authService.getWishlist().subscribe(data => {
            if (data.success) {
                this.products = data.answer;
            }
            else
                console.log(data.msg);
        });
    }

}
