<!--
 * @Author: your name
 * @Date: 2021-03-29 16:57:46
 * @LastEditTime: 2021-03-30 21:56:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\home\Home.vue
-->
<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view/>
    <tab-control class="tab-control" 
      :titles="['流行','新款','精选']" @tabClick="tabClick"/>
    <!-- <goods-list :goods="goods[currentType].list"/> -->
    <goods-list :goods="showGoods"/>

    <ul>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
    </ul>
  </div>
</template>
<script>
  
  import HomeSwiper from './childComps//HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import {getHomeMultidata, getHomeGoods} from "network/home"




  
  
  
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    data(){ 
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop'
      }
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created(){
     //这里的this指的是这个Home.vue组件
     //getHomeMultidata是methods里的方法
      this.getHomeMultidata();

      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
      
      
    },
    methods: {
      /**
       * 事件监听相关方法
       */
      tabClick(index){
        console.log("流行-新款-精选---"+index);
        switch (index) {
          case 0:
            this.currentType='pop'
            break;
          case 1:
            this.currentType='new'
            break;
          case 2:
            this.currentType='sell'
            break;
        }
      },

      /**
       * 网络请求相关方法
       */
      getHomeMultidata(){
         //1.请求多个数据
        getHomeMultidata().then(res=>{
          //注意，这里的getHomeMultidata(),是调用home.js导入的getHomeMultidata方法
          console.log(res);
          this.banners=res.data.banner.list;
          this.recommends=res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        //2.请求商品数据
        const page=this.goods[type].page+1;
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page+=1;
          console.log(res);
        })
      }
      
    },

  }
</script>
<style scoped>

  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
