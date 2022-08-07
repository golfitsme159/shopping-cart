import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartapiService {
  cartDataList: any = [];
  productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  //get product data
  getProductData() {
    return this.productList.asObservable();
  }

  //set product data
  setProduct(product: any) {
    this.cartDataList.push(...product);
    this.productList.next(product);
  }

  //เพิ่มสินค้าลงตะกร้า
  addToCart(product: any) {
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    this.getTotalAmount();
    console.log(this.cartDataList);
  }

  // จำนวนรวม
  getTotalAmount() {
    let grandTotal = 0;
    this.cartDataList.map((a: any) => {
      grandTotal += a.popularity;
    });
    return grandTotal;
  }

  //ลบสินค้าในตะกร้า
  removeCartData(product: any) {
    this.cartDataList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartDataList.splice(index, 1);
      }
    });
    this.productList.next(this.cartDataList);
  }

  removeAllCart() {
    this.cartDataList = [];
    this.productList.next(this.cartDataList);
  }
}
