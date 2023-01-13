import {Component, Input, OnInit} from '@angular/core';
import {Cart, CartItem} from "../../models/cart.model";
import {CartService} from "../../services/cart.service";
import {Singleton} from "../../models/singleton"
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _cart: Cart = {items : []};
  itemsQuantity = 0
  s1 = Singleton.getInstance()
  s2 = Singleton.getInstance()
  sunIcon = faSun;
  moonIcon = faMoon;
  darkmode: boolean = false;

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

  constructor(private cartService: CartService ) { }

  ngOnInit(): void {
    console.log(this.s1===this.s2)
    console.log(this.s1.asd)
    this.s1.someBusinessLogic()
    console.log(this.s2.asd)
  }

  getTotal(cart: Cart): number {
    return this.cartService.getTotal(cart)
  }

  onClearCart() {
    this.cartService.clearCart()
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item)
    console.log(this.darkmode)
  }

  onAddQuantity(product: CartItem): void {
    this.cartService.addToCart(product)
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  toggle() {
    document.body.classList.toggle('dark-theme')
  }
}
