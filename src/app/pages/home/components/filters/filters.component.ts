import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {StoreService} from "../../../../services/store.service";
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

  constructor(private storeService: StoreService, private primeNgConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.storeService.getAllCategories()
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
