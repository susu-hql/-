<template>
  <div class="app-login">
    <div class="nav">
        <p>登录</p>
    </div>
    <p class="wel">Welcome</p>
    <form class="login-form">
      <div class="form-group">
        <input type="text" placeholder="请输入手机号" v-model="driverTel">
      </div>
      <div class="form-group">
        <input type="password" placeholder="请输入密码" v-model="driverPassword">
      </div>
      <div>{{content}}</div>
      <div class="form-group">
        <input type="button" value="登录" @click="getLogin">
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
    getLogin() {
      if(this.driverTel === '' || this.driverPassword === ''){
        alert('账号密码不能为空')
      }else{
      console.log("登录")
      this.axios.post("/driver/login", {
        driverTel: this.driverTel,
        driverPassword: this.driverPassword
      })
      .then((res) => {
        console.log(res.data)
        if(res.data.state == "200") {
          var token = res.data.token;
          sessionStorage.setItem("token", token)

          // 获取参数（未登录时想访问的路由）
          var url = this.$route.query.redirect;
          console.log(url)

          url = url ? url : "/homea"
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
    height: 1334px;
  }
  .wel{
    font-size: 100px;
    margin-top: 260px;
    color: white
  }
  .huoqu{
    position: absolute;
    right: 120px;
    top: 10px;
    width: 150px;
    height:52px;
    font-size: 18px;
    border-radius: 9px
  }
  input::-webkit-input-placeholder{
            color:white;
        }
  .login-form {
    margin-top: 140px;

    .form-group {
      margin-bottom: 40px;
      position: relative;

      input{
        padding: 5px 3px;
        width: 500px;
        height: 60px;
        border-radius:30px;
        box-shadow: none;
        border: 2px solid white;
        outline: none;
        color: white;
        font-size: 14px;
        text-align: left;
        text-indent: 40px;
        background: none;
      }

      input[type=button] {
        width: 500px;
        height: 80px;
        border-radius: 30px;
        background: lightgreen;
        box-shadow: none;
        color: white;
        outline: none;
        font-size: 32px;
        border: none;
        text-align: center;
        padding-right:60px;

        &:active {
          box-shadow: 1px 1px 3px #10412b;
        }
      }
    }
    
  }
  .nav{
      width: 100%;
      height: 80px;
      background: #63ADDE;
      font-size: 36px;
      color: white;
      line-height: 80px;
      text-align: center;

      p{
        transform: translateX(-12px);
      }
  }
</style>