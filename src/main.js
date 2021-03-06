import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

// mixin
import metaMixin from "./mixins/common/meta";
import api from "./mixins/api/api.js"
import utils from "./mixins/utils.js"

Vue.config.productionTip = false

Vue.mixin(metaMixin)
Vue.mixin(api)
Vue.mixin(utils)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
