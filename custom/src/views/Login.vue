<template>
  <div class="app-login">
    <div class="nav">
        <p>登录</p>
    </div>
    <p class="wel">Welcome</p>
    <form class="login-form">
      <div class="form-group">
        <input class="login" type="text" placeholder="请输入手机号" v-model="driverTel">
      </div>
      <div class="form-group">
        <input class="yzput" type="password" placeholder="获取验证码" v-model="driverPassword">
        <button @click="getcode"  class="yzbtn" type="button">获取验证码</button>
      </div>
      <div>{{content}}</div>
      <div class="form-group">
        <input class="logins" @click="login" type="button" value="登录">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      driverTel: "",
      driverPassword: "",
      content: ""
    }
  },
  methods: {
    getcode() {
      if(this.driverTel ===''){
        alert('请输入手机号码')
      }else{
      console.log("登录")
      console.log("111",this.driverTel);
      this.axios.post("/user/getPhoneCode", {
        tel: this.driverTel,
      })
      .then((res) => {
        console.log("111111",res.data)
        if(res.data.state == "200") {
          var token = res.data.token;
          sessionStorage.setItem("token", token)

         /*  // 获取参数（未登录时想访问的路由）
          var url = this.$route.query.redirect;
          console.log(url) */

         /*  url = url ? url : "/homea"
          // 切换路由
          this.$router.replace(url) */
        } else {
          console.log("登陆失败")
        }
      })
      .catch(err=> {
        console.log(err)
      })
     }
    },
 login() {
      if(this.driverPassword ===''){
        alert('验证码不能为空')
      }else{
      console.log("登录")
      console.log("111",this.driverTel);
      this.axios.post("/user/verifyCode", {
        code:this.driverPassword,
         tel: this.driverTel

      })
      .then((res) => {
        console.log("111111",res.data)
        if(res.data.state == "200") {
          var token = res.data.token;
          sessionStorage.setItem("token", token)
          console.log("登陆chengg");

          // 获取参数（未登录时想访问的路由）
          var url = this.$route.query.redirect;
          console.log(url)

          url = url ? url : "/home"
          // 切换路由
          this.$router.replace(url) 
        } else {
          console.log("登陆失败")
        }
      })
      .catch(err=> {
        console.log(err)
      })
     }
    }


  }
}
</script>
<style lang="less" scoped>

  *{
    margin: 0;
    padding: 0;
    text-align: center
  }
  .app-login{
    background-image: linear-gradient(to bottom right,rgb(89, 240, 240) , rgb(85, 152, 228));
    height: 627px;
  }
  .wel{
    font-size: 50px;
    margin-top: 130px;
    color: white
  }
  .huoqu{
    position: absolute;
    right: 60px;
    top: 10px;
    width: 75px;
    height:52px;
    font-size: 18px;
    border-radius: 9px
  }
  input::-webkit-input-placeholder{
            color:white;
        }
  .login-form {
    margin-top: 70px;

    .form-group {
      margin-bottom: 20px;
      position: relative; 
    }
    
  }

   .login{
        padding: 5px 3px;
        width: 250px;
        height: 30px;
        border-radius:15px;
        box-shadow: none;
          outline: none;
        border: 2px solid white;
      
        color: white;
        text-indent: 30px;
        font-size: 14px;
        text-align: left;
        
        background: none;
      } 
      .logins{
       margin-top:-10px;
        width: 250px;
        height: 40px;
        border-radius:15px;
        box-shadow: none;
         outline: none;
        border: 2px solid white;
    background-color:rgb(85, 152, 228);
        color: white;
        text-indent: 30px;
        font-size: 14px;
        text-align: center;
        
 

      }





  .nav{
      width: 100%;
      height: 40px;
      background: #63ADDE;
      font-size: 18px;
      color: white;
      line-height: 40px;
      text-align: center;

      p{
        transform: translateX(-6px);
      }
  }
  .yzput{
  width:130px;
  height:35px;
  border-radius:10px;
  box-shadow: none;
  outline: none;
    text-align: left;
     box-shadow: none;
          outline: none;
            background: none;
        border: 2px solid white;
          font-size: 14px;
             color: white;
        text-indent: 20px;
}
  .yzbtn{
    border-radius:15px;
    box-shadow: none;
    outline: none;
    width:100px;
    height:35px;
  background-color:rgb(85, 152, 228);
    border:0;
    color:white;
    outline: none;
  font-size: 14px;
   text-align: center;
   margin-left:10px;
    border: 2px solid white;
  }
</style>