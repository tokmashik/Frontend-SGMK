import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import './assets/Main.scss'

import router from './router/index'

export const server = {
  baseURL: 'http://localhost:3000'
}


Vue.use(VueRouter)

Vue.prototype.axios = axios
Vue.config.productionTip = false 

new Vue({
  iconfont: 'mdi',
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
