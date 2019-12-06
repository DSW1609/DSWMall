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
  position: absolute;
  width: 100%;
  height: 49px;
  bottom: 0px;
  overflow: hidden;
  background: black;
}
</style>
