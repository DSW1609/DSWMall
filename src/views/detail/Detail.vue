<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :images="images" />
    <detail-base-info :goods="goods" />
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";

import { getDetail, Goods } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  data() {
    return {
      iid: null,
      images: [],
      goods: {}
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
    });
  }
};
</script>

<style>
</style>