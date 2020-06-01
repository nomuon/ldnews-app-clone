import { Module } from "vuex";
import { FavoritesState, RootState } from "@/store/types";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

const state: FavoritesState = {
  favorites: []
};

export const favorites: Module<FavoritesState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
