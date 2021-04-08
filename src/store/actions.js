/*
 * @Author: your name
 * @Date: 2021-04-08 11:40:04
 * @LastEditTime: 2021-04-08 11:51:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\store\actions.js
 */
import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

// export default {
//   addCart(context, payload) {
//     let oldProduct = context.state.cartList.find(function (item) {
//       return item.iid === payload.iid
//     })

//     if (oldProduct) {
//       //oldProduct.count += 1;
//       context.commit('addCounter', oldProduct)
//     } else {
//       payload.count = 1;
//       //context.state.cartList.push(payload);
//       context.commit('addToCart', payload);
//     }
//   }
// }

export default {
  addCart(context, payload) {
    let oldProduct = context.state.cartList.find(function (item) {
      return item.iid === payload.iid
    })

    if (oldProduct) {
      //oldProduct.count += 1;
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payload.count = 1;
      //context.state.cartList.push(payload);
      context.commit(ADD_TO_CART, payload);
    }
  }
}

