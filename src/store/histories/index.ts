import { Module } from "vuex";
import { HistoriesState, RootState } from "@/store/types";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

const state: HistoriesState = {
  histories: []
};

export const histories: Module<HistoriesState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
