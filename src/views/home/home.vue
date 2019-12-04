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
      <div slot="right" @click="dswClick">DSW</div>
    </nav-bar>
    <!-- 隐藏框 -->
    <div class="dswNiubi" :class="{dswNiubiShow:isDsw}">
      <span>王嘉辉 NiuBi !!!</span>
      <span>王嘉辉 NiuBi !!!</span>
    </div>
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
      isDsw: false,
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
      isTabFixed: false,
      // 保存当前点击的index的值
      tabIndex: 0,
      // 保存三个tab栏内内容滚动的值
      tabScroll: [0, 0, 0],
      // 定义一个变量控制滚动时间
      scrollTime: 500,
      // 保存当前页面滚动的值
      saveY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.goodsType].list;
    }
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    // 重新进来刷新一次
  },
  deactivated() {
    // 保存当前的位置
    this.saveY = this.$refs.scroll.scroll.y;
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
      // 保存当前点击的index的值
      this.tabIndex = index;

      // 给两个tab栏的currentIndex相同的值，确保状态一致
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;

      // 点击标签切换后，使页面滚动到指定值
      this.$refs.scroll.scrollTo(0, -this.tabScroll[index], this.scrollTime);

      //
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 滚动相关
    contentScroll(position) {
      // backTop显示隐藏
      this.isShowBackTop = -position.y > 1000;

      //决定tabControl是否吸顶
      this.isTabFixed = -position.y >= this.tabOffsetTop - 70;

      // 根据tabIndex保存当前滚动的位置

      // tab栏吸顶后再保存数据
      if (this.isTabFixed) {
        this.tabScroll[this.tabIndex] = -position.y;
        // 吸顶后切换滚动时间为0
        this.scrollTime = 0;
      } else {
        // 给点击的tab标签滚动的高度一个默认值
        for (let i = 0; i < this.tabScroll.length; i++) {
          this.tabScroll[i] = this.tabOffsetTop - 70;
          // 未吸顶切换滚动时间为500
          this.scrollTime = 500;
        }
      }
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
    // 点击右上角DSW相关
    dswClick() {
      // 点击弹出隐藏框
      this.isDsw = true;
      // 3s后消失
      setTimeout(() => {
        this.isDsw = false;
      }, 3000);
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
  top: -1px;
}
.dswNiubi {
  position: absolute;
  width: 100%;
  height: 44px;
  background: black;
  z-index: 999;
  top: -44px;
  color: #b34ffd;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 44px;
  transition: 0.5s;
}
.dswNiubiShow {
  top: 0;
}
</style>