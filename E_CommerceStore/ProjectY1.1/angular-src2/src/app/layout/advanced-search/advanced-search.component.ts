import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Product, Category} from '../../shared';
import { ProductService, CategoryService } from '../../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss'],
  animations: [routerTransition()]
})
export class AdvancedSearchComponent implements OnInit {
    products: Product[] = [];
    currentPageProducts: Product[] = [];
    filteredProducts: Product[] = [];

    sortSelect: string;
    closeResult: string;
    priceSelect: number;
    currentPage: number;
    totalPages: number;

    productsData = {
        capacities: { values: [],flags: [], filterApplied:0},
        categories: { values: [], flags: [], filterApplied: 0},
        origins: { values: [], flags: [], filterApplied: 0},
        volumes: { values: [], flags: [], filterApplied: 0}
    };
    constructor(private modalService: NgbModal,
        private productService: ProductService,
        private categoryService: CategoryService) { }

    ngOnInit() {
        
        this.productService.getAllProducts().subscribe(data => {
            if (data.success) {
                this.filteredProducts = this.products = data.answer;
                this.productService.getDataFromProducts(this.products, (result) => {
                    this.productsData = result;

                    this.currentPage = 1;
                    this.totalPages = Math.ceil(this.products.length / 4);

                    this.currentPageProducts = this.filteredProducts.slice(0, 4)
                });
            }
            else
                console.log(data.msg);
        });
    }
    
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        this.applyFilter();
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    // adds of remove filter
    checkField(item, type) {
        item.value = !item.value;
        if (type == "category")
        {
            if (this.productsData.categories.flags[item.key])
            {
                this.productsData.categories.flags[item.key] = false;
                this.productsData.categories.filterApplied++;
            }
            else {
                this.productsData.categories.flags[item.key] = true;
                this.productsData.categories.filterApplied--;
            }
        }
        if (type == "volume") {
            if (this.productsData.volumes.flags[item.key]) {
                this.productsData.volumes.flags[item.key] = false;
                this.productsData.volumes.filterApplied++;
            }
            else {
                this.productsData.volumes.flags[item.key] = true;
                this.productsData.volumes.filterApplied--;
            }
        }
        if (type == "origin") {
            if (this.productsData.origins.flags[item.key]) {
                this.productsData.origins.flags[item.key] = false;
                this.productsData.origins.filterApplied++;
            }
            else {
                this.productsData.origins.flags[item.key] = true;
                this.productsData.origins.filterApplied--;
            }
        }
        if (type == "capacity") {
            if (this.productsData.capacities.flags[item.key]) {
                this.productsData.capacities.flags[item.key] = false;
                this.productsData.capacities.filterApplied++;
            }
            else {
                this.productsData.capacities.flags[item.key] = true;
                this.productsData.capacities.filterApplied--;
            }
        }
    }

    // load 4 new products to new page
    nextPage() {
        this.currentPageProducts = this.filteredProducts.slice(this.currentPage * 4, this.currentPage * 4 + 4);
        this.currentPage++;
    }

    // load 4 previous products to new page
    previousPage() {
        this.currentPage--;
        this.currentPageProducts = this.filteredProducts.slice((this.currentPage - 1) * 4, (this.currentPage - 1) * 4 + 4);
    }

    // rearrange the pages after filter apllied
    rearrangePages() {
        this.currentPage = 1;
        this.totalPages = Math.ceil(this.filteredProducts.length / 4);
        this.currentPageProducts = this.filteredProducts.slice(0, 4);
    }

    // applies the filter on product array and put it to filteredProducts array
    applyFilter() {
        this.filteredProducts = [];
        for (var i = 0; i < this.products.length;i++)
        {
            var flag = true;
            if (flag && this.productsData.categories.filterApplied>0 && this.productsData.categories.flags[this.products[i].category])
                flag = false;
            if (flag && this.productsData.volumes.filterApplied > 0 && this.productsData.volumes.flags[this.products[i].volume])
                flag = false;
            if (flag && this.productsData.capacities.filterApplied > 0 && this.productsData.capacities.flags[this.products[i].capacity])
                flag = false;
            if (flag && this.productsData.origins.filterApplied > 0 && this.productsData.origins.flags[this.products[i].origin])
                flag = false;

            if(flag)
                this.filteredProducts.push(this.products[i]);
        }
        
        this.priceFilter();
    }

    // applies the price filter on filteredProducts array
    priceFilter() {
        var tmpArray = [];
        if (this.priceSelect == undefined) {
            this.sort();
            return;
        }
        for (var i = 0; i < this.filteredProducts.length; i++)
        {
            var price = parseInt(this.filteredProducts[i].price);
            if (price >= this.priceSelect && price <= (this.priceSelect + 100))
                tmpArray.push(this.filteredProducts[i]);
        }

        this.filteredProducts = tmpArray;
        this.sort();
    }

    clearFilter() {
        for (var i = 0; i < this.productsData.capacities.values.length; i++){
            if (this.productsData.capacities.values[i].value){
                this.productsData.capacities.values[i].value = false;
                this.productsData.capacities.flags[this.productsData.capacities.values[i].key] = true;
            }
        }
        this.productsData.capacities.filterApplied = 0;
        for (var i = 0; i < this.productsData.categories.values.length; i++) {
            if (this.productsData.categories.values[i].value) {
                this.productsData.categories.values[i].value = false;
                this.productsData.categories.flags[this.productsData.categories.values[i].key] = true;
            }
        }
        this.productsData.categories.filterApplied = 0;
        for (var i = 0; i < this.productsData.origins.values.length; i++) {
            if (this.productsData.origins.values[i].value) {
                this.productsData.origins.values[i].value = false;
                this.productsData.origins.flags[this.productsData.origins.values[i].key] = true;
            }
        }
        this.productsData.origins.filterApplied = 0;
        for (var i = 0; i < this.productsData.volumes.values.length; i++) {
            if (this.productsData.volumes.values[i].value) {
                this.productsData.volumes.values[i].value = false;
                this.productsData.volumes.flags[this.productsData.volumes.values[i].key] = true;
            }
        }
        this.productsData.volumes.filterApplied = 0;
        this.applyFilter();
    }

    // sort the array from lowest/highest
    sort() {
        var direction;

        if (this.sortSelect == undefined)
            direction = -1;
        else
            direction = this.sortSelect;

        this.filteredProducts.sort(function (a, b) {
            if (parseInt(a["price"]) < parseInt(b["price"])) {
                return 1 * direction;
            }
            else if (parseInt(a["price"]) > parseInt(b["price"])) {
                return -1 * direction;
            }
            else {
                return 0;
            }
        });

        this.rearrangePages();
    }
}
