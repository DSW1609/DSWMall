<template>
  <swiper v-if="banners.length">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <img :src="item.image" alt @load="imageLoad" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default: []
    }
  },
  methods: {
    imageLoad() {
      this.$emit("swiperImageLoad");
    }
  }
};
</script>

<style>
</style>