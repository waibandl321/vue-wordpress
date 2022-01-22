import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    category: [],
  },
  mutations: {
    
  },
  actions: {
    
  },
  modules: {
    
  },
  plugins: [createPersistedState(
    {
      key: 'category',
      storage: window.sessionStorage
    }
  )]
})
