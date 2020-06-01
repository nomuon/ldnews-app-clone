import { Module } from "vuex";
import { ReadLatersState, RootState } from "@/store/types";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

const state: ReadLatersState = {
  readLaters: []
};

export const readLaters: Module<ReadLatersState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
