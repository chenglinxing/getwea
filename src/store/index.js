import Vue from "vue";
import Vuex from "vuex";
import { AD } from "./mutations-types";
Vue.use(Vuex);

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
  mutations: {
    //mutations 一般用法
    ["AD"](state) {
      state.counter++;
    },
    sub(state) {
      state.counter--;
    },

    //mutations 传递参数
    // addCount(state,count) {
    //   state.counter += count;
    // },

    addCount(state, payload) {
      state.counter += payload.count;
    },

    //响应式添加或删除数据
    //修改数组
    //假设每次都往students里面添加一个学生
    addStudents(state, stu) {
      state.students.push(stu);
    },

    //修改信息  //修改对象
    updateInfo(state) {
      //不是响应式的
      // state.info.age = "20";
      Vue.set(state.info, "addres", "上海");
      Vue.delete(state.info, "age");
    },
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter;
    },
    //只需要students里面age大于15的
    morefifteen(state) {
      return state.students.filter((s) => s.age > 15);
    },
    test(state, getters) {
      return (age) => state.students.filter((s) => s.age > age);
    },
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
