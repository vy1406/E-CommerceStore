import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(array: any, searchField: any): any {
        if (searchField === undefined)
            return array;
        else{
            return array.filter(function (item) {
                if (item.productName != undefined)
                    return item.productName.toLowerCase().includes(searchField.toLowerCase());
                else
                    return item.categoryName.toLowerCase().includes(searchField.toLowerCase());
            });
        }
    }

}
