<template>
  <tab-bar class="tab-bar">
    <tab-bar-item path="/home">
      <div slot="item-icon">
        <img src="~assets/img/tabbar/sy.png" alt />
      </div>
      <div slot="item-icon-active">
        <img src="~assets/img/tabbar/sy_ac.png" alt />
      </div>
      <span slot="item-text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <div slot="item-icon">
        <img src="~assets/img/tabbar/fl.png" alt />
      </div>
      <div slot="item-icon-active">
        <img src="~assets/img/tabbar/fl_ac.png" alt />
      </div>
      <span slot="item-text">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <div slot="item-icon">
        <img src="~assets/img/tabbar/shop.png" alt />
      </div>
      <div slot="item-icon-active">
        <img src="~assets/img/tabbar/shop_ac.png" alt />
      </div>
      <span slot="item-text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <div slot="item-icon">
        <img src="~assets/img/tabbar/me.png" alt />
      </div>
      <div slot="item-icon-active">
        <img src="~assets/img/tabbar/me_ac.png" alt />
      </div>
      <span slot="item-text">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
.tab-bar{
  z-index: 999
}
</style>