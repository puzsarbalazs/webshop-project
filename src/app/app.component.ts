import {Component, OnInit} from '@angular/core';
import {Cart} from "./models/cart.model";
import {CartService} from "./services/cart.service";
import {Product} from "./models/product.model";
import {ProductService} from "./services/product.service";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {getAllProductsAction} from "./store/app.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webshop-projekt';
  cart: Cart = {items: []};

  constructor(private cartService: CartService, private appStore: Store){

  }

  ngOnInit() {
    this.appStore.dispatch(getAllProductsAction())
    this.cartService.cart.subscribe(_cart => this.cart = _cart)
  }

}
