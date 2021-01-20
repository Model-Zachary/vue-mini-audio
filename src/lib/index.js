import vueMiniAudio from "./vueMinAudio";

import _Vue from "vue";

vueMiniAudio.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue;
  }
  Vue.component(vueMiniAudio.name, vueMiniAudio);
};
export default vueMiniAudio;
