import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

import VueSkeletonLoader from "skeleton-loader-vue";

// Register the component globally
Vue.component("vue-skeleton-loader", VueSkeletonLoader);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
