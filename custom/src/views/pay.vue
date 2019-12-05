<template>
    <div class="pay">
        <div class="nav"></div>
          <van-nav-bar
      title="支付"
      left-text="首页"
      left-arrow
      flxed
      @click-left="$router.push('/home')"
      class="header"
    />
    <div class="main">
        <div class="pay-main">
            <p class="fontSize">支付信息</p>
            <p class="fontSize">金额：299</p>
            <p class="pays">支付宝</p>
        </div>
     


    </div>
     
    <div class="footer"></div>
    </div>
   
</template>
<style lang="less" scoped>
@import "../assets/css/base.less";
.pay-main{
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:260px;
    height:230px;
    margin:auto;
    box-shadow: 0 0 3px rgb(173, 163, 163);

}
.fontSize{
  font-size:20px;
}
.pays{
     position: absolute;
    width:200px;
    height:40px;
     top:50px;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    background-color:#63ADDE;
    color:white;

}

</style>