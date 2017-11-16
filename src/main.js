import Vue from 'vue'

import Vuetify from 'vuetify'
import './stylus/main.styl'

import {store} from './store/store'

import App from './App'
import router from './router'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
