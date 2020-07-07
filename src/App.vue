<template>
  <div id="app">
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
