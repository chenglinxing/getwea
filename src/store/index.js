import Vue from "vue";
import Vuex from "vuex";
import { AD } from "./mutations-types";
Vue.use(Vuex);

import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import moduleA from "./modules/modulesA";

const store = new Vuex.Store({
  state: {
    counter: 100,
    students: [
      { id: "A", age: 12 },
      { id: "B", age: 16 },
      { id: "C", age: 18 },
      { id: "D", age: 20 },
    ],
    info: { id: 1, age: 10, height: 1.78 },
  },
  mutations,
  getters,
  actions,
  modules: {
    a: moduleA,
  },
});

export default store;

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   },
//   getters: {
//    }
// })
