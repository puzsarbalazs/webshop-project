import { Component, OnInit } from '@angular/core';
import {Cart, CartItem} from "../../models/cart.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : Cart = { items: [
      {
        product: "https://via.placeholder.com/150",
        name: "snickers",
        price: 150,
        quantity: 1,
        id:1
      },
      {
        product: "https://via.placeholder.com/150",
        name: "mars",
        price: 100,
        quantity: 4,
        id:2
      },
      {
        product: "https://via.placeholder.com/150",
        name: "tequila",
        price: 150,
        quantity: 2,
        id:3
      }
    ]};
  dataSource: CartItem[] = [];
  displayedColumns: string[] = ["product", "name", "price", "quantity", "total"];



  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) =>{
      this.cart = _cart;
      this.dataSource = this.cart.items;
    } )
  }

  getTotal(cart: Cart): number {
    return this.cartService.getTotal(cart)
  }

  getTotalQuantity(items: CartItem[]): number{
    return items.map(item => item.quantity).reduce((prev, current) => prev + current, 0);
  }

  onClearCart() :void {
    this.cartService.clearCart()
  }

  onConfirmClearCart(): void{
    this.cartService.confirmClearCart()
  }

  onCancelClearCart(): void{
    this.cartService.cancelClearCart()
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(product: CartItem): void {
    this.cartService.addToCart(product)
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item)
  }
}
