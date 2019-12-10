<template>
  <div class="params" v-if="(Object.keys(itemParams).length !== 0)">
    <!-- 尺码表 -->
    <!-- 单行 -->
    <div
      class="rule_one"
      v-for="(one,index) in itemParams.rule.tables[0]"
      :key="index"
      :class="{rule_d_bkg:index%2==0}"
    >
      <!-- 单列 -->
      <div class="rule_d" v-for="(item,indey) in one" :key="indey">{{item}}</div>
    </div>
    <!-- 详细参数 -->
    <div class="more">
      <span>详细参数</span>
    </div>
    <div :class="{info:isX}">
      <!-- 点击展开按钮 -->
      <div class="info_bt" v-if="isX" @click="info_click">
        <img src="~assets/img/detail/to.png" alt />
      </div>
      <div class="rule_one info_one" v-for="(info,index) in itemParams.info.set" :key="index+'a'">
        <!-- 左侧key -->
        <div class="info_one_key">{{info.key}}</div>
        <!-- 右侧value -->
        <div class="info_one_value">{{info.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isX: true
    };
  },
  props: {
    itemParams: {
      type: Object,
      default: {}
    }
  },
  methods: {
    info_click() {
      this.isX = !this.isX;
    }
  }
};
</script>

<style scoped>
.params {
  position: relative;
  width: 98vw;
  margin: 0 auto;
  border-top: 3px solid #f8f8f8;
  padding-bottom: 20px;
}
.rule_one {
  position: relative;
  display: flex;
  text-align: center;
  width: 100%;
  height: 35px;
  line-height: 35px;
  top: 10px;
}
.rule_d {
  flex: 1;
}
.rule_d_bkg {
  background: #f8f8f880;
}
.info_one {
  position: relative;
  font-size: 15px;
  top: 10px;
  border-bottom: 1px solid #f8f8f8;
}
.info_one_key {
  flex: 1;
  color: #0d87ea;
}
.info_one_value {
  position: relative;
  flex: 4;
  text-align: left;
  margin-left: 7vw;
  color: #ff5680;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.more {
  position: relative;
  background: #f8f8f8;
  height: 30px;
  line-height: 30px;
  margin-top: 25px;
  font-weight: bold;
  border-left: 3px solid #ff5778;
  text-indent: 10px;
}
.info {
  height: 180px;
  overflow: hidden;
}
.info_bt {
  position: absolute;
  width: 20%;
  text-align: center;
  background: #f1f1f1;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: 160px;
  z-index: 1;
  opacity: 0.8;
  border-radius: 20px;
}
.info_bt img {
  width: 20px;
}
</style>