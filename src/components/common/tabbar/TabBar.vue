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
  bottom: 0px;
  overflow: hidden;
}
#tab-bar::before {
  content: "";
  position: absolute;
  top: -20px;
  left: -25%;
  width: 150%;
  height: 100px;
  background: #ff8198;
  opacity: 0.98;
  filter: blur(10px);
  z-index: -1;
}
</style>
