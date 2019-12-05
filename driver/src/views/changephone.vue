<template>
  <div class="box">
    <div class="nav">
      <ul>
        <li>&lt;返回</li>
      </ul>
      <p @click="goback">修改手机号</p>
    </div>
    <hr />
    <form class="login-form">
      <div class="form-group">
        <input type="text" placeholder="请输入手机号" v-model="phone" />
      </div>
      <div class="form-group">
        <input type="text" placeholder="请输入验证码" v-model="code" />
        <button type="button" class="huoqu" @click="changeYzm">获取验证码</button>
      </div>
      <div class="form-group">
        <input type="text" placeholder="请输入新手机号" v-model="newphone" />
      </div>
      <div class="form-group">
        <input type="button" value="确认修改" @click="confirmBtn" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      newphone:'',
      phone:'',
      code:""
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    changeYzm() {
      this.axios
        .post("/driver/phoneCode", {
          driverTel:this.phone
        })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err);
        });
    },
    confirmBtn(){
      var a = this.newphone
      var ph = this.phone;
      var newph = this.newphone;
      var code = this.code
      if(ph != newph){
        this.axios
        .post("/driver/updateInfo", {
          driverTel:a,
          driverId:this.$route.query.driverId,
          code:code
        })
        .then(res => {
          if(res.data.msg=="修改成功"){
            console.log(res);
            alert("修改成功");
            var b = this.$route.query.driverId
            location.assign('/homea?driverId='+b)
          }else{
            alert("验证码不正确")
          }
        })
        .catch(err => {
          console.log(err);
        })
      }else{
        alert("手机号相同")
      }
        
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.nav {
  width: 100%;
  height: 80px;
  background: #63adde;
  font-size: 36px;
  color: white;
  line-height: 80px;
  text-align: center;

  p {
    transform: translateX(-36px);
  }
}
ul li {
  float: left;
  list-style: none;
  margin-left: 10px;
}
ul li:hover {
  cursor: pointer;
}
hr {
  height: 10px;
  color: #d7d7d7;
  background: #d7d7d7;
}
* {
  margin: 0;
  padding: 0;
}
.huoqu {
  position: absolute;
  right: 120px;
  top: 10px;
  width: 150px;
  height: 52px;
  font-size: 18px;
  border-radius: 9px;
  background: #63adde;
  color: white;
  border: none;
}
.huoqu:active {
  box-shadow: 4px 4px gray;
}
.login-form {
  margin-top: 200px;

  .form-group {
    margin-bottom: 50px;
    position: relative;

    input[type="text"] {
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

    input[type="button"] {
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
</style>
