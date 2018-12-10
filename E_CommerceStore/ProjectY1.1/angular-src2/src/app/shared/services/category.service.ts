import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

    constructor(private http: Http) { }

    addCategory(data) {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post('Http://localhost:3000/categories/add', data, options)
            .map(res => res.json());
    }
    updateCategory(data) {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post('Http://localhost:3000/categories/update', data, options)
            .map(res => res.json());
    }
    getAllCategories() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('Http://localhost:3000/categories/getAll', { headers: headers })
            .map(res => res.json());
    }
    getCategoryById(id) {
        var data = {
            id: id
        }
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/categories/getById', data, { headers: headers })
            .map(res => res.json());
    }
    removeCategory(category) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/categories/remove', category, { headers: headers })
            .map(res => res.json());
    }
}
