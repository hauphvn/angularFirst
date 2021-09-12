import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('Activated route data in component:::',
      this.activatedRoute.data);
    this.activatedRoute.data.subscribe((respData: any) => {
      console.log('PRODUCT FETCHING', respData);
      this.products = respData.products;
      console.log('PRODUCT FETCHED');
    });
  }

}
