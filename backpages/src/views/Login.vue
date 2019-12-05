<template>
  <div class="login">
      <el-form label-width="80px" class="login-form">
        <div class="login-title">登录</div>
        <el-input placeholder="请输入用户名" v-model="username" clearable></el-input>
        <el-input placeholder="请输入密码" v-model="userpass" show-password></el-input>
        <el-checkbox v-model="remeber">记住密码</el-checkbox>
        <el-button type="primary" @click='login'>登录</el-button>
      </el-form>
  </div>
</template>

<script>
import { Message } from 'element-ui'

export default {
  name: 'login',
  data(){
    return {
        username:'',
        userpass:'',
        remeber:false
    }
  },
  components: {
  },
  methods:{
    login:function(){
      if(this.username==''){
        Message({
          message: "请输入用户名",
          type: "error",
          showClose: true
        })
      }else if(this.userpass == ''){
        Message({
          message: "请输入密码",
          type: "error",
          showClose: true
        })
      }else{
        console.log('登录');
        console.log(this.remeber);

         this.axios
            .post("/back/login.do", {
              adminName: this.username,
              adminPass: this.userpass
            })
            .then(res => { 
              // console.log(res.data);
              if (res.data.state == "200") {
                
                var token = res.data.token;
                var adminId = res.data.data.adminId;
                
                sessionStorage.setItem("token", token);
                sessionStorage.setItem("adminId", adminId);

                // 获取参数（未登录时想访问的路由）
                // var url = this.$route.query.redirect;
                // console.log(url);

                // url = url ? url : "/";
                // 切换路由
                this.$router.replace('/home');
              } else {
                Message({
                  message: "账号或密码错误",
                  type: "error",
                  showClose: true
                })
                console.log("登陆失败");
              }
            })
            .catch(err => {
              console.log(err);
            });

        // location.replace('/home');
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../assets/style/base.less';

.login{
    display: flex; // 弹性布局
    justify-content: center; // 让子元素水平居中
    align-items: center; // 让子元素垂直居中
    flex-direction: column; // 决定子元素排列方式
    height: 100vh; // 视窗单位，1vh=浏览器可视区域高度的 1%
    background:url('../assets/img/bg.jpg') no-repeat;
    background-size: cover;

  .login-form{
    padding: 40px 30px;;
    box-shadow: 0px 0px 5px #333;
    background: white;

      .login-title{
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        color: @themColor;
        height: 50px;
      }
      .el-input{
        display: block;
        margin-bottom: 20px ;
      }
      .el-input__inner{
        width: 300px;
        border: 1px solid red;
      }
      .el-button{
        width: 300px;
      }
      .el-checkbox{
        display: block;
        margin-bottom: 20px;
      }
  }
}

</style>
