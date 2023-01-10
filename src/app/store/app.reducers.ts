import {Product} from "../models/product.model";
import {createReducer, on} from "@ngrx/store";
import {getAllProductsAction} from "./app.action";

export interface AppState  {
    products:  Product[]
}

export const initialState = {
  products: []
} as AppState;

export const appReducer = createReducer(
  initialState,
  on(getAllProductsAction, state => state)
)


