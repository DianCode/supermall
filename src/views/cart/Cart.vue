<!--
 * @Author: your name
 * @Date: 2021-03-29 16:57:46
 * @LastEditTime: 2021-04-08 13:34:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\home\Home.vue
-->
<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <!-- <div slot="center">购物车({{$store.state.cartList.length}})</div> -->
        <div slot="center">购物车({{length}})</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {mapGetters} from 'vuex'
  export default {
    name: "Cart",
    components: {
      NavBar
    },
    computed: {
      // cartLength() {
      //   return this.$store.getters.cartLength
      // }

      //两种语法
      //...mapGetters(['cartLenght'])
      ...mapGetters({
        length:'cartLength'
      })
    }
  }
  
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color:#fff;
  }
</style>
