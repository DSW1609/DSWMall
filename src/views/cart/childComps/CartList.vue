<template>
  <div class="cart-list">
    <Scroll class="content" ref="scroll">
      <!-- 心心 -->
      <XinXin />
      <CartListItem ref="listItem" v-for="(item,index) in cartList" :key="index" :product="item" />
    </Scroll>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
import XinXin from "components/content/xinxin/XinXin";
import Scroll from "components/common/scroll/Scroll";
export default {
  components: {
    CartListItem,
    XinXin,
    Scroll
  },
  data() {
    return {
      isall: false
    };
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    }
    // itemClick() {
    //   for (const item of this.$refs.listItem) {
    //     if (!item.product.checked) {
    //       this.isall = false;
    //     }
    //     this.isall = true;
    //   }
    // }
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.content {
  position: absolute;
  overflow: hidden;
  top: -26px;
  left: 0;
  right: 0;
  bottom: 45px;
}
.ss {
  width: 100%;
  height: 1500px;
  background: red;
}
</style>