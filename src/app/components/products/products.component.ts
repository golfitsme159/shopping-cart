import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartapiService } from 'src/app/service/cartapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: any = {};

  constructor(private api: ApiService, private cartApi: CartapiService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.productList = res.results;
      // console.log(this.productList);

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }

  addtoCart(item: any) {
    this.cartApi.addToCart(item);
  }
}
