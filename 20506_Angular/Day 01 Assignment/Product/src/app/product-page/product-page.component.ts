import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  products: { name: string, price: number }[] = [
    { name: 'Laptop', price: 39999 },
    { name: 'Car', price: 89999 },
    { name: 'Electric Bike', price: 59999 },
    { name: 'Bicycle', price: 29999 },
    { name: 'Computer', price: 25999 },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
