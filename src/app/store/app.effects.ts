import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductService} from "../services/product.service";
import {map, mergeMap, switchMap} from "rxjs";
import {
  addProductActon,
  addProductResultAction,
  categoryFilterAction,
  categoryFilterResultAction,
  changeProductOrderAction,
  changeProductOrderResultAction,
  deleteProductAction,
  deleteProductResultAction,
  filterByPriceAction,
  filterByPriceResultAction,
  filterProductsAction,
  filterProductsResultAction,
  getAllProductsAction,
  getAllProductsResultAction,
  searchProductsAction,
  searchProductsResultAction
} from "./app.action";
import {Repository} from "./repository.js";

@Injectable()
export class AppEffects {

    private effectName$ = createEffect(
    () => this.actions$.pipe(
      ofType(getAllProductsAction.type),
      //switchMap(() => this.productService.getEveryProduct()),
      switchMap(() => this.repository.get()),
      map((products) => {
        return getAllProductsResultAction({products })
      })
    )
  );





  private addProduct = createEffect(
    () => this.actions$.pipe(
      ofType(addProductActon.type),
      switchMap((action) => this.repository.addProduct(action)),
      map((products) => {
        return addProductResultAction({products})
      })
    )
  )

  private categoryFilter = createEffect(
    () => this.actions$.pipe(
      ofType(categoryFilterAction.type),
      switchMap( (action) => this.repository.categoryFilter(action)),
        map((products) => {
          return categoryFilterResultAction({products})
        })
      )
    )

  private deleteProductEffect = createEffect(
    () => this.actions$.pipe(
      ofType(deleteProductAction.type),
      switchMap((action) => this.repository.deleteProduct(action)),
      map((products) => {
        return deleteProductResultAction({products})
      })
    )
  )


  private changeOrderEffect = createEffect(
    () => this.actions$.pipe(
      ofType(changeProductOrderAction.type),
      switchMap((action) => this.repository.changeOrder(action)),
      map((products) =>{
        return changeProductOrderResultAction({products});
      })
    )
  )

  private searchProductEffect = createEffect(
    () => this.actions$.pipe(
      ofType(searchProductsAction.type),
      switchMap((action) => this.repository.searchProducts(action)),
      map((products) => {
        return searchProductsResultAction({products});
      })
    )
  )

  private filterByPriceEffect = createEffect(
    () => this.actions$.pipe(
      ofType(filterByPriceAction.type),
      switchMap((action) => this.repository.filterByPrice(action)),
      map((products) => {
        return filterByPriceResultAction({products})
      })
    )
  )

  private filterProductsEffect = createEffect(
    () => this.actions$.pipe(
      ofType(filterProductsAction.type),
      switchMap((action) => this.repository.filterProducts(action)),
      map((products) => {
        return filterProductsResultAction({products})
      })
    )
  )



  constructor(private actions$: Actions, private productService: ProductService,
              private repository: Repository) {
}

}
