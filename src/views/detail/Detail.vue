<template>
  <div id="detail">
    <!-- 顶部导航栏 -->
    <DetailNavBar />
    <scroll class="content">
      <!-- 心心 -->
      <XinXin />
      <!-- 顶部轮播图 -->
      <DetailSwiper :images="images" />
      <!-- 商品基本数据展示 -->
      <DetailBaseInfo :goods="goods" />
      <!-- 商家信息展示 -->
      <DetailShopInfo :shop="shop" />
      <!-- 详情页数据展示 -->
      <DetailGoodsInfo :detailInfo="detailInfo" />
      <!-- 详情页参数展示 -->
      <DetailParamsInfo :itemParams="itemParams" />
      <!-- 详情页评论展示 -->
      <DetailCommentInfo :commentInfo="commentInfo" />
    </scroll>
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

import XinXin from "components/content/xinxin/XinXin";

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shop } from "network/detail";

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
    XinXin,
    Scroll
  },
  data() {
    return {
      iid: null,
      images: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {}
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
  bottom: 0px;
}
</style>