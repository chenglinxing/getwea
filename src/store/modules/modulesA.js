export default {
  state: {
    name: "张三",
  },
  mutations: {
    updateName(state, payload) {
      state.name = "lis" + payload;
    },
  },
  getters: {
    fullname(state) {
      return (state.name += 11);
    },
    fullname1(state, getters) {
      return getters.fullname + 22;
    },
    fullname2(state, getters, rootState) {
      return getters.fullname1 + rootState.counter;
    },
  },
  actions: {},
};
