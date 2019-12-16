<template>
  <div class="product">
    <!-- 左侧按钮 -->
    <div class="cart_img">
      <img @click="imgclick" :src="imgsrc" alt />
    </div>
    <!-- 右侧商品内容 -->
    <div class="cart_item">
      <!-- 左侧商品图片 -->
      <div class="cart_item_im">
        <img :src="product.image" alt />
      </div>
      <!-- 右侧商品其他信息 -->
      <div class="cart_item_ot">
        <!-- 商品标题 -->
        <div class="item_tit">
          <span>{{product.title}}</span>
        </div>
        <!-- 商品样式 -->
        <div class="item_type">
          <span>颜色：默认</span>
        </div>
        <!-- 商品价格 -->
        <div class="item_price">
          <i>￥</i>
          <span>{{product.price}}</span>
        </div>
        <!-- 商品数量 -->
        <div class="item_count">
          <button class="item_btn1" @click="btn1Click">-</button>
          <input type="text" :value="product.count" />
          <button class="item_btn2" @click="product.count++">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      // 定义按钮是否选中
      isImg: this.product.checked
    };
  },
  methods: {
    imgclick() {
      this.isImg = !this.isImg;
      this.product.checked = !this.product.checked;
    },
    btn1Click() {
      if (this.product.count > 1) {
        this.product.count--;
      }
    }
  },
  computed: {
    imgsrc() {
      const src = this.isImg ? "yes" : "no";
      return require("../../../assets/img/cart/" + src + ".png");
    }
  }
};
</script>

<style scoped>
.product {
  position: relative;
  width: 98vw;
  margin: 0 auto;
  display: flex;
  background: #fff;
  margin-top: 1vh;
  border-radius: 10px;
  z-index: 999;
  padding-bottom: 5px;
}
.cart_img {
  position: relative;
  top: 50%;
  padding: 5px;
  left: 1%;
}
.cart_img img {
  position: relative;
  top: 40%;
  width: 20px;
  z-index: 999;
}
.cart_item {
  position: relative;
  width: 92%;
}
.cart_item_im {
  position: relative;
  float: left;
  width: 35%;
  padding-top: 30%;
  border: 10px solid #fff;
  border-radius: 20px;
  overflow: hidden;
}
.cart_item_im img {
  position: absolute;
  width: 100%;
  top: 0;
}
.cart_item_ot {
  position: relative;
  float: right;
  width: 65%;
  height: 100%;
}
.item_tit {
  position: absolute;
  width: 95%;
  height: 30%;
  color: #333;
  margin-top: 5%;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.item_type {
  position: absolute;
  margin-top: 27%;
  text-align: center;
  background: #f1f1f1;
  font-size: 14px;
  padding: 3px 10px;
  border-radius: 5px;
}
.item_price i {
  position: relative;
  top: -1px;
  font-size: 10px;
  padding-right: 1px;
  font-style: normal;
}
.item_price {
  position: absolute;
  bottom: 5px;
  color: #ff5c0a;
  font-weight: bold;
}
.item_count {
  position: absolute;
  width: 46%;
  bottom: 5px;
  right: 10px;
  padding: 3px 0px;
  text-align: center;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
}
.item_count input {
  text-align: center;
  width: 30%;
  border: none;
  color: #666;
  outline: none;
}
.item_count button {
  width: 35%;
  background: none;
  font-size: 18px;
  color: #666;
  outline: none;
}
.item_btn1 {
  border: none;
  border-right: 1px solid #ececec;
}
.item_btn2 {
  border: none;
  border-left: 1px solid #ececec;
}
</style>