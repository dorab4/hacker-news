import Vue from "vue";
import Vuex from "vuex";
import stories from "./stories";
import global from "./global";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    stories,
  },
});
