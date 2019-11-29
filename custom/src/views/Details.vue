<template>
  <div>
    <van-nav-bar
      title="订单详情"
      left-text="返回"
      left-arrow
      @click-left="$router.back(-1)"
      class="header"
    />
    <div>



      <van-tabs>
        <van-tab title="订单详情" is-link to="/details"></van-tab>
        <van-tab title="订单状态" is-link to="/details/progress"></van-tab>
      </van-tabs>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClick(name, title) {
      this.$toast(title);
    }
  }
};
</script>

<style lang="less" >
@import "../assets/css/base.less";
.van-tabs__line {
  background-color: #63adde;
}
</style>>

