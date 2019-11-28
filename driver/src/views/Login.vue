<template>
  <div class="app-login">
    <div class="nav">
        <p>登录</p>
    </div>
    <form class="login-form">
      <div class="form-group">
        <input type="text" placeholder="请输入手机号" v-model="username">
      </div>
      <div class="form-group">
        <input type="text" placeholder="请输入密码" v-model="userpass">
      </div>
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
      username: "",
      userpass: ""
    }
  },
  methods: {
    getLogin() {
      // console.log("访问查询参数：", this.$route.query.id);
      // this.$route：保存了当前路由信息
      console.log("登录")
      this.axios.post("/users/login", {
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
      })
     
    }
  }
}
</script>
<style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
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
  .login-form {
    margin-top: 200px;

    .form-group {
      margin-bottom: 40px;
      position: relative;

      input[type=text]{
        padding: 5px 3px;
        width: 500px;
        height: 40px;
        border-radius: 9px;
        box-shadow: none;
        border: 1px solid black;
        outline: none;
        color: black;
        font-size: 14px;
      }

      input[type=button] {
        padding: 5px 3px;
        width: 500px;
        height: 50px;
        border-radius: 9px;
        background: white;
        box-shadow: none;
        color: black;
        border: 1px solid black;
        outline: none;
        font-size: 18px;

        &:active {
          box-shadow: 1px 1px 3px #10412b;
        }
      }
    }
    
  }
  .nav{
      width: 100%;
      height: 60px;
      background: #63ADDE;
      font-size: 18px;
      color: white;
      line-height: 60px;
      text-align: center;

      p{
          transform: translateX(-12px);
      }
  }
</style>