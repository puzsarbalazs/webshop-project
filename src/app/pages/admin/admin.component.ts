import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";
import {addProductActon, deleteProductAction, getAllProductsAction, updateProductAction} from "../../store/app.action";
import {selectProducts} from "../../store/app.selectors";
import {Observable} from "rxjs";
import {CartService} from "../../services/cart.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  uploadedFiles: any[] = []
  newProduct: Product = {
    id:1000,
    title:"valami",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    category:"valami",
    price:100,
    description:"valamivami",
    properties: [],
    inStock: 100,
  };
  products: Observable<Product[]> = this.store.select(selectProducts);
  displayedColumns: string[] = ["Product", "Title", "Category", "Description", "Price"];
  categoryList: string[] = [];
  newButton = true;
  propertiesItems = [
    { name: "dark-magic", value:"dark-magic"},
    { name: "fire", value:"fire"},
    { name: "wind", value:"wind"},
    { name: "moon", value:"moon"},
    { name: "frost", value:"frost"}
  ]
  properties : any[] = []
  propertyNames: String[] = this.properties.map(p => p.name)




  constructor(private store: Store<AppState>, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllCategories()
      .subscribe(response => this.categoryList = response);
    this.store.dispatch(getAllProductsAction());
  }

  ngOnDestroy(): void {

  }

  onUpload(event: any) {
    for (let file of event.files){
      this.uploadedFiles.push(file)
    }
  }

  addNewProduct() {
    this.newProduct.properties = this.properties.map(p => p.name);
    console.log(this.newProduct);
    this.store.dispatch(addProductActon({product: this.newProduct}))
    this.newProduct = {...this.newProduct}
  }

  updateProduct() {
    this.newProduct.properties = this.properties.map(p => p.name);
    this.store.dispatch(updateProductAction({product: this.newProduct}))
    this.newProduct = {...this.newProduct}
  }

  deleteItem(product: Product): void {
    // @ts-ignore
    this.store.dispatch(deleteProductAction({id: product.id }))
  }

  toTheTop(product: Product) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.newButton = false;
    this.newProduct = {...product}
  }

  toggleBetweenNewAndUpgrade() {
    this.newButton = !this.newButton;
  }
}
