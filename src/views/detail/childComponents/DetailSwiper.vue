<template>
  <swiper v-if="images.length" class="deSwiper">
    <swiper-item class="item" v-for="(item, index) in images" :key="index">
      <img :src="item" alt />
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
    images: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped>
.deSwiper {
  position: absolute;
  height: 35vh;
}
</style>