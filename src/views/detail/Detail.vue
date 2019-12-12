<template>
  <div id="detail">
    <!-- 顶部导航栏 -->
    <DetailNavBar @titleClick="titleClick" ref="navbar" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
    >
      <!-- 心心 -->
      <XinXin />
      <!-- 顶部轮播图 -->
      <DetailSwiper :images="images" />
      <!-- 商品基本数据展示 -->
      <DetailBaseInfo :goods="goods" />
      <!-- 商家信息展示 -->
      <DetailShopInfo :shop="shop" />
      <!-- 详情页数据展示 -->
      <DetailGoodsInfo :detailInfo="detailInfo" @detailImgLoad="detailImgLoad" />
      <!-- 详情页参数展示 -->
      <DetailParamsInfo ref="params" :itemParams="itemParams" />
      <!-- 详情页评论展示 -->
      <DetailCommentInfo ref="comment" :commentInfo="commentInfo" />
      <!-- 推荐商品 -->
      <GoodsList ref="recommend" :goods="recommends" />
    </scroll>
    <!-- 底部导航栏 -->
    <DetailBottomBar />
    <BackTop @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
import DetailParamsInfo from "./childComponents/DetailParamsInfo";
import DetailCommentInfo from "./childComponents/DetailCommentInfo";
import DetailBottomBar from "./childComponents/DetailBottomBar";

import XinXin from "components/content/xinxin/XinXin";

import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
import GoodsList from "components/content/goods/GoodsList";

import { getDetail, getRecommend, Goods, Shop } from "network/detail";
import { debounce } from "common/utils";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,
    XinXin,
    Scroll,
    BackTop,
    GoodsList
  },
  data() {
    return {
      iid: null,
      images: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      // backTop的状态
      isShowBackTop: false,
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    };
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.iid;
    // 根据iid请求详情页数据
    getDetail(this.iid).then(res => {
      const data = res.result;
      // 获取顶部的图片轮播数据
      this.images = data.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo);
      // 保存详情页数据
      this.detailInfo = data.detailInfo;
      // 获得参数的信息
      this.itemParams = data.itemParams;
      // 取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    // 请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list;
    });
    // 给getThemeTopY赋值
    this.getThemeTopY = debounce(() => {
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 75);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 75);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 105);
    }, 200);
  },
  methods: {
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 滚动相关
    contentScroll(position) {
      // 保存position.y值
      let positionY = -position.y;
      // backTop显示隐藏
      this.isShowBackTop = positionY > 1000;
      for (let i = 0; i < 4; i++) {
        if (this.currentIndex !== i && positionY >= this.themeTopYs[i]) {
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex;
        }
      }
    },
    // 检测图片加载完成进行刷新
    detailImgLoad() {
      const refresh = debounce(this.$refs.scroll.refresh, 200);
      refresh();
      this.getThemeTopY();
    },
    // 标签点击事件
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 0);
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 1000;
  background: #fff;
  height: 100vh;
}
.content {
  position: absolute;
  overflow: hidden;
  top: -26px;
  left: 0;
  right: 0;
  bottom: 35px;
}
</style>