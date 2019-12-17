import Vue from "vue";
import Vuex from "vuex";
import products from "@/api/products.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    detail: {}
  },
  getters: {
    detail: state => state.detail
  },
  mutations: {
    set(state, { detail }) {
      state.detail = detail;
    },
    clear(state) {
      state.detail = {};
    }
  },
  actions: {
    load({ commit }, id) {
      products.asyncFind(id, detail => {
        commit("set", detail);
      });
    }
  },
  destroy({ commit }) {
    commit("clear");
  }
});
