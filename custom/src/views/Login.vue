<template>
<div class="login">
<form class="app-login">
        <div class="form-group">
            <input type="text"  >
        </div>
        <div class="form-group">
            <input type="password"  >
            <button type="button">获取验证码</button>
        </div>
        <div class="form-group">
            <input class="btnlogin" type="button" value="登录" @click="getLogin">
        </div>


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