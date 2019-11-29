
<template>
<div class="login">
<form class="login-form">
     <van-cell-group>
  <van-field
   
    label="用户名"
    placeholder="请输入用户名"
    error
  />
  <van-field
    
    label="手机号"
    placeholder="请输入手机号"
    error-message="手机号格式错误"
  />
</van-cell-group>
 
       
    </form>
</div>
 
</template>
<script>

export default {
    name:'login',
    methods:{
        
    }
}
</script>
<style scoped>
 /*  @import '../assets/style/base.less'; */
.login-form{

    width:400px;
    height:200px;
   position: absolute;
   top:0;
   left:0;
   bottom:0;
   right:0;
   margin:auto;
    box-shadow:0 0 3px rgb(77, 75, 75);  
    padding-top:40px;
    
}
.login{
    width:100%;
    height:1200px;
    justify-content: space-around;
    background-image: url("../../public/imgs/login.jpg");
    background-repeat: no-repeat;
}
</style>