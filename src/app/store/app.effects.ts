import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductService} from "../services/product.service";
import {map, mergeMap, switchMap} from "rxjs";
import {getAllProductsAction, getAllProductsResultAction} from "./app.action";
import {Repository} from "./repository.js";

@Injectable()
export class AppEffects {

    private effectName$ = createEffect(
    () => this.actions$.pipe(
      ofType(getAllProductsAction.type),
      switchMap(() => this.productService.getEveryProduct()),
      //switchMap(() => this.repository.get()),
      map((products) => {
        return getAllProductsResultAction({products })
      })
    )
  );



  constructor(private actions$: Actions, private productService: ProductService,
              private repository: Repository) {
}

}
