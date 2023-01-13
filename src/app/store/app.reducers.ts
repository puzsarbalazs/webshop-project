import {Product} from "../models/product.model";
import {Action, ActionReducerMap, createReducer, on} from "@ngrx/store";
import { getAllProductsResultAction} from "./app.action";

export interface AppState  {
    allProduct: Product[]
}


export const initialState = {
  allProduct: []
} as AppState;



export const productReducer = createReducer(
  initialState.allProduct,
  on(getAllProductsResultAction, (state, action) => {
    return action.products
  })
)

export const appInitialReducerMap: ActionReducerMap<AppState> = {
  allProduct: productReducer
}
