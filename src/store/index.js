/*
 * @Author: your name
 * @Date: 2021-03-29 10:33:46
 * @LastEditTime: 2021-04-08 11:04:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建Store对象
// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

const store = new Vuex.Store({
  state:{
    cartList: []
  },
  mutations: {
    addCart(state,payload){
      //payload新添加的商品
      // let oldProduct=null;
      // for(let item of state.cartList){
      //   if(item.iid === payload.iid){
      //     oldProduct=item;
      //   }
      // }
      //2.判断oldProduct
      // if (oldProduct) {
      //   oldProduct.count += 1;
      // } else {
      //   payload.count = 1;
      //   state.cartList.push(payload);
      // }

      //数组常用的方法优哪些?
      //push/pop/unshift/shift/sort/reverse/map/filter/reduce/join
      // let index = state.cartList.indexOf(payload);
      // if(index === -1){
      //   let oldProduct = state.cartList[index];
      //   oldProduct.count +=1;
      // }else {
      //   payload.count =1;
      //   state.cartList.push(payload);
      // }


      //第三种写法
      //查找之前数组中是否有该商品
      let oldProduct = state.cartList.find(function (item){
        return item.iid===payload.iid
      })

      if(oldProduct){
        oldProduct.count +=1;
      }else {
        payload.count = 1;
        state.cartList.push(payload);
      }
      
     
    }
  }
})


//3.挂载Vue实例上
export default store
