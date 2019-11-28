<template>
  <div class="home">
    <div>    
      <router-view></router-view>
    </div>
<van-tabbar route class="bottomTab">
  <van-tabbar-item
    replace
    to="/home"
    icon="home-o"
    class="tab"
  >
    首页
  </van-tabbar-item>
  <span></span>
  <van-tabbar-item
    replace
    to="/home/mydata"
    icon="friends-o"
    class="tab"
  >
    我的资料
  </van-tabbar-item>
</van-tabbar>




  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
<style lang="less" >
.bottomTab{ 
 justify-content:space-around;
 align-items:center;
 span{
   border-left: 1px solid rgb(255, 255, 255);
 }

  .tab{
    color: rgb(255, 255, 255);
    height: 50px;
    background-color: #63ADDE;
    line-height: 20px;
  }
 
}


</style>>


