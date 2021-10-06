import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import { VueMaskDirective } from "v-mask";
import Vuelidate from "vuelidate";
import "./assets/styles/global.scss";

Vue.use(Vuelidate);
Vue.directive("mask", VueMaskDirective);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
