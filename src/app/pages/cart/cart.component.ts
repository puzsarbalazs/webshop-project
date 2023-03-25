import { Component, OnInit } from '@angular/core';
import {Cart, CartItem} from "../../models/cart.model";
import {CartService} from "../../services/cart.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";
import {recommendProductsAction} from "../../store/app.action";
import {Product} from "../../models/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : Cart = { items: []};
  dataSource: CartItem[] = [];
  displayedColumns: string[] = ["product", "name", "price", "quantity", "total"];
  asd: CartItem[] = []
  recommendedProducts: Observable<Product[]> | undefined;


  constructor(private cartService: CartService,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) =>{
      this.cart = _cart;
      this.dataSource = this.cart.items;
    } )
    console.log(this.cart.items.map(a => a.properties.toString()).toString().split(","))
    this.getRecommendations(this.dataSource)
  }

  getRecommendations1(item: CartItem[]) {
      if (item.length >=3) {
        const allProperties = item.map(p => p.properties).toString().split(",")
        let propertyCounter: {} = {}
        let productIds: number[] = item.map(p => p.id)
        console.log(productIds)
        allProperties.forEach((p) => {
          if (!Object.keys(propertyCounter).includes(p)) {
            // @ts-ignore
            propertyCounter[p]=1
          } else {
            // @ts-ignore
            propertyCounter[p]++;
          }
        })
        console.log(allProperties)
      }
}
  proceedToCheckOut(cart: Cart) {
    this.cartService.proceedCheckout(cart)
  }

  getRecommendations(items: CartItem[]){
    let productIds: number[] = items.map(p => p.id)
    this.recommendedProducts = this.cartService.getRecommendedProducts(productIds);
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

  addToCart(product: Product){
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
      properties: product.properties,
      inStock: product.inStock
    })
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item)
  }
}
