import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Cart, CartItem} from "../models/cart.model"
import {MessageService, PrimeNGConfig} from "primeng/api";
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
    cart = new BehaviorSubject<Cart>({items : []});
    asd = "http://localhost:8080/api/products/recommended"

  constructor(private messageService: MessageService, private primeNgConfig: PrimeNGConfig,
              private httpClient: HttpClient) { }

  addToCart(item: CartItem): void {
    this.messageService.clear()
    const items = [...this.cart.value.items]
    const itemInCart = items.find(( currentItem => currentItem.id === item.id))
    if(itemInCart) {
      if (item.inStock < itemInCart?.quantity + 1) {
        this.messageService.add({severity: "warn", summary: "Out of stock", detail: "The item is out of stock"})
      } else {
        itemInCart.quantity += 1;
        this.messageService.add({
          severity: "info",
          summary: "Item added to cart",
          detail: "Item quantity has been increased"
        })
      }
    } else {
      items.push(item)
      this.messageService.add({severity: "info", summary: "Item added to cart", detail: "New item has been added to cart"})
      }
    this.cart.next({items})
    console.log(this.messageService)
  }

  getTotal(cart: Cart): number {
    return cart.items.
    map(item => item.price * item.quantity).
    reduce((prev,current) => prev +current, 0);
  }

  proceedCheckout(cart: Cart) {
      this.messageService.add({key:"s",severity: 'info', summary: 'Purchase successful',
        detail: "Total products: " + this.cart.value.items.length + " \nTotal quantity :" +
            this.cart.value.items.map(item => item.quantity).reduce((a,b) => a+b) +
             "\n" + "Total price: $" + this.getTotal(cart)})
  }

  getRecommendedProducts(idList: any) {
    return this.httpClient.post<Product[]>(this.asd, idList)
  }

  clearCart(confirm = true): void {
    this.messageService.clear()
    if (this.cart.value.items.length === 0) {
      this.messageService.add({severity: "warn", summary: "Empty cart", detail: "Your cart is already empty"})
    } else {
      //this.cart.next({items: []})
      //this.messageService.add({severity:"warn", summary: "Cart is cleared", detail: "The cart is now empty"})
      if (confirm) {
        this.messageService.add({
          key: "c",
          severity: "error",
          summary: "Confirm clearing cart",
          detail: "Are you sure you want to clear your cart?",
          sticky: true
        })
      } else {
        this.cart.next({items: []})
      }

    }
  }

  confirmClearCart(): void{
    this.messageService.clear()
    this.messageService.add({severity:"warn", summary: "Cart is cleared", detail: "The cart is now empty"})
    this.cart.next({items: []})
  }

  cancelClearCart(): void{
    this.messageService.clear()
  }

  removeFromCart(item: CartItem, update = true): Array<CartItem> {
    this.messageService.clear()
      const filteredItems = this.cart.value.items.
        filter((_item) => item.id !== _item.id)

    if (update){
      this.cart.next({items: filteredItems});
      this.messageService.add({severity:"warn", summary: "Item removed", detail: "One item is removed from the cart"})
    }
    return filteredItems
  }

  removeQuantity(item: CartItem): void {
    this.messageService.clear()
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
