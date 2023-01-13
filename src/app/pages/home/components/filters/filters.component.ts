import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ProductService} from "../../../../services/product.service";
import {Subscription} from "rxjs";
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();

  categoriesSubscription: Subscription | undefined;
  categories: string[] | undefined

  constructor(private productService: ProductService, private primeNgConfig: PrimeNGConfig) { }

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
  }

}
