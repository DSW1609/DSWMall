<template>
  <div id="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <img :src="item.image" alt />
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
#recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 70px;
  height: 70px;
}
</style>