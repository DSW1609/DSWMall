<template>
  <div class="goods-list-item">
    <img :src="goodsItem.show.img" alt @load="imageLoad" />
    <div class="goods-list-text">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">
        <span class="collect-xin">❤</span>
        {{goodsItem.cfav}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    }
  }
};
</script>

<style>
.goods-list-item {
  position: relative;
  display: inline-block;
  width: 47%;
  margin-left: 2%;
  text-align: center;
  vertical-align: top;
  margin-top: 2%;
}
.goods-list-item img {
  width: 100%;
}
.goods-list-text {
  position: relative;
  margin: 0 auto;
}
.goods-list-text p {
  display: block;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #666;
  padding-bottom: 6px;
}
.price {
  color: tomato;
  padding-right: 15px;
}
.collect {
  color: lightskyblue;
}
.collect-xin {
  color: red;
}
</style>