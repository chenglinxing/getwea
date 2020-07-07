<template>
  <div id="app">
    <h1>{{ $store.state.counter }}</h1>
    <h2>{{ $store.state.students }}</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h3>{{ $store.getters.morefifteen }}</h3>
    <h2>--------------------</h2>
    <h3>{{ $store.state.info }}</h3>
    <h4>{{ $store.getters.test(16) }}</h4>
    <button @click="updateInfo">修改信息</button>
    <button @click="ad()">+</button>
    <button @click="su()">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudents">添加学生</button>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from "./views/home/Home";
  import axios from "axios";
  import City from "./views/managcity/city";

  export default {
    name: "App",
    components: {
      Home,
      City,
    },
    methods: {
      ad() {
        this.$store.commit("add");
      },
      su() {
        this.$store.commit("sub");
      },
      addCount(count) {
        //payload  载荷
        //1.普通方式提交
        // this.$store.commit("addCount", count);

        //2.特殊的方式提交
        this.$store.commit({
          type: "addCount",
          count,
        });
      },
      addStudents() {
        var stu = { id: "A", age: "1" };
        for (var i = 0; i < 5; i++) {
          stu = { id: i, name: "1" + i };
          console.log(stu);
        }
        this.$store.commit("addStudents", stu);
      },
      updateInfo() {
        this.$store.commit("updateInfo");
      },
    },
  };
</script>

<style></style>
