import {Product} from "../models/product.model";
import {Observable, of} from "rxjs";
import {ProductService} from "../services/product.service";
import {Injectable} from "@angular/core";
import {MessageService} from "primeng/api";
import {CartItem} from "../models/cart.model";

const STORE_BASE_URL = "https://fakestoreapi.com";

@Injectable()
export class Repository {
  constructor(private productService: ProductService,
              private messageService: MessageService) {
  }

  cachedProducts: Product[] = [];
  filteredProducts: Product[] = []

  toSort: Product[] = [];

   compareAsc( a: Product, b: Product, order = "asc" ) {
       if ( a.id < b.id ){
         return -1;
       }
       if ( a.id > b.id ){
         return 1;
       }
       return 0;
     }

  compareDesc( a: Product, b: Product, order = "asc" ) {
    if ( a.id > b.id ){
      return -1;
    }
    if ( a.id < b.id ){
      return 1;
    }
    return 0;
  }



  get(): Observable<Product[]> {
    if (this.cachedProducts.length === 0 ){
      //this.productService.getEveryProduct().subscribe(p => this.cachedProducts = p)
      //return of(this.cachedProducts)
      this.productService.getEveryProduct().subscribe(p => {
        this.cachedProducts = p
        this.filteredProducts = p
      })
      this.filteredProducts = [...this.cachedProducts]
      console.log("lefut a http kérés")
      return this.productService.getEveryProduct()
    } else {
      console.log("lefut a nem http kérés")
      return of(this.cachedProducts)
    }
  }




  changeOrder(order: any): Observable<Product[]>{
    let sorted = [...this.filteredProducts];
    let sortedBy: string = order.order.sortBy;
    console.log(sorted[0][sortedBy as keyof Product])
    if (order.order.sort === "desc"){
      return of(sorted.sort((a,b) => (a[sortedBy as keyof Product] < b[sortedBy as keyof Product]) ?
        1 : ((b[sortedBy as keyof Product] < a[sortedBy as keyof Product]) ? -1 : 0)))
    } else {
      return of(sorted.sort((a,b) => (a[sortedBy as keyof Product] > b[sortedBy as keyof Product]) ?
        1 : ((b[sortedBy as keyof Product] > a[sortedBy as keyof Product]) ? -1 : 0)))
    }
  }


   addProduct(product: any){
     /*let currentProducts = [...this.cachedProducts];
     let newProduct = {...product.poruct, id: Math.max(...currentProducts.map(p => p.id))+1}
     console.log(newProduct)
     product.product.id = Math.max(...currentProducts.map(p => p.id))+1;
     currentProducts.push(product.product);
     this.cachedProducts = currentProducts;
     console.log(this.cachedProducts);

      */
     this.productService.addProduct(product.product).subscribe()
     this.cachedProducts = []
     return this.get()
   }

  updateProduct(product: any){
    let  currentProducts= this.cachedProducts.filter(p => product.product.id !== p.id)
    currentProducts.push(product.product)
    this.cachedProducts = currentProducts;
    console.log(this.cachedProducts);
    this.productService.updateProduct(product.product).subscribe();
    return of(this.cachedProducts)
  }

   categoryFilter(category: any) {
     let currentProducts = [...this.cachedProducts];
     console.log(category)
     if (category.category !== ""){
       return of(currentProducts = currentProducts.filter(a => a.category === category.category));
     } else {
       return this.get();
     }
   }

   deleteProduct(id: any) {
     this.productService.deleteProductById(id.id).subscribe( r => {

       }
     );
     let currentProducts = [...this.cachedProducts];
     console.log(id)
     currentProducts = currentProducts.filter(a => a.id !== id.id)
     this.cachedProducts = currentProducts;
     return of(this.cachedProducts);
   }

   searchProducts(s: any){
     let currentProducts = [...this.filteredProducts];
     currentProducts = currentProducts.filter(product => product.title.toLowerCase().includes(s.s.toLowerCase()))
     if (currentProducts.length === 0){
       this.messageService.add({severity: "warn", summary: "Not found", detail: "No product find matching your search"})
       return of(this.filteredProducts);
     } else {
       this.filteredProducts = currentProducts;
       return of(this.filteredProducts)
     }
   }

  filterByPrice(price: any){
     let currentProducts = [...this.cachedProducts];
     currentProducts = currentProducts.filter(product => product.price>=price.price.min && product.price<=price.price.max)
    this.filteredProducts = currentProducts
     return of(this.filteredProducts)
  }


  filterProducts(prop: any) {
     let filteredProducts = [...this.cachedProducts];
     if (prop.filters.category === ""){
       filteredProducts = filteredProducts.filter(product => product.price >= prop.filters.minPrice && product.price <= prop.filters.maxPrice &&
         product.title.toLowerCase().includes(prop.filters.search.toLowerCase()))
     } else {
       filteredProducts = filteredProducts.filter(product => product.price >= prop.filters.minPrice && product.price <= prop.filters.maxPrice &&
         product.title.toLowerCase().includes(prop.filters.search.toLowerCase()) && product.category === prop.filters.category )
     }
     if (filteredProducts.length === 0 ) {
       this.messageService.add({severity: "warn", summary: "Not found", detail: "No product found matching your search"})
       return this.get()
     } else {
       return of(filteredProducts);
     }
  }

  recommendProducts(prop: any) {
     //if (prop.cart.length >= 3) {
       //const allProperties: string[] = prop.cart.map((p: { properties: any; }) => p.properties)
      // const allProperties: string[] = prop.cart.map((p: CartItem) => p.properties)
       //let propertyCounts: {name: string, count:number}[]= []
       //allProperties.map(p => {
       //  if (propertyCounts.map(po => po.name).includes(p)) {

       //  } else {
       //    propertyCounts.push({name: p, count: 1})
       //  }
       //})
       //console.log(prop.cart)
    // }
     return of()
  }
}
