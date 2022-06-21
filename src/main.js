import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import axios from 'axios'

import Akcept from "@/components/Akcept";
import Zadachi from "@/components/Zadachi";
import Uvedomleniya from "@/components/Uvedomleniya";

import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import './assets/Main.scss'

Vue.use(Router)

Vue.config.productionTip = false

Vue.prototype.axios = axios
Vue.config.productionTip = false 

new Vue({
  iconfont: 'mdi',
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default new Router({
  routes: [
      {
          path: '/akcept',
          name: 'Akcept',
          component: Akcept
      },
      {
          path: '/zadachi',
          name: 'Zadachi',
          component: Zadachi
      },
      {
          path: '/uvedomleniya',
          name: 'Uvedomleniya',
          component: Uvedomleniya
      }, 
      {
          path: '/uvedomleniya',
          name: 'Uvedomleniya',
          component: Uvedomleniya
      }, 
      {
          path: '/uvedomleniya',
          name: 'Uvedomleniya',
          component: Uvedomleniya
      },          
  ]
})