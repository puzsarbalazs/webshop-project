import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../models/product.model";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();
  @Output() showCategory = new EventEmitter<string>();


  @Input() product: Product |undefined;


  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product)
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category)
  }
}
