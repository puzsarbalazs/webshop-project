import {Component, Input, OnInit} from '@angular/core';
import {Cart, CartItem} from "../../models/cart.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _cart: Cart = {items : []};
  itemsQuantity = 0

  @Input()
  get cart(): Cart {
    return this._cart
  }

  set cart(cart: Cart){
    this._cart = cart

    this.itemsQuantity = cart.items
      .map(item => item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
    console.log(this.itemsQuantity)
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getTotal(cart: Cart): number {
    return this.cartService.getTotal(cart)
  }

  onClearCart() {
    this.cartService.clearCart()
  }
}
