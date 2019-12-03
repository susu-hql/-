<template>
  <div>
    <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="$router.push('/home/mydata')" class="header" />
    <van-cell icon="logistics" title="车辆订单" is-link to="/carlist" />
    <van-cell icon="balance-list-o" title="保险订单" is-link to="/allsafe" />
  </div>
</template>

<script>
export default {
  methods: {

  }
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
.van-cell {
  text-align: left;
  font-size: 18px;
  margin-bottom: 5px;
}
</style>>

