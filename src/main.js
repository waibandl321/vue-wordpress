import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

// mixin
import metaMixin from "./mixins/meta";

Vue.config.productionTip = false

Vue.mixin(metaMixin)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
