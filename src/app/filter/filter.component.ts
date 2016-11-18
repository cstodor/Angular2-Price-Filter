import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'zt-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  public get maxPriceOptions(): any[] { 
    return this.priceMinFilter ?  this._priceOptions.filter(p => p > this.priceMinFilter) : this._priceOptions;
  }

  // Initializing Properties
  priceMinFilter: number;
  priceMaxFilter: number;
  priceIndex: number;
  priceFilterForm: FormGroup;



  // Outputs
  @Output() filterPrice: EventEmitter<{
    priceMin: number,
    priceMax: number
  }> = new EventEmitter<{
    priceMin: number,
    priceMax: number
  }>();

  // Constructor
  constructor() {
    this.priceFilterForm = new FormGroup({
      priceMin: new FormControl('any'),
      priceMax: new FormControl('any')
    });

    this.priceFilterForm.controls['priceMin'].valueChanges.subscribe(
      (data: any) => console.log(data)
    )
    this.priceFilterForm.controls['priceMax'].valueChanges.subscribe(
      (data: any) => console.log(data)
    )
  }
  onPriceMinChange() {
    if (this.priceMinFilter) {
      let priceArraySelected: any[] = this._priceOptions.filter(item => item.productPrice < this.priceMinFilter);
      let priceArrayIndex: number = Object.keys(priceArraySelected).length;
      this.priceIndex = priceArrayIndex + 1;
    }
  }

  onPriceMaxChange() {
   //console.log(arguments); 
  }
  // From Actions
  onSubmit() {
    this.filterPrice.emit({
      priceMin: this.priceMinFilter,
      priceMax: this.priceMaxFilter
    });
  }

  // Data
  _priceOptions = [
    { "productPrice": null },
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