<template>
  <div class="cart">
    <!-- 顶部导航栏 -->
    <NavBar class="navbar">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <!-- 导航栏下方与导航栏同步部分底色 -->
    <div class="navbar_btm"></div>
    <!-- 购物车为空 -->
    <div class="kong" v-if="cartLength=='0'">
      <img src="~assets/img/cart/cart.svg" alt />
      <span>
        购物车还是空的呢
        <br />快去浏览商品吧！
      </span>
    </div>
    <!-- 商品列表 -->
    <CartList />
    <!-- 底部汇总 -->
    <CartListAll />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartListAll from "./childComps/CartListAll";
export default {
  components: {
    NavBar,
    CartList,
    CartListAll
  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length;
    }
  }
};
</script>

<style scoped>
.navbar {
  position: relative;
  background: var(--color-tint);
  color: #fff;
  z-index: 1000;
}
.navbar_btm {
  position: absolute;
  width: 100%;
  height: 10vh;
  top: 44px;
  background: var(--color-tint);
}
.cart {
  height: 100vh;
  background: #f1f1f1;
}
.kong {
  position: absolute;
  width: 70vw;
  padding-top: 70vw;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 20vh;
  text-align: center;
  color: #ff8198;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 1px;
}
.kong img {
  position: absolute;
  width: 70vw;
  top: 0;
  left: 0;
}
</style>