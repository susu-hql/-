<template>
  <div class="home">

    <el-container  class="home-box">
      <!-- 头部 -->
      <el-header>
        <div id="logo" @click="toindex">
          <img src="../assets/logo.png" alt="" class="logo">
          车险赔
        </div>
        <div class="touxiang">
            <span class="adminName">{{admin}}</span>
            <span class="el-dropdown-link">
              <el-avatar  :src="touxiang" class="tImg"></el-avatar>
              <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
            </span>
            <ul class="quit">
              <li>
                  <a href="javascript:;" @click="quit">退出</a>
              </li>
            </ul>  
        </div>  
      </el-header>
      
      <!-- 中间主体 -->
      <el-container>
        <!-- 中左，侧导航 -->
        <el-aside width="200px">
           
          <el-menu :default-active="currentUrl" class="el-menu-vertical-demo" @open="handleOpen" 
              @close="handleClose" background-color="#545c64" text-color="#fff"
              active-text-color="#ffd04b" router >
              <!-- <el-menu-item index="home" @click='changA' v-model="isactive" :class="{'is-active':isactive=='about'}"> -->
              <el-menu-item index="home" >
                <i class="el-icon-menu"></i>
                <span slot="title">主页</span>
              </el-menu-item>
              <el-menu-item index="banner">
                <i class="el-icon-s-open"></i>
                <span slot="title">Banner管理</span>
              </el-menu-item>

              <!-- <el-menu-item index="order">
                <i class="el-icon-s-claim"></i>
                <span slot="title">订单管理</span>
<<<<<<< HEAD
              </el-menu-item>
=======
              </el-menu-item> -->

              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-s-help"></i>
                  <span>订单管理</span>
                </template>
                <el-menu-item index="order">估损预约</el-menu-item>  
                <el-menu-item index="orders">直接预约</el-menu-item>    
              </el-submenu>

>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
              <el-submenu index="5">
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
          <div class="main-content">
            <!-- 允许哪些可以被缓存  -->
            <keep-alive include="">
              <router-view></router-view>
            </keep-alive>
          </div>
        </el-main>
      </el-container>

      <!-- 脚部 -->
      <el-footer>
        <p>Copyright © 2019 版权所有 四川省成都市车险赔有限公司</p>
        <ul>
          <li><a href="/makeby">技术支持 四川省成都市一群拥有像素眼的大佬们</a></li>
          <!-- <li><a href="">帮助</a></li>
          <li><a href="">举报</a></li>
          <li><a href="">用户反馈</a></li> -->
        </ul>
      </el-footer>
    </el-container>

  </div>
  
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return {
      url:'',
<<<<<<< HEAD
      currentUrl:''
=======
      currentUrl:'',
      touxiang:require('../assets/img/tx1.png'),
      admin:''
>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
    }
  },
  watch:{
    
  },
  components: { 
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
<<<<<<< HEAD
=======
    },
    quit(){
      console.log('退出');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('adminId');
      this.$router.replace('/login');
    },
    toindex(){
      location.assign('/home');
    },
    getAdminName(){   // 根据管理员id 获取管理员姓名
      this.axios  
          .post("/back/admin/selectid/",{
            adminId:sessionStorage.getItem("adminId")
          })
          .then(res => {
            // console.log("adminName:",res.data);
            if (res.data.state == "200") {
              this.admin = res.data.data.list[0].adminName
              // console.log(this.admin)
            } else {
              this.$message({
                showClose: true,
                message: '请求出错',
                type: 'error'
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
    }
  },
  created(){
    this.currentUrl = this.$route.name;
    if(this.currentUrl == 'about'){
      this.currentUrl = 'home'
    }
<<<<<<< HEAD
=======

    this.getAdminName();

    // this.axios   //  获取权限
    //   .post("/back/menu.do")
    //   .then(res => {
    //     // console.log(res.data);
    //     if (res.data.state == "200") {
    //       console.log('成功');
    //     } else {
    //       this.$message({
    //         showClose: true,
    //         message: '账号已过时，请重新登录',
    //         type: 'error'
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    
>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
  }
}
</script>

<style lang="less" scoped>
@import '../assets/style/base.less';

.home-box{
  width: 100%;
  color: white;

  .el-header{
    font-size: 20px;
    #logo{
      display: inline-block;
      width: 100px;
      line-height: 60px;
      height: 60px;   
      cursor: pointer;
    }
    .logo{
      width: 30px;
      height: 30px;
      vertical-align: middle;
    }
    .adminName{
      margin-right: 10px;
      font-size: 20px;
    }
    .touxiang:hover .quit{
      display: inline-block;
    }
    .touxiang{
      float:right;
      right: 50px;
      color:wheat;
      font-size: 16px;

      .tImg{
        vertical-align: middle;
        top: 10px;
      }
    }
    
    .quit{
      display: none;
      height: 40px;
      line-height: 40px;
      width: 100px;
      text-align: center;
      margin-left: -15px;
      margin-top: -5px;
    }
    
  }

  .el-header, .el-footer {
    background-color: @themColor;
    width: 100%;
    line-height: 60px;
  }

  .el-aside {
    background-color: @themSecColor;
    text-align: center;
    overflow: hidden;
    height: 86vh;

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
    height: 86vh;
<<<<<<< HEAD
    overflow: hidden;

    .main-content{
      height: 100%;
      overflow-x: hidden;
      overflow-y: scroll;
      margin-right: -17px;

    }
=======
    // overflow: hidden;

    .main-content{
      height: 100%;
      // overflow-x: hidden;
      // overflow-y: scroll;
      // margin-right: -17px;

    }
  }
}

.el-footer{
  text-align: center;
  p{
    height: 40px;
    line-height: 40px;
    font-size: 10px;
  }
  ul{
    height: 30px;
    line-height: 30px;
    margin-top: -12px;
    li{
      font-size: 12px;
      margin-right: 10px;
      display:inline-block;
      a{
        color: rgb(100, 96, 96);
      }
    }
>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
  }
}

.suojin{
  text-indent: 25px;
}


</style>
