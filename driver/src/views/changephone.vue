<template>
  <div class="box">
    <div class="nav">
      <ul>
        <li @click="goback">&lt;返回</li>
      </ul>
      <p>修改手机号</p>
    </div>
    <hr />
    <form class="login-form">
      <div class="form-group">
        <input type="text" placeholder="请输入手机号" />
      </div>
      <div class="form-group">
        <input type="text" placeholder="请输入验证码" />
        <button type="button" class="huoqu">获取验证码</button>
      </div>
      <div class="form-group">
        <input type="text" placeholder="请输入新手机号" />
      </div>
      <div class="form-group">
        <input type="button" value="确认修改" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
    methods:{
        goback(){
            this.$router.replace('/personal')
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
  height: 60px;
  background: #63adde;
  font-size: 18px;
  color: white;
  line-height: 60px;
  text-align: center;

  p {
    transform: translateX(-12px);
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
</style>
