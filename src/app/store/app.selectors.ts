import {AppState} from "./app.reducers";

export const selectProducts = (state: AppState) => {
  return state.allProduct
}
