import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Review from "../views/Review";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/review",
    name: "Review",
    component: Review,
    beforeEnter(to, from, next) {
      var register = JSON.parse(localStorage.getItem("register"));
      var attendance = JSON.parse(localStorage.getItem("attendance"));
      if (register !== null && attendance !== null) {
        next();
      } else {
        next("/");
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
