<template>
    <div class="pay">
        <div class="nav"></div>
          <van-nav-bar
      title="支付"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.push('/mylist')"
      class="header"
    />
    <div class="main">
        <div class="pay-main">
            <p class="fontSizess">支付成功</p>
           
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
    height:30px;
     top:50px;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    background-color:#63ADDE;
    color:white;

}
.fontSizess{
     position: absolute;
    width:200px;
    height:40px;
     top:0px;
    left:0;
    right:0;
    bottom:0;
   margin:auto;
}

</style>