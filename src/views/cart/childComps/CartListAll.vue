<template>
  <div class="cartListAll">
    <!-- 全选按钮 -->
    <div class="cart_img" @click="imgclick">
      <img :src="imgsrc" alt />
      <span>全选</span>
    </div>
    <!-- 合计结算 -->
    <div class="cart_all">
      <!-- 合计 -->
      <div class="cart_total">
        <span>合计:</span>
        <em>￥</em>
        <i>{{price}}</i>
      </div>
      <!-- 结算 -->
      <div class="cart_stment">
        <span>结算</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 定义按钮是否选中
      isImg: false,
      // 结算金额
      price: 0
    };
  },
  methods: {
    imgclick() {
      this.isImg = !this.isImg;
      // 发送事件到cart.vue
      this.$emit("allClick");
      if (!this.isImg) {
        this.price = 0;
      }
    }
  },
  computed: {
    imgsrc() {
      const src = this.isImg ? "yes" : "no";
      return require("../../../assets/img/cart/" + src + ".png");
    }
  },
  deactivated() {
    this.isImg = false;
    this.price = 0;
  }
};
</script>

<style scoped>
.cartListAll {
  position: absolute;
  width: 100%;
  height: 45px;
  background: #fefefe;
  bottom: 45px;
  z-index: 1000;
}
.cart_img {
  position: relative;
  padding: 5px;
  line-height: 40px;
  left: 28px;
  color: #666;
}
.cart_img img {
  position: absolute;
  width: 20px;
  top: 14px;
  left: -18px;
}
.cart_all {
  position: absolute;
  width: 55%;
  height: 100%;
  right: 10px;
  top: 0;
}
.cart_total {
  position: relative;
  width: 50%;
  height: 45px;
  left: 10%;
  line-height: 45px;
}
.cart_total em {
  font-style: normal;
  font-size: 14px;
}
.cart_total i {
  position: relative;
  font-style: normal;
  color: #ff5c0a;
  font-weight: bold;
  top: 1px;
}
.cart_stment {
  position: absolute;
  right: 0;
  top: 5px;
  width: 41%;
  height: 35px;
  background: #5ecef4;
  border-radius: 20px;
  line-height: 35px;
  text-align: center;
  color: #fff;
}
</style>