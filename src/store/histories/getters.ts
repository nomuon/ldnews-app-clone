import { GetterTree } from "vuex";
import { HistoriesState, RootState } from "../types";

export const getters: GetterTree<HistoriesState, RootState> = {
  all: (state: HistoriesState) => {
    return state.histories;
  }
};
