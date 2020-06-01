import { GetterTree } from "vuex";
import { FavoritesState, RootState } from "../types";

export const getters: GetterTree<FavoritesState, RootState> = {
  all: (state: FavoritesState) => {
    return state.favorites;
  }
};
