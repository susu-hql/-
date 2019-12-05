<template>
  <div>
    <van-nav-bar
      title="我的保单"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.push('/home/mydata')"
      class="header"
    />
    <div class="none" v-show="false">
      <h5>未检测到您的车主卡信息</h5>
    </div>
      <div class="hong"></div>
    <div class="cheka" v-for="(item, index) in list" :key="index">
      <van-card @click="join(item.orderId)">
        <div slot="tags">
          <h3>保单</h3>
          <h4>车牌号码：{{item.carNum}}</h4>
          <p>车主姓名：{{item.name}}</p>
          <p>车主卡号：{{item.carCardNum}}</p>
        </div>
      </van-card>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:''
    }
  },
  methods: {
    join(id) {
      this.$router.push({
        path:'/policy',
        query:{id}
      })
    },
    getshu(){
        this.axios.post('/user/getMyInsuranceCards')
        .then(res =>{
          console.log(res.data)
          this.list = res.data.data
        })
        .catch(err =>{
          console.log(err)
        })
    }
  },
  created(){
    this.getshu()
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.hong{
  margin-top: 50px;
}
.cheka {
  margin-top: 10px;
}
.none {
  margin-top: 50px;
}
p {
  display: block;
  padding-left: 0;
  text-indent: 2em;
}
.van-card {
  text-align: left;
  position: relative;
  h3 {
    margin: 0;
    text-align: center;
  }
  h4 {
    margin: 0;
    color: #63adde;
    text-indent: 1.5em;
    font-size: 14px;
    display: inline-block;
  }
  span {
    margin-left: 10px;
    color: rgb(255, 11, 11);
  }
  i {
    display: inline-block;
    text-align: center;
    line-height: 22px;
    background-color: rgba(68, 60, 60, 0.272);
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    font-style: inherit;
    font-size: 18px;
  }
}
.van-tabbar {
  height: 40px;
  .van-tabbar-item {
    font-size: 16px;
    background-color: #63adde;
    color: rgb(255, 255, 255);

    .tijiao {
      display: inline-block;
      text-align: right;
    }
  }
}
</style>>
