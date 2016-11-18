import { Component, Input } from '@angular/core';

@Component({
  selector: 'zt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @Input() priceMinFilter: number | null;
  @Input() priceMaxFilter: number | null;

  filterPrice(filter: IProductPriceLimit) {
    this.priceMinFilter = filter.priceMin;
    this.priceMaxFilter = filter.priceMax;
  }

  _productList = [
     {
      "name": "Product Zero",
      "price": 100,
    },
    {
      "name": "Product One",
      "price": 600,
    },
    {
      "name": "Product Two",
      "price": 1100,
    },
    {
      "name": "Product Three",
      "price": 2150,
    },
    {
      "name": "Product Four",
      "price": 3500,
    },
    {
      "name": "Product Five",
      "price": 4300,
    },
    {
      "name": "Product Six",
      "price": 5400,
    },
    {
      "name": "Product Seven",
      "price": 6900,
    },
    {
      "name": "Product Eighth",
      "price": 14000,
    },
    {
      "name": "Product Nine",
      "price": 26000,
    },
    {
      "name": "Product Ten",
      "price": 30000,
    },
    {
      "name": "Product Eleven",
      "price": 160000,
    },
    {
      "name": "Product Twelve",
      "price": 1000000,
    }
  ]
}

interface  IProduct {
  name:string;
  price:number;
}