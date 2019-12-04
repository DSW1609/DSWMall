<template>
  <div class="DetailNavBar">
    <nav-bar>
      <div slot="left" class="go" @click="backClick">
        <img src="~assets/img/detail/go.png" alt />
      </div>
      <div slot="center" class="title">
        <div
          class="titleItem"
          v-for="(item,index) in titles"
          :key="index"
          :class="{active:index===currentIndex}"
          @click="titleClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.DetailNavBar {
  border-bottom: 1px solid #f1f1f1;
}
.title {
  display: flex;
  font-size: 14px;
}
.titleItem {
  flex: 1;
}
.active {
  color: #5ecef4;
}
.go img {
  position: relative;
  width: 20px;
  height: 20px;
  top: 5px;
}
</style>