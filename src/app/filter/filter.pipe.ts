import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(list, minPrice: number | undefined, maxPrice:number | undefined) {
    // ES6 array destructuring
    let filter_list = list;
    if (minPrice) {
      filter_list = filter_list.filter(_item => {
        return _item.price >= +minPrice;
      });
    } 
    
    if (maxPrice) {
      filter_list = filter_list.filter(_item => {
        return _item.price <= +maxPrice;
      });
    }
    return  filter_list;
  }

}
