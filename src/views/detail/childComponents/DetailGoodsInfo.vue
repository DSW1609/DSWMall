<template>
  <span>{{detailInfo.desc}}</span>
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

<style>
</style>