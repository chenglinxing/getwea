import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import vant from "vant";
import "vant/lib/index.css";
Vue.use(vant);

import gitList from "./network/api";

// import axios from "axios";
// axios({
//   url: "http://www.tianqiapi.com/api",
//   params: {
//     appid: "23035354",
//     appsecret: "8YvlPNrz",
//     version: "v9",
//   },
// }).then((res) => {
//   console.log(res);
// });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
