<template>
  <div>
    <van-nav-bar title="个人资料"  @click-left="$router.back(-1)" class="header" />
    <div class="photo">
      <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" round width="3rem" height="3rem">     
      </van-image>
      <p >{{iphone}}</p>
    </div>
    <div class="">
      <van-cell icon="balance-list-o"  title="全部订单" is-link to="/mylist" />

      <van-cell icon="logistics"  title="我的车主卡" is-link to="index" />
      <van-cell icon="completed"  title="我的保单" is-link to="index" />
      <van-cell icon="comment-circle-o"  title="我的消息" is-link to="index" />

      <van-cell icon="wap-home-o"  title="退出" is-link to="index" />

    </div>
  </div>
</template>
 
<script>
export default {
  
 data(){
   return{
      iphone:13258298208
   }  
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path:"",
        name:"home"
      })
    }
  }
}
</script>

<style  lang="less" scoped>
@import "../assets/css/base.less";
.photo{
  margin-top: 60px;
}
.van-cell{
  text-align: left;
  font-size: 18px;
  margin-bottom: 5px;
}
p{
  text-align: center;
  padding-left: 0;
}
</style>