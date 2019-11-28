
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
    
       methods: {
    getLogin() {
      // console.log("访问查询参数：", this.$route.query.id);
      // this.$route：保存了当前路由信息
      console.log("登录")



     /*  this.axios.post("/users/login", {
        username: this.username,
        userpass: this.userpass
      })
      .then((res) => {
        console.log(res.data)
        if(res.data.state == "200") {
          // var token = "njaksxbxkjasbkjcxasbjk" // 模拟后台返回的token
          var token = res.data.token;
          sessionStorage.setItem("token", token)

          // 获取参数（未登录时想访问的路由）
          var url = this.$route.query.redirect;
          console.log(url)

          url = url ? url : "/"
          // 切换路由
          this.$router.replace(url)
        } else {
          console.log("登陆失败")
        }
      })
      .catch(err=> {
        console.log(err)
      }) */
     
    }
        
    }
}
</script>
<style scoped>
 /*  @import '../assets/style/base.less'; */
.app-login{

    width:600px;
    height:400px;
   position: absolute;
   top:0;
   left:0;
   bottom:0;
   right:0;
   margin:auto;
    box-shadow:0 0 3px rgb(77, 75, 75);  
    padding-top:40px;
    
}
.form-group{
    width:100%;
    height:100px;
}
input{
  float:left;
  width:450px;
  height:50px;
  border-radius:2px;
  margin-left:40px;

}
input[type='password']{
  width:260px;
  height:50px;
}
button{
   width:150px;
  height:50px;
  font-size: 10px;
  margin-left:-60px;
  background-color: rgb(80, 149, 149);
  color:white;
}
.btnlogin{
   width:450px;
   height:60px;
   background-color: rgb(80, 149, 149);
   color:white;
    font-size: 16px;
}

</style>