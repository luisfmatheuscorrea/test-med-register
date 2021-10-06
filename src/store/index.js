import Vue from "vue";
import Vuex from "vuex";
import register from "./register";

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      register,
    },

    strict: process.env.DEV,
  });

  return Store;
}
