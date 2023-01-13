import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Product} from "../models/product.model";

const STORE_BASE_URL = "https://fakestoreapi.com"

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cachedProducts: Product[] = [];
  constructor(private httpClient: HttpClient) { }

  get(): Observable<Product[]> {
    return of(this.cachedProducts);
  }

  getAllProducts(limit = "12", sort = "desc", category?: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `${STORE_BASE_URL}/products/${category? 'category/' + category : ''}?sort=${sort}&limit=${limit}`)
  }

  getEveryProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `${STORE_BASE_URL}/products`)
  }

  getAllCategories(): Observable<string[]>{
    return this.httpClient.get<string[]>(`${STORE_BASE_URL}/products/categories`)
  }

}
