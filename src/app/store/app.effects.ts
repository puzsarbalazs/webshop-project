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
  getAllProductsAction,
  getAllProductsResultAction
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



  constructor(private actions$: Actions, private productService: ProductService,
              private repository: Repository) {
}

}
