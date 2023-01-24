import {Product} from "../models/product.model";
import {Action, ActionReducerMap, createReducer, on} from "@ngrx/store";
import {
  addProductActon,
  addProductResultAction,
  categoryFilterResultAction,
  changeProductOrderResultAction,
  deleteProductResultAction, filterByPriceResultAction, filterProductsResultAction,
  getAllProductsResultAction, searchProductsResultAction
} from "./app.action";

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
  }),
  on(addProductResultAction, (state, action) => {
    return action.products
  }),
  on(categoryFilterResultAction, (state, action) => {
    return action.products
  }),
  on(deleteProductResultAction, (state, action) => {
    return action.products;
  }),
  on(changeProductOrderResultAction, (state, action) => {
    return action.products;
  }),
  on(searchProductsResultAction, (state, action) => {
    return action.products
  }),
  on(filterByPriceResultAction, (state, action) => {
    return action.products
  }),
  on(filterProductsResultAction, (state, action) => {
    return action.products
  })
)

export const appInitialReducerMap: ActionReducerMap<AppState> = {
  allProduct: productReducer
}
