import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Cart, CartItem} from "../models/cart.model"
import {MessageService, PrimeNGConfig} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class CartService {
    cart = new BehaviorSubject<Cart>({items : []});

  constructor(private messageService: MessageService, private primeNgConfig: PrimeNGConfig) { }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items]

    const itemInCart = items.find(( currentItem => currentItem.id === item.id))
    if(itemInCart){
      itemInCart.quantity+=1;
      this.messageService.add({severity: "info", summary: "Item added to cart", detail: "Item quantity has been increased"})
    } else {
      items.push(item)
      this.messageService.add({severity: "info", summary: "Item added to cart", detail: "New item has been added to cart"})
    }
    this.cart.next({items})
    console.log(this.cart.value)
  }

  getTotal(cart: Cart): number {
    return cart.items.
    map(item => item.price * item.quantity).
    reduce((prev,current) => prev +current, 0);
  }

  clearCart(): void {
    this.cart.next({items: []})
    this.messageService.add({severity:"warn", summary: "Cart is cleared", detail: "The cart is now empty"})
  }

  removeFromCart(item: CartItem, update = true): Array<CartItem> {
      const filteredItems = this.cart.value.items.
        filter((_item) => item.id !== _item.id)

    if (update){
      this.cart.next({items: filteredItems});
      this.messageService.add({severity:"warn", summary: "Item removed", detail: "One item is removed from the cart"})
    }
    return filteredItems
  }

  removeQuantity(item: CartItem): void {
    let itemForRemoval: CartItem | undefined;
    let filteredItems = this.cart.value.items.map((_item) => {
      if (item.id === _item.id){
        _item.quantity--;

        if (_item.quantity === 0){
          itemForRemoval = _item;
        }
      }
      return _item;
    })
    if (itemForRemoval){
      filteredItems = this.removeFromCart(itemForRemoval, false)
      this.messageService.add({severity:"warn", summary: "Item removed", detail: "One item has been removed from the cart"})
    } else {
      this.messageService.add({severity:"warn", summary: "Quantity decreased", detail: "Item quantity has been decreased by 1"})
    }
    this.cart.next({items: filteredItems})

  }

}
