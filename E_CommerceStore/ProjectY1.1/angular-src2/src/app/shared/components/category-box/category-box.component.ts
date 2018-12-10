import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../models';

@Component({
  selector: 'app-category-box',
  templateUrl: './category-box.component.html',
  styleUrls: ['./category-box.component.scss']
})
export class CategoryBoxComponent implements OnInit {
    @Input() category: Category;

    constructor() { }

    ngOnInit() {
        //console.log(this.category);
    }

}
