import { ActionTree } from "vuex";
import { HistoriesState, RootState, Article } from "../types";

export const actions: ActionTree<HistoriesState, RootState> = {
  add: ({ commit }, article: Article) => {
    commit("add", article);
  },

  remove: ({ commit }, article: Article) => {
    commit("remove", article);
  }
};
