<template>
  <div id="home">
    <!-- 顶部标题栏 -->
    <nav-bar class="home-nav">
      <div slot="center">DSW-购物街</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners" />
    <!-- 推荐栏 -->
    <recommend-view :recommends="recommends" />
    <!-- 本周流行 -->
    <feature-view />
    <tab-control class="tab-control" :titles="['流行','新款','精选']" />
    <goods-list :goods="goods['pop'].list" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  // 创建完发送网络请求！
  created() {
    // 请求多个数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>

<style>
#home {
  padding-top: 44px;
}
.home-nav {
  position: fixed;
  background: var(--color-tint);
  color: #fff;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}
#zw {
  position: relative;
  width: 100%;
  height: 1000px;
  background: #eee;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 998;
}
</style>