import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ProductService} from "../../../../services/product.service";
import {Subscription} from "rxjs";
import {MessageService, PrimeNGConfig} from "primeng/api";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../store/app.reducers";
import {
  filterByPriceAction,
  filterProductsAction,
  getAllProductsAction,
  searchProductsAction
} from "../../../../store/app.action";
import {selectProducts} from "../../../../store/app.selectors";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();

  categoriesSubscription: Subscription | undefined;
  categories: string[] | undefined
  currentCategory: string ="";
  priceRange : number[] = [0,  250];
  searchProduct: string = "";

  constructor(private productService: ProductService, private primeNgConfig: PrimeNGConfig,
              private store: Store<AppState>,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.productService.getAllCategories()
        .subscribe(response => this.categories = response)
    this.primeNgConfig.ripple = true;
  }

  ngOnDestroy() {
    if (this.categoriesSubscription){
      this.categoriesSubscription.unsubscribe()
    }
  }

  onShowCategory(category: string): void {
      this.showCategory.emit(category)
    if (category === ""){
      this.currentCategory = "";
    } else {
      this.currentCategory = category;
    }
    this.store.dispatch(filterProductsAction({filters: {minPrice: this.priceRange[0], maxPrice: this.priceRange[1],
        search: this.searchProduct, category: this.currentCategory}}))
  }

  searchProducts(search: string){
    console.log(search)
    this.searchProduct = search
    this.store.dispatch(filterProductsAction({filters: {minPrice: this.priceRange[0], maxPrice: this.priceRange[1],
          search: this.searchProduct, category: this.currentCategory}}))
    //this.store.dispatch(searchProductsAction({s: search}))

  }

  resetSearchProducts(){
    this.searchProduct = "";
    this.store.dispatch(filterProductsAction({filters: {minPrice: this.priceRange[0], maxPrice: this.priceRange[1],
        search: this.searchProduct, category: this.currentCategory}}));
  }

  filterByPrice(min: number, max: number){
    //this.store.dispatch(filterByPriceAction({price: {min: min, max: max}}))

    this.store.dispatch(filterProductsAction({filters: {minPrice: this.priceRange[0], maxPrice: this.priceRange[1],
        search: this.searchProduct, category: this.currentCategory}}))
  }

}
