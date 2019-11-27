<template>
 <form class="login">
     wwwwwwwwwwwww
        <div class="form-group">
            <input type="text" placeholder="请输入账号" v-model="username">
        </div>
        <div class="form-group">
            <input type="password" placeholder="请输入密码" v-model="userpass">
        </div>
        <div class="form-group">
            <input type="button" value="登录" @click="getLogin">
        </div>
    </form>
</template>
<script>
export default {
    name:'login',
    data(){
        
    },
    methods:{
        
    }
}
</script>
<style scoped>
 /*  @import '../assets/style/base.less'; */
.login{

    width:400px;
    height:200px;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    margin:auto;
    box-shadow:0 0 3px rgb(77, 75, 75);  
    padding-top:40px;
}
</style>