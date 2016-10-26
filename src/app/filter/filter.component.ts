import { Component, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'zt-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  
  ////// Initializing Properties
  priceMinFilter: number;
  priceMaxFilter: number;
  priceFilterForm: FormGroup;
  
  ////// Outputs
  @Output() filterPrice: EventEmitter<{
    priceMin: number,
    priceMax: number
  }> = new EventEmitter<{
    priceMin: number,
    priceMax: number
  }>();
  
  ////// Constructor
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
  
  ////// From Actions
  onPriceMinChange() {

  }
  onPriceMaxChange() {
    
  }
  onSubmit() {
    // let searchPriceMin = this.priceMinFilter.toString();
    // let searchPriceMax = this.priceMaxFilter.toString();

    this.filterPrice.emit({
      priceMin: this.priceMinFilter,
      priceMax: this.priceMaxFilter
    });
  }
  
  ////// Data
  _priceOptions = [
    { "value": 500 }, 
    { "value": 1000 }, 
    { "value": 2000 }, 
    { "value": 3000 }, 
    { "value": 4000 }, 
    { "value": 5000 }, 
    { "value": 10000 }, 
    { "value": 20000 }, 
    { "value": 30000 }, 
    { "value": 40000 }, 
    { "value": 50000 }, 
    { "value": 60000 }, 
    { "value": 70000 },
    { "value": 80000 }, 
    { "value": 90000 }, 
    { "value": 100000 }, 
    { "value": 150000 }, 
    { "value": 200000 }
  ]

}
