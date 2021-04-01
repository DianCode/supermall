/*
 * @Author: your name
 * @Date: 2021-03-29 10:33:46
 * @LastEditTime: 2021-04-01 14:29:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
