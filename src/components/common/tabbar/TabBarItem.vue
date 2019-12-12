<template>
  <li @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style scoped>
#tab-bar li {
  position: relative;
  float: left;
  width: 25%;
  height: 100%;
  text-align: center;
  color: #fdebed;
  list-style: none;
  font-size: 14px;
}
#tab-bar li img {
  width: 24px;
  height: 24px;
}
#tab-bar li span {
  position: relative;
}
.active {
  color: #f2cd86;
  font-size: 0px;
}
</style>

