import { GetterTree } from "vuex";
import { ReadLatersState, RootState } from "../types";

export const getters: GetterTree<ReadLatersState, RootState> = {
  all: (state: ReadLatersState) => {
    return state.readLaters;
  }
};
