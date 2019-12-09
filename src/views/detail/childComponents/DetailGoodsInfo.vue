<template>
  <div class="GoodsiInfo">
    <!-- 详情标题 -->
    <div class="goods_title">{{detailInfo.desc}}</div>
    <!-- 详情图片 -->
    <div v-if="(Object.keys(detailInfo).length !== 0)" class="goods_im">
      <img
        v-for="(img,index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="'http:'+img"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped>
.GoodsiInfo {
  position: relative;
  width: 98vw;
  margin: 0 auto;
  border-top: 3px solid#f8f8f8;
}
.goods_title {
  position: relative;
  margin-top: 10px;
  font-size: 14px;
  background: #f3f3f3;
  border-radius: 5px;
  padding: 5px;
}
.goods_im {
  position: relative;
}
.goods_im img {
  width: 100%;
}
</style>