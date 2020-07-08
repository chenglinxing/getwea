import Vue from "vue";
import VueRouter from "vue-router";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const Home = () => import("../views/home/Home");
const City = () => import("../views/managcity/city");

Vue.use(VueRouter);

const routes = [
  { path: "", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/city", component: City },
];

const router = new VueRouter({
  // mode: "history",

  base: process.env.BASE_URL,

  routes,
});

export default router;
