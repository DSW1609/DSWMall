<template>
  <div class="shop">
    <!-- 商家名 -->
    <div class="shop_name">
      <!-- 左侧商家头像 -->
      <div class="shop_name_im">
        <img :src="shop.logo" alt />
      </div>
      <!-- 右侧商家名字 -->
      <div class="shop_name_te">
        <span>{{shop.name}}</span>
      </div>
      <!-- 进店逛逛 -->
      <div class="shop_go">
        <span>进店逛逛</span>
      </div>
    </div>
    <!-- 其他信息 -->
    <div class="shop_other">
      <!-- 左侧销量宝贝信息 -->
      <div class="shop_item shop_l">
        <!-- 销量信息 -->
        <div class="shop_l_item">
          <!-- 数字信息 -->
          <div class="l_item_xx">
            <span>{{shop.sells | sellCountFilter}}</span>
          </div>
          <!-- 文字信息 -->
          <div class="l_item_xx">
            <span>总销量</span>
          </div>
        </div>
        <!-- 宝贝信息 -->
        <div class="shop_l_item">
          <!-- 数字信息 -->
          <div class="l_item_xx">
            <span>{{shop.goodsCount}}</span>
          </div>
          <!-- 文字信息 -->
          <div class="l_item_xx">
            <span>全部宝贝</span>
          </div>
        </div>
      </div>
      <!-- 右侧评分信息 -->
      <div class="shop_item shop_r">
        <!-- 单行评分 -->
        <div class="shop_r_item" v-for="(item,index) in shop.score" :key="index">
          <!-- 左侧文字 -->
          <div class="r_item_lte">
            <span>{{item.name}}</span>
          </div>
          <!-- 中间评分 -->
          <div class="r_item_cnum" :class="{cnum_better:item.isBetter}">
            <span>{{item.score}}</span>
          </div>
          <!-- 右侧文字评分 -->
          <div class="r_item_rte" :class="{better:item.isBetter}">
            <span>{{item.isBetter ? '高' :'低'}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default: {}
    }
  },
  filters: {
    sellCountFilter: function(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style scoped>
.shop {
  position: relative;
  width: 96vw;
  margin: 0 auto;
  top: 10px;
  font-size: 14px;
  border-top: 0.6vh solid #f8f8f8;
}
.shop_name {
  position: relative;
  height: 8vh;
  top: 15px;
}
.shop_name_im {
  position: relative;
  float: left;
}
.shop_name_im img {
  height: 6vh;
  border: 2px solid #f2cd86;
  border-radius: 3vh;
}
.shop_name_te {
  position: relative;
  line-height: 6vh;
  left: 2vw;
  font-weight: bold;
}
.shop_other {
  position: relative;
  margin-top: 1vh;
}
.shop_item {
  display: inline-block;
}
.shop_l {
  position: relative;
  width: 50%;
  top: -25px;
  height: 60px;
  border-right: 2px solid #f8f8f8;
}
.shop_r {
  position: relative;
  width: 40%;
  height: 100px;
  top: 10px;
}
.shop_l_item {
  position: relative;
  float: left;
  width: 40%;
  height: 70%;
  margin-left: 5%;
  text-align: center;
  line-height: 30px;
  color: #555;
  top: -5px;
}
.l_item_xx {
  width: 100%;
  height: 40%;
  margin-top: 8%;
  font-weight: bold;
}
.shop_r_item {
  width: 100%;
  height: 25%;
  text-align: center;
}
.r_item_lte {
  position: relative;
  float: left;
  width: 55%;
  height: 100%;
  color: #555;
  font-weight: bold;
  left: 3%;
}
.r_item_cnum {
  position: relative;
  float: left;
  width: 20%;
  height: 100%;
  top: 0;
  left: 11%;
  text-align: left;
  color: green;
}
.cnum_better {
  color: red;
}
.r_item_rte {
  position: relative;
  float: left;
  width: 25%;
  height: 100%;
  right: 0;
  top: 0;
  left: 10%;
  text-align: right;
}
.r_item_rte span {
  background: green;
  padding: 3px;
  border-radius: 2px;
  color: #fff;
  font-size: 13px;
}
.better span {
  background: red;
}
.shop_go {
  position: absolute;
  top: 1.2vh;
  right: 5vw;
  background: #f2cd86;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
  color: #555;
  font-size: 14px;
  padding: 3px 8px;
}
</style>