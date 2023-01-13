import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Product} from "../models/product.model";
import {Store} from "@ngrx/store";
import {AppState} from "./app.reducers";
import {getAllProductsAction} from "./app.action";

@Injectable()
export class AppFacade {

  constructor(private store: Store<AppState>) {}

  getALlProducts(): void {
    this.store.dispatch(getAllProductsAction())
  }

}
