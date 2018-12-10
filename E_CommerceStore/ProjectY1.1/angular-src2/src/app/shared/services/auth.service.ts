import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { SharedService } from './shared.service';
import { Cart, CartItem } from '../models';

@Injectable()
export class AuthService {
    authToken: any;
    public user: any;

    constructor(private http: Http,
                private sharedService: SharedService) { }

    // Register new user
    registerUser(user) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/users/register', user, { headers: headers })
            .map(res => res.json());
    }

    // Authenticate user login
    authenticateUser(user) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(res => res.json());
    }

    // Get profile
    getProfile() {
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('Http://localhost:3000/users/profile', { headers: headers })
            .map(res => res.json());
    }

    // Get wishlist
    getWishlist() {
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('Http://localhost:3000/users/getWishlist', { headers: headers })
            .map(res => res.json());
    }

    // Add to wishlist(post)
    addToWishList(productArg) {
        var data = {
            product: productArg
        }
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/users/addToWishlist', data,{ headers: headers })
            .map(res => res.json());
    }

    // Remove product from user wishlist
    removeFromWishlist(productArg) {
        var data = {
            product: productArg
        }
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/users/removeFromWishlist', data, { headers: headers })
            .map(res => res.json());
    }
	
	// Add purchase history for user
	addPurchasedItemToDB(cart: Cart) {
	    let headers = new Headers();
	    this.loadToken();
	    headers.append('Content-Type', 'application/json');
	    headers.append('Authorization', this.authToken);

        cart.cartItems = this.castToHistoryItem(cart.cartItems);
	    return this.http.post('Http://localhost:3000/users/addPurchasedItem', cart, { headers: headers })
		    .map(res => res.json());

	}	

    // Get history purchases from db
    getHistory() {
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('Http://localhost:3000/users/getHistory', { headers: headers })
            .map(res => res.json());
    }

    // Get history item from db
    getHistoryItem(id) {
        var data = {
            id: id
        }
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/users/getHistoryItem', data,{ headers: headers })
            .map(res => res.json());
    }

	// cast from cartitems to suitable object for server
	castToHistoryItem(cartItems: CartItem[]) {
        var newArr = [];
        for (var i = 0; i < cartItems.length; i++) {
            newArr.push({
                product: cartItems[i].product._id,
                quantity: cartItems[i].quantity
            });
        }
        return newArr;
    }
    // Store user data and token in local storage
    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));

        this.authToken = token;
        this.user = user;
    }

    // Get token form local storage
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }

    // Returns if we are logged in and token not expired
    loggedIn() {
        var flag = tokenNotExpired('id_token');
        if (!flag)
        {
            this.sharedService.emitChange('token expired');
            this.logOut();
            return false;
        }
        return true;
    }

    isAdmin() {
        const user = JSON.parse(localStorage.getItem('user'));

        //console.log(user);

        if(user != undefined && user.role == 'admin')
        {
            //console.log('admin');
            return true;
        }

        else {
            //console.log(this.user.role);
            return false;
        }
          
    }

    // Log out
    logOut() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }

    getUserName() {
        const user = localStorage.getItem('user');
        let jsonUser = JSON.parse(user);

        if (jsonUser == undefined)
            return "Profile";
        return jsonUser.name;
    }

    
}
