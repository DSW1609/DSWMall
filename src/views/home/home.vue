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
    <!-- tab栏 -->
    <tab-control
      :titles="titles"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    />
    <!-- 使用better-scroll -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <!-- 画个心心 -->
      <xinxin />
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @swiperImageLoad.once="swiperImageLoad" />
      <!-- 推荐栏 -->
      <recommend-view :recommends="recommends" />
      <!-- 本周流行 -->
      <feature-view />
      <!-- tab栏 -->
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl2" />
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
import xinxin from "components/content/xinxin/xinxin";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/untils";

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
    BackTop,
    xinxin
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
      isShowBackTop: false,
      // tabControld的浮动状态
      isTabFixed: false
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
  mounted() {
    // 监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    // tab栏点击事件
    tabClick(index) {
      // 根据点击的标签，切换需要请求的数据类型
      this.goodsType = this.titlesType[index];

      // 给两个tab栏的currentIndex相同的值，确保状态一致
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;

      // 实时记录当前标签的offsetY的值
      // 保存

      // 点击标签切换后，使页面滚动到指定值 ↓ (70 为心心的高度)
      this.$refs.scroll.scrollTo(0, -this.tabOffsetTop + 70);
      //
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // backTop显示隐藏
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;

      //决定tabControl是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop - 70;
    },
    // 加载更多
    loadMore() {
      this.getHomeGoods(this.goodsType);
    },
    // 获取tabControl的offsetTop
    swiperImageLoad() {
      // 所有的组件都有一个属性$el:用于获取组件的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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

        // 完成上拉加载更多
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
  top: -26px;
  bottom: 2px;
  left: 0;
  right: 0;
  background: #fff;
}
.tab-control {
  position: relative;
  z-index: 999;
  top: 0;
  top: -1px;
}
</style>