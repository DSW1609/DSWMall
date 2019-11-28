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
          <input type="text" class="home_search_in" placeholder="Vue NiuBi !!! DSW NiuBi !!!" />
          <!-- 右侧搜索图标 -->
          <img class="home_center_img" src="~assets/img/home/search.png" alt />
        </div>
      </div>
      <div slot="right">DSW</div>
    </nav-bar>
    <!-- 使用better-scroll -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <home-swiper :banners="banners" />
      <!-- 推荐栏 -->
      <recommend-view :recommends="recommends" />
      <!-- 本周流行 -->
      <feature-view />
      <!-- tab栏 -->
      <tab-control class="tab-control" :titles="titles" @tabClick="tabClick" />
      <!-- 展示商品 -->
      <goods-list :goods="showGoods" />
    </scroll>
    <!-- 回到顶部 -->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
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
      goodsType: "pop",
      // backTop的状态
      isShowBackTop: false
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
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // backTop显示隐藏
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
    },
    // 上拉加载更多
    loadMore() {
      console.log("我加载了哈哈哈!");
      this.getHomeGoods(this.goodsType);
      // 图片加载完成,重新计算可滚动高度
      this.$refs.scroll.scroll.refresh();
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
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
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
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 2px;
  left: 0;
  right: 0;
}
</style>