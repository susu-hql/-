<template>
  <div>
    <van-nav-bar
      title="订单详情"
      left-text="返回"
      left-arrow
      fixed
      
      @click-left="$router.push('/carlist')"
      class="header"
    />
    <div class="dingdan" z-index="2">
      <van-tabs>
        <van-tab title="订单详情" is-link :to="'/details?id='+id+'&type='+type" class="fenlan"></van-tab>
        <van-tab title="订单状态" is-link :to="'/details/progress?id='+id+'&type='+type"></van-tab>
      </van-tabs>
    </div>
    <div>
      <router-view ></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      type: ""
    };
  },
  methods: {
    onClick(name, title) {
      this.$toast(title);
    }
  },
  created() {
    var a = this.$route.query.id;
    this.id = a;
    var b = this.$route.query.type;
    this.type = b;
    console.log(this.id, this.type);
  }
};
</script>

<style lang="less" >
@import "../assets/css/base.less";
.van-tabs__line {
  background-color: #63adde;
}
.dingdan {
  margin-top: 50px;
}
.van-tabs {
  .van-ellipsis {
    display: inline-block;
    color: #000;
    text-align: center;
    font-size: 18px;
  }
}
.fenlan {
  border-right: 1px solid rgb(196, 29, 29);
}
</style>>

