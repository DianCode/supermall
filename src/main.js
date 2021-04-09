/*
 * @Author: your name
 * @Date: 2021-03-29 10:33:46
 * @LastEditTime: 2021-04-09 09:47:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//这里会默认导入toast文件夹下的index.js文件
import toast from 'components/common/toast'
import FastClick from 'fastclick'

Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus=new Vue();

//安装toast插件
Vue.use(toast);
//执行这句话的时候Vue.use(toast)
//会去调用toast这个对象的install方法，而这个toast对象是index.js里的obj对象

//解决移动端300ms的延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
