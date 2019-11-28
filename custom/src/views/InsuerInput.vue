<template>
    <div class="app">
        <div class="app-nav">
           <li class="lis-l">  
          <!--  <router-link to="/home/list">通讯录</router-link> -->
         </li>
         <span class=".span">保险信息</span>
            
             <li class="lis-r">  
          <!--  <router-link to="/home/list">通讯录</router-link> -->
         </li>
        </div>
        <div class="app-main">
        <ul>
        <li>
            <span>关联车主卡：</span>
            <span></span>
        </li>
         <li>
            <span>车牌号码：</span>
            <span></span>
         </li>
         <li>
           <span>车架号：</span>
            <span></span>
         </li>
        <li>
        <span>发动机号：</span>
            <span></span>

        </li>
        <li>
            <span>除登日期：</span>
            <span></span>
        </li>
        <li>
            <span>品牌型号：</span>
            <span></span>
        </li>
        <li>
            <span>车主手机号：</span>
            <span></span>
        </li>
        <li>
            <span>身份证号：</span>
            <span></span>
        </li>
        </ul>




        </div>
    </div>
</template>
<script>
export default {
    name:'insuerInput',
    methords:{}
    
}
</script>
<style scoped>
.app-nav{
    width:100%;
    height:60px;
    background-color:black;
   
    }
    .span{
  color:white;
  font-size: 20px;
    line-height: 40px;
    }
.app-main{
    width:100%;
    height:1150px;
}
.lis-l{
    width:100px;
    height:100px;
    border:1px solid white;
    float:left;
     list-style: none;
}
.lis-r{
    width:100px;
    height:100px;
    border:1px solid white;
    float:right;
    list-style: none;

}
ul{
    width:100%;
    height:700px;
    border:1px solid red;
}
li{
    list-style: none;
    height: 80px;
    width:600px;
    margin-left:30px;
    border-bottom:1px solid rgb(129, 125, 125);
}
span{
    font-size: 14px;
    float:left;
    line-height: 24px;

}
</style>