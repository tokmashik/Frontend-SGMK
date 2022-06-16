import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import '@/components/Main.scss'
Vue.config.productionTip = false

new Vue({
  iconfont: 'mdi',
  vuetify,
  render: h => h(App)
}).$mount('#app')
