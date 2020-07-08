export default {
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
};
