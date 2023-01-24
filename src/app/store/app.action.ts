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

export const searchProductsAction = createAction("Search products", props<{ s: string }>())
export const searchProductsResultAction = createAction("Search products result", props<{products: Product[]}>())

export const filterByPriceAction = createAction("Filter by price", props<{ price: {min: number, max: number} }>());
export const filterByPriceResultAction = createAction("Filter by price result",  props<{products: Product[]}>())


export const filterProductsAction = createAction("Filter products",  props<{ filters: {minPrice: number, maxPrice: number, search: string, category:string} }>())
export const filterProductsResultAction = createAction("Filter products result",  props<{products: Product[]}>())
