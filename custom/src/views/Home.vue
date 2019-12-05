<template>
  <div class="home">
    <div>    
      <router-view></router-view>
    </div>
<van-tabbar route class="bottomTab">
  <van-tabbar-item
    replace
    to="/home"
    fixed
    icon="home-o"
    class="tab"
  >
    首页
  </van-tabbar-item>
  <span></span>
  <van-tabbar-item
    replace
    to="/home/mydata"
    icon="friends-o"
    class="tab"
  > 
    我的资料
  </van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  methods:{
    token(){
      var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoie1widXNlcklkXCI6NCxcInVzZXJOYW1lXCI6XCLlvKDkuIlcIixcInVzZXJUZWxcIjpcIjEzMjU4Mjk4MjA4XCIsXCJ1c2VySWRjYXJkXCI6XCI0NTA0MDMxOTc4MDgxMDcyNDVcIixcInVzZXJMYXN0TG9naW50aW1lXCI6MTU3NTM0NTc5OTAwMCxcImluc3VyYW5jZUlkXCI6bnVsbCxcImNvbXBhbnlOYW1lXCI6XCLlpKrlubPmtIvkv53pmalcIixcImluc3VyYW5jZURhdGVcIjoxNTc1NDc1MjAwMDAwLFwiaW5zdXJhbmNlUGVyc29uXCI6XCLmnY7lm5syXCIsXCJ1c2VyTm90ZXNcIjpcImZzMTJqXCIsXCJpbWdVcmxcIjpudWxsLFwiZGF0YXN0YXRlXCI6MX0iLCJpc3MiOiJqYXZhIiwiZXhwIjoxNTc1NjYwNTUwLCJ1c2VySWQiOjR9.hxeLyiccprzIfC-lPIaiTKWP0kW23HYH4tVoHjyOx4c"
    sessionStorage.setItem("token",token)
    }
  },
  created(){
    this.token()
  }
};
</script>
<style lang="less" >
.bottomTab{ 
 justify-content:space-around;
 align-items:center;
 span{
   border-left: 1px solid rgb(255, 255, 255);
 }

  .tab{
    color: rgb(255, 255, 255);
    height: 50px;
    background-color: #63ADDE;
    line-height: 20px;
  }
 
}


</style>>


