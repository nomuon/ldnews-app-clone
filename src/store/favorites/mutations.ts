import { MutationTree } from "vuex";
import { FavoritesState, Article } from "../types";

export const mutations: MutationTree<FavoritesState> = {
  add: (state, article: Article) => {
    state.favorites.unshift(article);
  },

  remove: (state, article: Article) => {
    const favorites = state.favorites;
    const id = article.id;
    const index = favorites.findIndex((elm: Article) => {
      return elm.id === id;
    });
    state.favorites.splice(index, 1);
  }
};
