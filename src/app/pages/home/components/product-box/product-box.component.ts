import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../models/product.model";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../store/app.reducers";
import {deleteProductAction} from "../../../../store/app.action";

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


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product)
  }

  deleteItem(): void {
      // @ts-ignore
    this.store.dispatch(deleteProductAction({id: this.product.id }))
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category)
  }
}
