<template>
    <div class="app">
        <div class="app-nav">
            <span>服务详细说明</span>
        </div>
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
<style scoped>
.app-nav{
    width:100%;
    height:60px;
    background-color:black;
   
    }
 .app-nav span{
     
    text-align: center;
    color:white;
    align-items: center;
    display:block;
    font-size: 18px;
    line-height: 70px;
    }
.app-main{
    width:100%;
    height:1150px;
}

</style>
