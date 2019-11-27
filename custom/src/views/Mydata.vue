<template>
  <div>
 <van-nav-bar
  title="个人资料"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  class="header"
/>
    
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      console.log("4545")
    }
  }
}
</script>

<style  lang="less" scoped>
@import '../assets/css/base.less';

</style>