import { MutationTree } from "vuex";
import { ReadLatersState, Article } from "../types";

export const mutations: MutationTree<ReadLatersState> = {
  add: (state, article: Article) => {
    state.readLaters.unshift(article);
  },

  remove: (state, article: Article) => {
    const readLaters = state.readLaters;
    const id = article.id;
    const index = readLaters.findIndex((elm: Article) => {
      return elm.id === id;
    });
    state.readLaters.splice(index, 1);
  }
};
