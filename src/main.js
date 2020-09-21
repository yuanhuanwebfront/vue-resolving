import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vueHighlight from 'vue-highlightjs'
import 'highlight.js/styles/monokai.css'

Vue.use(vueHighlight)

import './style/main.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
