import {Product} from "../models/product.model";
import {Observable, of} from "rxjs";
import {ProductService} from "../services/product.service";
import {Injectable} from "@angular/core";

const STORE_BASE_URL = "https://fakestoreapi.com";

@Injectable()
export class Repository {
  constructor(private productService: ProductService) {
  }

  cachedProducts: Product[] = [];


  get(): Observable<Product[]> {
    if (this.cachedProducts.length === 0 ){
      this.productService.getEveryProduct().subscribe(p => this.cachedProducts = p)
      return of(this.cachedProducts)
    } else {
      return of(this.cachedProducts)
    }
  }
}
