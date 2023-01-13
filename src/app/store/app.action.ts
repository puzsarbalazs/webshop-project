import {createAction, props} from "@ngrx/store";
import {Product} from "../models/product.model";

export const getAllProductsAction = createAction("Get all products");
export const getAllProductsResultAction = createAction("Get all products result", props<{products: Product[]}>());

