<template>
  <div id="home">
    <!-- 顶部标题栏 -->
    <nav-bar class="home-nav">
      <div slot="left">
        <img class="home_left_img" src="~assets/img/home/sm.png" alt />
      </div>
      <div slot="center">
        <div class="home_search">
          <!-- 搜索输入框 -->
          <input type="text" class="home_search_in" />
          <!-- 右侧搜索图标 -->
          <img class="home_center_img" src="~assets/img/home/search.png" alt />
        </div>
      </div>
      <div slot="right">DSW</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners" />
    <!-- 推荐栏 -->
    <recommend-view :recommends="recommends" />
    <!-- 本周流行 -->
    <feature-view />
    <tab-control class="tab-control" :titles="titles" @tabClick="tabClick" />
    <goods-list :goods="showGoods" />
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
      },
      titles: ["流行", "新款", "精选"],
      // 定义数组存储需要展示的数据
      titlesType: ["pop", "new", "sell"],
      // 默认展示pop的数据
      goodsType: "pop"
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.goodsType].list;
    }
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
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      this.goodsType = this.titlesType[index];
    },
    /**
     *网络请求相关的方法
     */
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
.home_search {
  position: relative;
  top: 6px;
  width: 100%;
  height: 28px;
  border: none;
  border-radius: 14px;
  background: #fff;
}
.home_left_img {
  position: relative;
  width: 26px;
  top: 7px;
  line-height: 26px;
}
.home_search_in {
  position: relative;
  width: 90%;
  height: 26px;
  border: none;
  top: -10px;
  outline: none;
  font-size: 14px;
}
.home_center_img {
  position: absolute;
  width: 20px;
  top: 3px;
  right: 10px;
  background: #fff;
}
</style>