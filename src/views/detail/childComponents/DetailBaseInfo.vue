<template>
  <div v-if="(Object.keys(goods).length !== 0)" class="base_info">
    <!-- 价格部分 -->
    <div class="price">
      <!-- 新价格 -->
      <div class="new_price">
        <span>{{goods.newPrice}}</span>
      </div>
      <!-- 旧价格 -->
      <div class="old_price">
        <span>{{goods.oldPrice}}</span>
      </div>
      <!-- 促销活动 -->
      <div class="sell" v-if="(goods.discount)!=''">
        <span>{{ goods.discount}}</span>
      </div>
    </div>
    <!-- 标题 -->
    <div class="title">
      <span>{{ goods.title }}</span>
    </div>
    <!-- 其他 -->
    <div class="other">
      <!-- 销量 -->
      <div class="other_item">
        <span>{{goods.columns[0]}}</span>
      </div>
      <div class="other_item other_item_c">
        <span>{{goods.columns[1]}}</span>
      </div>
      <div class="other_item other_item_r">
        <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
    </div>
    <!-- 售后相关 -->
    <div class="after other">
      <!-- 退货 -->
      <div class="other_item">
        <img :src="goods.services[0].icon" alt />
        <span>{{goods.services[0].name}}</span>
      </div>
      <!-- 退货 -->
      <div class="other_item other_item_c">
        <img :src="goods.services[1].icon" alt />
        <span>{{goods.services[1].name}}</span>
      </div>
      <!-- 退货 -->
      <div class="other_item other_item_r">
        <img :src="goods.services[2].icon" alt />
        <span>{{goods.services[2].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped>
.title {
  position: relative;
  width: 98vw;
  margin: 0 auto;
  margin-top: 5px;
  color: #333;
}
.price {
  position: relative;
  height: 8vh;
  background: black;
}
.new_price {
  display: inline-block;
  font-size: 24px;
  color: #f2cd86;
  margin-top: 2vh;
  margin-left: 1vw;
  letter-spacing: -1px;
}
.old_price {
  display: inline-block;
  font-size: 15px;
  color: #999;
  margin-left: 5px;
  text-decoration: line-through;
}
.sell {
  position: relative;
  display: inline-block;
  font-size: 12px;
  margin-left: 8px;
  background: #f2cd86;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  padding: 4px;
  top: -10px;
}
.other {
  position: relative;
  display: flex;
  width: 98vw;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 12px;
  color: #999;
  padding-bottom: 1vh;
  border-bottom: 1px solid #f1f1f1;
}
.other_item {
  flex: 1;
}
.other_item_c {
  text-align: center;
}
.other_item_r {
  text-align: right;
}
.other_item img {
  position: relative;
  width: 11px;
  top: 1px;
  margin-right: 2px;
}
.after {
  position: relative;
  border: none;
  margin-top: 2vh;
  color: #f2cd86;
}
</style>