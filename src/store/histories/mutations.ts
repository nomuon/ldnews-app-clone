import { MutationTree } from "vuex";
import { HistoriesState, Article } from "../types";

export const mutations: MutationTree<HistoriesState> = {
  add: (state, article: Article) => {
    const histories = state.histories;
    const id = article.id;
    const index = histories.findIndex((elm: Article) => {
      return elm.id === id;
    });

    if (index !== -1) {
      state.histories.splice(index, 1);
    }
    state.histories.unshift(article);
  },

  remove: (state, article: Article) => {
    const histories = state.histories;
    const id = article.id;
    const index = histories.findIndex((elm: Article) => {
      return elm.id === id;
    });
    state.histories.splice(index, 1);
  }
};
