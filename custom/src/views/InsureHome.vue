<template>
    <div class="app">
          <van-nav-bar
      title="服务详细说明"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.push('/mylist')"
      class="header"
    />
        
        <div class="app-main">
 <Inindex></Inindex>
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
 .app-nav span{
    text-align: center;
    color:white;
    align-items: center;
    display:block;
    font-size: 18px;
    line-height: 60px;
    }
.app-main{
    width:100%;
    height:600px;

}

</style>
