import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(value, args?) {
    // ES6 array destructuring
    let [minPrice, maxPrice] = args;
    
    if (minPrice) {
      return value.filter(_priceMin => {
        return _priceMin.value >= +minPrice;
      });
    } 
    
    if (maxPrice) {
      return value.filter(_priceMax => {
        return _priceMax.value <= +maxPrice;
      });
    }
  }

}
