<template>
  <div>
    <van-nav-bar
  title="首页"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  class="header"
/>
    <div class="banner">
      <van-swipe @change="onChange" :autoplay="3000" indicator-color="blank">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" alt="123" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import a from "../../public/imgs/develop1.png";
import b from "../../public/imgs/develop2.png";
import c from "../../public/imgs/develop3.png";
import d from "../../public/imgs/develop4.png";
export default {
  name: "dash",
  data() {
    return {
      images: [a, b, c, d]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    onClickLeft() {
      console.log("4545")
    }
  }
};
</script>
<style lang="less" scoped>
@import '../assets/css/base.less';
.banner{
  margin-top: 20px;
}

</style>>

