import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import { VueMaskDirective } from "v-mask";
import Vuelidate from "vuelidate";
import VueCookies from "vue-cookies";
import "./assets/styles/global.scss";

Vue.use(Vuelidate);
Vue.use(VueCookies);
Vue.directive("mask", VueMaskDirective);
Vue.use(BootstrapVue);

Vue.$cookies.config("15d");
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
