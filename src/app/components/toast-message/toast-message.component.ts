import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.css']
})
export class ToastMessageComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onConfirmClearCart(): void{
    this.cartService.confirmClearCart()
  }

  onCancelClearCart(): void{
    this.cartService.cancelClearCart()
  }

}
