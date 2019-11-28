<template>
<h2>分类</h2>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(".wrapper", {
      probeType: 3,
      pullUpLoad: true
    });
    this.scroll.on("scroll", position => {
      // console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多...");
    });
  },
  methods: {
    btnClick() {
      console.log(111);
    }
  }
};
</script>

<style scoped>
</style>