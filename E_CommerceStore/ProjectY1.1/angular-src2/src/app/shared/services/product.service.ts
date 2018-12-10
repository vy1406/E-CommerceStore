import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

    constructor(private http: Http) { }

    addProduct(data) {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post('Http://localhost:3000/products/add', data, options)
            .map(res => res.json());
    }
    updateProduct(data) {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post('Http://localhost:3000/products/update', data, options)
            .map(res => res.json());
    }
    getProductById(id) {
        var data = {
            id: id
        }
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/products/getById', data, { headers: headers })
            .map(res => res.json());
    }
    getAllProducts() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('Http://localhost:3000/products/getAll', { headers: headers })
            .map(res => res.json());
    }
    removeProduct(product) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/products/remove', product, { headers: headers })
            .map(res => res.json());
    }
    getProductsByCategory(categoryName) {
        var data = {
            categoryName: categoryName
        }
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/products/getByCategory', data, { headers: headers })
            .map(res => res.json());
    }
    getProductsByKeyWord(keyWord) {
        var data = {
            keyWord: keyWord
        }
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/products/searchByKeyWord', data, { headers: headers })
            .map(res => res.json());
    }

    getDataFromProducts(products,callback)
    {
        var flags1 = [], categories = [];
        for (var i = 0; i < products.length; i++) {
            var tmp = {
                key: products[i].category,
                value: false
            }
            if (flags1[products[i].category]) continue;
            flags1[products[i].category] = true;
            categories.push(tmp);
        }
        var flags2 = [], volumes = [];
        for (var i = 0; i < products.length; i++) {
            var tmp = {
                key: products[i].volume,
                value: false
            }
            if (flags2[products[i].volume]) continue;
            flags2[products[i].volume] = true;
            volumes.push(tmp);
        }
        var flags3 = [], capacities = [];
        for (var i = 0; i < products.length; i++) {
            var tmp = {
                key: products[i].capacity,
                value: false
            }
            if (flags3[products[i].capacity]) continue;
            flags3[products[i].capacity] = true;
            capacities.push(tmp);
        }
        var flags4 = [], origins = [];
        for (var i = 0; i < products.length; i++) {
            var tmp = {
                key: products[i].origin,
                value: false
            }
            if (flags4[products[i].origin]) continue;
            flags4[products[i].origin] = true;
            origins.push(tmp);
        }
        
        var result = {
            categories: { values: categories, flags: flags1, filterApplied: 0 },
            volumes: { values: volumes, flags: flags2, filterApplied: 0 },
            capacities: { values: capacities, flags: flags3, filterApplied: 0 },
            origins: { values: origins, flags: flags4, filterApplied: 0 },
        }

        callback(result);
    }
}
