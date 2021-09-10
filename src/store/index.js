import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: localStorage.getItem("score") || 0,
  },
  mutations: {
    setWin(state) {
      state.score = state.score + 1;
      localStorage.setItem("score", state.score);
      console.log(state.score);
    },
    setLose(state) {
      state.score = state.score - 1;
      localStorage.setItem("score", state.score);
      console.log(state.score);
    },
  },
  actions: {
    win({ commit }) {
      commit("setWin");
    },
    lose({ commit }) {
      commit("setLose");
    },
  },
});
