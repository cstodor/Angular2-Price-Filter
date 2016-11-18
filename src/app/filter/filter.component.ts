import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'zt-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  // add readonly property to filter maxPrice must greater than minPrice
  public get maxPriceOptions(): any[] { 
    return this.priceMinFilter ?  this._priceOptions.filter(p => p.productPrice > this.priceMinFilter) : this._priceOptions;
  }

  // Initializing Properties
  priceMinFilter: number = 0;
  priceMaxFilter: number = 0;
  priceFilterForm: FormGroup;



  // Outputs
  @Output() filterPrice: EventEmitter<IProductPriceLimit> = new EventEmitter<IProductPriceLimit>();

  // Constructor
  constructor() {
    this.priceFilterForm = new FormGroup({
      priceMin: new FormControl(""),
      priceMax: new FormControl("")
    });
  }
 

  onPriceMaxChange() {
   //console.log(arguments); 
  }
  // From Actions
  onSubmit() {
    this.filterPrice.emit({
      priceMin: this.priceMinFilter || null,
      priceMax: this.priceMaxFilter || null
    });
  }

  // Data
  _priceOptions = [
    { "productPrice": 500 },
    { "productPrice": 1000 },
    { "productPrice": 2000 },
    { "productPrice": 3000 },
    { "productPrice": 4000 },
    { "productPrice": 5000 },
    { "productPrice": 10000 },
    { "productPrice": 20000 },
    { "productPrice": 30000 },
    { "productPrice": 40000 },
    { "productPrice": 50000 },
    { "productPrice": 60000 },
    { "productPrice": 70000 },
    { "productPrice": 80000 },
    { "productPrice": 90000 },
    { "productPrice": 100000 },
    { "productPrice": 150000 },
    { "productPrice": 200000 },
    { "productPrice": 300000 },
    { "productPrice": 400000 },
    { "productPrice": 500000 },
    { "productPrice": 1000000 },
  ]
}

interface IPriceOptions {
  productPrice: string;
}