<template>
  <div class="home">
    <div>    
      <router-view></router-view>
    </div>
<van-tabbar route class="bottomTab">
  <van-tabbar-item
    replace
    to="/home"
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
      var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoie1widXNlcklkXCI6MSxcInVzZXJOYW1lXCI6XCJMV1lcIixcInVzZXJUZWxcIjpcIjEzNTgxNTIzNjUyXCIsXCJ1c2VySWRjYXJkXCI6XCI1MTE1MTUxNTIyMTUxNTQ4XCIsXCJ1c2VyTGFzdExvZ2ludGltZVwiOjE1NzQ5MjkxMjkwMDAsXCJpbnN1cmFuY2VJZFwiOjEsXCJjb21wYW55TmFtZVwiOlwi5Lit5Zu95Lq65a-_XCIsXCJpbnN1cmFuY2VEYXRlXCI6MTU3NTA0MzIwMDAwMCxcImluc3VyYW5jZVBlcnNvblwiOlwi5p2O55m9XCIsXCJ1c2VyTm90ZXNcIjpcIuWCheWkp1wiLFwiaW1nVXJsXCI6XCLlgoXlpKcgXCIsXCJkYXRhc3RhdGVcIjoxfSIsImlzcyI6ImphdmEiLCJleHAiOjE1NzU1MDgyNDEsInVzZXJJZCI6MX0.dsy1Gv-xxgM8kEfQky7tFube4VGvLT6RyXw2nagkYEQ"
    sessionStorage.getItem("token",token)
    }
  },
  create(){
    this.tiken()
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


