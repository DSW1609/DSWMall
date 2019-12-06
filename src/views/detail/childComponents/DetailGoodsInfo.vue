<template>
  <div class="GoodsiInfo">{{detailInfo.desc}}</div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped>
.GoodsiInfo{
  height: 100vh;
}
</style>