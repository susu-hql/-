<template>

    <div class="directInput">
        <div class="nav">
               <van-nav-bar
      title="服务详情说明"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.push('/home')"
      class="header"
    />
        </div>
        <div class="main">
          <Inindex></Inindex>  
        </div>
    <div class="footer">
        <div class="app-bottom">
 <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" type="primary" to="insuerInput">立即预约</van-button>
        </div>
    </div>
    </div>
    
</template>

<script>
import Inindex from '../components/Inindex.vue'
export default {
    name:'insureHome',
    components: {
     Inindex
  },
 

    methords:{
     
    }


}
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
@import "../assets/css/allstyle.less";
.footer{
    background-color:white;
}

</style>