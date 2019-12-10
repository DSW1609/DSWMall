<template>
  <div v-if="Object.keys(commentInfo).length !==0" class="commentInfo">
    <!-- 用户评价标题 -->
    <div class="user_tit">
      <span>用户评价</span>
      <span class="all">全部评价(888)</span>
    </div>
    <!-- 展示评价内容 -->
    <div class="user_assess">
      <!-- 上方用户信息 -->
      <div class="user_info">
        <!-- 左侧头像 -->
        <img :src="'http:'+commentInfo.user.avatar" alt />
        <!-- 右侧用户名 -->
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <!-- 评价内容  -->
      <div class="user_content">
        <!-- 文字内容 -->
        <div class="user_conte">
          <span>{{commentInfo.content}}</span>
        </div>
        <!-- 时间款式 -->
        <div class="user_type">
          <!-- 将时间戳转换时间格式化字符串 -->
          <span>{{commentInfo.created | showDate}}</span>
          <span class="user_style">{{commentInfo.style}}</span>
        </div>
        <!-- 评论图片 -->
        <div class="user_img">
          <img :src="'http:'+commentInfo.images" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/untils";
export default {
  props: {
    commentInfo: {
      type: Object,
      default: {}
    }
  },
  filters: {
    showDate(value) {
      // 将时间戳转成Date对象
      const date = new Date(value * 1000);
      // 将date进行格式化
      return formatDate(date, "yyyy-MM-dd");
    }
  }
};
</script>

<style scoped>
.commentInfo {
  position: relative;
  width: 98vw;
  margin: 0 auto;
}
.user_tit {
  position: relative;
  background: #f8f8f8;
  height: 30px;
  line-height: 30px;
  font-weight: bold;
  border-left: 3px solid #ff5778;
  text-indent: 10px;
}
.all {
  position: relative;
  float: right;
  right: 5px;
  font-weight: normal;
  background: #f2cd86;
  text-indent: 0;
  font-size: 12px;
  padding: 0px 5px;
  border-radius: 5px;
}
.user_assess {
  position: relative;
  width: 95vw;
  margin: 0 auto;
  padding-bottom: 20px;
}
.user_info {
  position: relative;
  height: 30px;
  margin-top: 10px;
  line-height: 30px;
}
.user_info img {
  position: absolute;
  width: 30px;
  border-radius: 15px;
  border: 1px solid#ff7698;
}
.user_info span {
  position: relative;
  left: 40px;
  color: #ff7698;
}
.user_content {
  position: relative;
  width: 93vw;
  margin: 0 auto;
  margin-top: 8px;
  color: #0d88eb;
}
.user_type {
  position: relative;
  margin-top: 10px;
}
.user_style {
  position: relative;
  margin-left: 5vw;
}
.user_img {
  position: relative;
  margin-top: 10px;
}
.user_img img {
  position: relative;
  float: left;
  width: 30%;
}
</style>