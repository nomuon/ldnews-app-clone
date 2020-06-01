import { ActionTree } from "vuex";
import { FavoritesState, RootState, Article } from "../types";

export const actions: ActionTree<FavoritesState, RootState> = {
  add: ({ commit }, article: Article) => {
    commit("add", article);
  },

  remove: ({ commit }, article: Article) => {
    commit("remove", article);
  }
};
