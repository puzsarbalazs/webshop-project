import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {StoreService} from "../services/store.service";
import {getAllProducts} from "./app.action";
import {map, mergeMap} from "rxjs";

@Injectable()
export class AppEffects {



  constructor(private actions$: Actions, private storeService: StoreService) {
  }
}
