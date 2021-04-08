/*
 * @Author: your name
 * @Date: 2021-04-08 13:19:18
 * @LastEditTime: 2021-04-08 13:21:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\store\getters.js
 */
export default {
  cartLength(state){
    return state.cartList.length
  }
}