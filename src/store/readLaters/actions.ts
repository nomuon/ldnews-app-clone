import { ActionTree } from "vuex";
import { ReadLatersState, RootState, Article } from "../types";

export const actions: ActionTree<ReadLatersState, RootState> = {
  add: ({ commit }, article: Article) => {
    commit("add", article);
  },

  remove: ({ commit }, article: Article) => {
    commit("remove", article);
  }
};
