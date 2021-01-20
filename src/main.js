import Vue from "vue";
import App from "./App.vue";
import vueMiniAudio from "./lib";

Vue.use(vueMiniAudio);
new Vue({
  el: "#app",
  render: h => h(App)
});
