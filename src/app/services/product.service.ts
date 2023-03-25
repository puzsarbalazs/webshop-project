import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Product} from "../models/product.model";
import {CartItem} from "../models/cart.model";

const STORE_BASE_URL = "https://fakestoreapi.com"
const RPODUCTS_API = "http://localhost:8080/api/products"

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

  getEveryProduct2(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `${STORE_BASE_URL}/products`)
  }

  getEveryProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `${RPODUCTS_API}`)
  }

  deleteProductById(id: number) {
    return this.httpClient.delete(
      `${RPODUCTS_API}/${id}`
    )
  }

  getAllCategories1(): Observable<string[]>{
    return this.httpClient.get<string[]>(`${STORE_BASE_URL}/products/categories`)
  }

  getAllCategories(): Observable<string[]>{
    return this.httpClient.get<string[]>(`${RPODUCTS_API}/categories`)
  }

  addProduct(product: Product) {
    const body = {title: product.title, description: product.description, category: product.category, image: product.image}
    return this.httpClient.post<any>(`${RPODUCTS_API}`, product)
  }

  updateProduct(product: Product) {
    const body = {title: product.title, description: product.description, category: product.category, image: product.image}
    return this.httpClient.put(`${RPODUCTS_API}/${product.id}?title=${product.title}&description=${product.description}&category=${product.category}&image=${product.image}&price=${product.price}&properties=${product.properties.join(",")}`, {})
  }

  getRecommendedProducts(propertyList: string[]) {
    return this.httpClient.get(`${RPODUCTS_API}/recommended`)
  }


}
