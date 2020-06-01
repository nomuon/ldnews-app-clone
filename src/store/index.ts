import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { favorites } from "./favorites";
import { readLaters } from "./readLaters";
import { histories } from "./histories";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0"
  },
  modules: {
    favorites,
    readLaters,
    histories
  }
};

export default new Vuex.Store<RootState>(store);
