<template>
  <div class="home">

    <el-container  class="home-box">
      <!-- 头部 -->
      <el-header>Header</el-header>
      
      <!-- 中间主体 -->
      <el-container>
        <!-- 中左，侧导航 -->
        <el-aside width="200px">
           
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" 
              @close="handleClose" background-color="#545c64" text-color="#fff"
              active-text-color="#ffd04b" router>
              <el-menu-item index="home" >
                <i class="el-icon-menu"></i>
                <span slot="title">主页</span>
              </el-menu-item>
              <el-menu-item index="banner">
                <i class="el-icon-s-open"></i>
                <span slot="title">Banner管理</span>
              </el-menu-item>
              <el-menu-item index="order">
                <i class="el-icon-s-claim"></i>
                <span slot="title">订单管理</span>
              </el-menu-item>
              <el-submenu index="">
                <template slot="title">
                  <i class="el-icon-user-solid"></i>
                  <span>客户管理</span>
                </template>
                  <el-submenu index="client" >
                    <template slot="title">用户管理</template>
                    <el-menu-item index="client" >用户管理</el-menu-item>
                    <el-menu-item index="usercard">车主卡</el-menu-item>
                  </el-submenu>
                <el-menu-item index="driver">司机管理</el-menu-item>            
              </el-submenu>
              <el-submenu index="contents">
                <template slot="title">
                  <i class="el-icon-s-order"></i>
                  <span>内容管理</span>
                </template>
                <el-menu-item class="suojin" index="contents">汽车品牌</el-menu-item>  
                  <el-submenu index="5-2">
                  <template slot="title">门店管理</template>
                  <el-menu-item index="door">4s店管理</el-menu-item>
                </el-submenu>          
              </el-submenu>
              <el-menu-item index="insurance">
                <i class="el-icon-s-opportunity"></i>
                <span slot="title">保险管理</span>
              </el-menu-item>
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-s-help"></i>
                  <span>评价管理</span>
                </template>
                <el-menu-item index="evaluate">司机评论</el-menu-item>  
                <el-menu-item index="sword">敏感词设置</el-menu-item>    
              </el-submenu>
              <el-submenu index="8">
                <template slot="title">
                  <i class="el-icon-s-check"></i>
                  <span>退款</span>
                </template>
                <el-menu-item index="refund">退款中</el-menu-item>  
                <el-menu-item index="refundHistory">历史记录</el-menu-item>    
              </el-submenu>
              <el-submenu index="thirdParty">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>第三方管理</span>
                </template>
                <el-menu-item index="thirdParty">保险公司管理</el-menu-item>  
              </el-submenu>
              <el-submenu index="10">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>设置</span>
                </template>
                <el-menu-item index="settings">权限管理</el-menu-item>  
                <el-menu-item index="openCity">开通城市</el-menu-item>  
                <el-menu-item index="pushMess">推送消息</el-menu-item>  
              </el-submenu>
            
          </el-menu>

        </el-aside>

        <!-- 中右 -->
        <el-main>   
          <!-- 允许哪些可以被缓存  -->
          <keep-alive include="">
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>

      <!-- 脚部 -->
      <el-footer>Footer</el-footer>
    </el-container>

  </div>
  
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return {
      url:''
    }
  },
  components: {
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/style/base.less';
.home{
}
.home-box{
  width: 100%;
  color: white;

  .el-header, .el-footer {
    background-color: @themColor;
    width: 100%;
    line-height: 60px;
  }

  .el-aside {
    background-color: @themSecColor;
    text-align: center;
    height: 86vh;
    overflow: hidden;

    .el-menu{
      height: 100%; 
      overflow-x: hidden;
      overflow-y: scroll;
      margin-right: -17px;

     
      .el-menu-item.is-active {
          color: #409EFF!important;
          font-size: 20px;
          transition: .1s all linear;
      }

    }


  }
  
  .el-main {
    color: black;
    text-align: center;
    line-height: 60px;
  }
}

.suojin{
  text-indent: 25px;
}


</style>
