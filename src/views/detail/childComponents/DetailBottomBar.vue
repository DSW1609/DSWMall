<template>
  <div class="bottom_bar">
    <!-- 左侧 -->
    <div class="bottom_bar_item item_l">
      <!-- call -->
      <div class="item_l_im">
        <!-- 上方图标 -->
        <img src="~assets/img/detail/call.png" alt />
        <br />
        <span>客服</span>
      </div>
      <!-- home -->
      <div class="item_l_im">
        <!-- 上方图标 -->
        <img src="~assets/img/detail/home.png" alt />
        <br />
        <span>店铺</span>
      </div>
      <!-- love -->
      <div class="item_l_im">
        <!-- 上方图标 -->
        <img src="~assets/img/detail/love.png" alt />
        <br />
        <span>收藏</span>
      </div>
    </div>
    <!-- 右侧-->
    <div class="bottom_bar_item item_r">
      <!-- shopcar -->
      <div class="item_r_one item_add" @click="addToCart">
        <span>加入购物车</span>
      </div>
      <!-- buy -->
      <div class="item_r_one item_buy">
        <span>购买</span>
      </div>
    </div>
    <!-- 加入购物车成功弹窗 -->
    <transition mode="out-in" enter-active-class="animated bounceIn">
      <div class="tt" v-show="isS">
        <span>加入购物车成功！</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isS: false
    };
  },
  methods: {
    addToCart() {
      this.$emit("addCart");
      this.isS = true;
      setTimeout(() => {
        this.isS = false;
      }, 1000);
    }
  }
};
</script>

<style scoped>
.bottom_bar {
  position: fixed;
  width: 100%;
  height: 45px;
  background: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 1px solid #eee;
}
.bottom_bar_item {
  float: left;
  height: 100%;
}
.item_l {
  width: 40%;
  display: flex;
}
.item_r {
  width: 60%;
}
.item_r_one {
  float: left;
  text-align: center;
  line-height: 45px;
  width: 50%;
  font-size: 15px;
  color: #fff;
}
.item_buy {
  background: #ff789a;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.item_add {
  background: #f2cd86;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.item_l_im {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.item_l_im img {
  position: relative;
  margin-top: 4px;
  width: 20px;
}
.tt {
  position: absolute;
  width: 46vw;
  height: 36px;
  background: #f2cd86;
  text-align: center;
  line-height: 36px;
  border-radius: 15px;
  top: -50vh;
  color: #fff;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 999;
  opacity: 0.8;
}
</style>