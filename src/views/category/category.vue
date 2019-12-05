<template>
  <div>
    <h2>分类</h2>
    <div class="Tv" :class="{TvActive:isActive}">
      <img src="~assets/img/xinxin/xinxin.png" v-show="isActive" alt="">
    </div>
    <button @click="btnClick">开关</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    btnClick() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped>
.Tv {
  position: relative;
  width: 200px;
  height: 100px;
  background-color: #ccc;
}
.TvActive {
  background-color: blue;
}
</style>