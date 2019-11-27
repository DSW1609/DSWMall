<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
};
</script>

<style scoped>
#tab-bar {
  position: fixed;
  width: 100%;
  height: 49px;
  background: #ff8198;
  bottom: 0px;
}
</style>
