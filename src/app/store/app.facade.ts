import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Product} from "../models/product.model";
import {Store} from "@ngrx/store";
import {AppState} from "./app.reducers";
import {selectProducts} from "./app.selectors";
import {getAllProductsAction} from "./app.action";

@Injectable()
export class AppFacade {
  public productsObservable: Observable<Product[]> =this.store.select(selectProducts);

  constructor(private store: Store<AppState>) {}

  getALlProducts(): void {
    this.store.dispatch(getAllProductsAction())
  }
}
