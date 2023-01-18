import {createAction, props} from "@ngrx/store";
import {Product} from "../models/product.model";

export const getAllProductsAction = createAction("Get all products");
export const getAllProductsResultAction = createAction("Get all products result", props<{products: Product[]}>());





export const addProductActon = createAction("Add product", props<{product: Product}>());
export const addProductResultAction =createAction("Add product result action", props<{products: Product[]}>());

export const categoryFilterAction = createAction("Filter by category",  props<{ category: string }>());
export const categoryFilterResultAction = createAction("Filter by category action", props<{products: Product[]}>())

export const deleteProductAction = createAction("Delete product action", props<{ id: number }>());
export const deleteProductResultAction = createAction("Delete product result action",  props<{products: Product[]}>());


export const changeProductOrderAction = createAction("Change product order1", props<{order: {}}>())
export const changeProductOrderResultAction = createAction("Change product order result1", props<{products: Product[]}>())
