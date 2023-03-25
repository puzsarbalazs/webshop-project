import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService, PrimeNGConfig} from "primeng/api";
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/product.model";
import {Observable, Subscription, tap} from "rxjs";
import {ProductService} from "../../services/product.service";
import {Store} from "@ngrx/store";
import { AppState } from '../../store/app.reducers';
import { selectProducts } from '../../store/app.selectors';
import {Repository} from "../../store/repository.js";
import {
  addProductActon,
  categoryFilterAction, changeProductOrderAction,
  deleteProductAction, getAllProductsAction
} from "../../store/app.action";

const ROWS_HEIGHT: {[id: number]: number} = {
  1: 400, 3:400, 4:400
  //1: 400, 3:355, 4:450
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols]
  category = '';
  products: Product[] = [];
  sort = "asc";
  sortBy = "id"
  count = "12";
  productSubscription: Subscription | undefined;
  start: number = 0;
  end: number = 12;
  productList: Observable<Product[]> = this.store.select(selectProducts)
  qwe : Product[] | undefined


  constructor(private messageService: MessageService, private primeNgConfig: PrimeNGConfig,
              private cartService: CartService,
              private productService: ProductService,
              private store: Store<AppState>,
              private repository: Repository
              ) { }

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
    this.getProducts();
    console.log()
  }

  ngOnDestroy() {
    if(this.productSubscription){
      this.productSubscription.unsubscribe();
    }
  }

  onColumnsCountChange(colsNumber: number): void {
    this.cols = colsNumber;
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowCategoryChange(newCategory: string) : void {
    //this.category = newCategory;
    //this.store.dispatch(categoryFilterAction({category: newCategory}))
  }

  onAddToCart(product: Product): void {
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


  getProducts() {
    //this.productSubscription = this.productService.getAllProducts(this.count, this.sort, this.category).
      //subscribe( _products => this.products = _products)
    this.productList.subscribe(_product => this.products = _product)

    //this.productSubscription = this.repository.get().
    //subscribe( _products => this.products = _products)
  }

  onItemsCountChange(newCount: number): void {
    this.count = newCount.toString();
    this.getProducts()
  }

  onSortChange(newSort: string): void {
    this.sort = newSort
    this.store.dispatch(changeProductOrderAction({order: {sort: this.sort, sortBy: this.sortBy}}))
  }

  onSortByChange(newSortBy: string): void {
    this.sortBy = newSortBy;
    this.store.dispatch(changeProductOrderAction({order: {sort: this.sort, sortBy: this.sortBy}}))
  }

  change(event: any) {
    this.start=event.first
    console.log(this.start)
    this.end=this.start+event.rows
  }

}
