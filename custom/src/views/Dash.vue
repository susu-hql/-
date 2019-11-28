<template>
  <div>
    <van-nav-bar title="首页"    class="header" />
    <div class="banner">
      <van-swipe @change="onChange" :autoplay="3000" indicator-color="blank">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="require('../assets/imgs'+image.address)" alt="">
          <!-- <img :src="[require(toString(image.address))]" alt="123" /> -->
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="yewu">
      <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</van-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "dash",
  data() {
    return {
      images: [
        {address:"/develop1.png"},
        {address:"/develop2.png"},
        {address:"/develop3.png"},
        {address:"/develop4.png"},  
      ]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },  
  }
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
.banner {
  margin-top: 30px;
}
</style>>

