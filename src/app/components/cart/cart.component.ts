import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartapiService } from 'src/app/service/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: any = [];
  allProducts: any = 0;
  @ViewChild('callqrDialog')
  callqrDialog!: TemplateRef<any>;

  constructor(private cartApi: CartapiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe((res) => {
      this.products = res;
      this.allProducts = this.cartApi.getTotalAmount();
    });
  }

  removeProduct(item: any) {
    this.cartApi.removeCartData(item);
  }

  removeAllProduct() {
    this.cartApi.removeAllCart();
  }

  payProduct() {
    this.dialog.open(this.callqrDialog);
  }
}
