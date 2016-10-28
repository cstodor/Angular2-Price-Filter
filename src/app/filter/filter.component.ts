import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'zt-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  // Initializing Properties
  priceMinFilter: number;
  priceMaxFilter: number;
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

  // From Actions
  onSubmit() {
    this.filterPrice.emit({
      priceMin: this.priceMinFilter,
      priceMax: this.priceMaxFilter
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
    { "productPrice": 200000 }
  ]

}
