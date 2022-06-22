import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App'
import Akcept from '../components/Akcept'
import Zadachi from '../components/Zadachi'
import Uvedomleniya from '../components/Uvedomleniya'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App },
    { path: '/akcept', component: Akcept },
    { path: '/zadachi', component: Zadachi },
    { path: '/uvedomleniya', component: Uvedomleniya }
  ]
});


//{ path: '/', redirect: { name: 'home' } },