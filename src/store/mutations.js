export default {
  //mutations 一般用法
  ["ADC"](state) {
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
    // Vue.set(state.info, "addres", "上海");
    // Vue.delete(state.info, "age");
    state.info.id = 2;
    //mutations里面不支持异步操作  影响devtool里面的值
    // setTimeout(() => {
    //   state.info.id = 2;
    // }, 1500);
  },
  showCityName(state, name) {
    state.cityName = name;
  },
};
