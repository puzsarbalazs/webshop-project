import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Cart} from "../../models/cart.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-successfull-purchase',
  templateUrl: './successful-purchase.component.html',
  styleUrls: ['./successful-purchase.component.css']
})
export class SuccessfulPurchaseComponent implements OnInit {

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
  }

  closePurchase(){
    this.cartService.clearCart(false)
    this.router.navigateByUrl("home")
  }

  cleartCart() {

  }

}
