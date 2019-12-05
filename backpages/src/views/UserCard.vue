<template>
  <div class="usercard"
     
    >
      <h1>车主卡</h1>
      <el-input v-model="search" placeholder="请输入要查询的用户名姓名" clear="search-input"></el-input>
      <!-- <el-select v-model="searchOderState" placeholder="审核状态" class="search">
        <el-option label="全部状态" value=""></el-option>
        <el-option label="待审核"  value="3"> </el-option>
        <el-option label="通过审核"  value="1"> </el-option>
        <el-option label="未通过审核"  value="2"> </el-option>
      </el-select> -->
      
      <el-button class="search-button" type="primary" @click='searchOrder'>查询</el-button>
      
      
      <el-button class="addUserCard-button" type="warning" @click="addUserCard">
        <span class="el-icon-plus" > 添加车主卡</span>
      </el-button>
      <table> 
          <tr class="table-th">
            <td>ID</td> 
            <td>用户名</td>
            <td>手机号</td>
            <td>持卡人</td>
            <td>车牌号</td>
            <td>车辆初登日期</td>
            <td>交强险到日期</td>
            <td>商业险到日期</td>
            <td>操作</td>
            <td>审核状态</td>
          </tr>
          <UserCardItem v-for="(item,index) in userCardList" :key="index" :info='item'></UserCardItem>
      </table>
      <div class="block">
        <el-pagination
          layout="prev, pager, next" v-if="isShow"
          :total="total" :page-size="limit" :current-page='page'
          @prev-click='pre'  @next-click='next'>
        </el-pagination>
      </div>
  </div>
</template>

<script>
import UserCardItem from '@/components/UserCardItem.vue'
import { Message } from 'element-ui'

export default {
  name: 'usercard',
  data(){
    return {
      search:'',
      userCardList:'',
      total:1,   // 一共多少条
      page:1,   //当前第几页
      limit:5   ,// 每页多少条
      isShow:true,
      searchOderState:''
    }
  },
  components: {
    UserCardItem
  },
  methods:{
   searchOrder:function(){
     console.log('查询');
     this.getUserCardList();
   },
   addUserCard:function(){
     console.log('添加车主卡');
     location.assign('/addUserCard');
   },
    getUserCardList(){
        console.log(this.searchOderState)
        this.axios  
          .post("/back/car/selectByNameOrTel",{
          // .post("/back/findUserCarInfoByCardState",{
            page:this.page,    //当前页
            limit:this.limit ,  //每页显示多少条
            name: this.search ,  // 搜索条件 
            // cardState:this.searchOderState
          }) 
          .then(res => {
            console.log("车主卡列表：",res.data);
            if (res.data.state == "200") {
              this.userCardList = res.data.data.list;
              this.total = res.data.data.total;   //总共多少页
              if(this.userCardList==''){
                  console.log('空');
                  this.isShow = false;
                }else{
                  this.isShow  = true;
                }
            }else{
              Message({
                message: "账号已过时，请重新登录",
                type: "error",
                showClose: true
              })
            }
          })
          .catch(err => {
            console.log(err);
          });
    },
    pre:function(){  //上一页
      this.page --;
      this.getUserCardList();
    },
    next:function(){  //上一页
        this.page ++;
        this.getUserCardList();
    },
  },
  created(){
    this.getUserCardList();
  }
}
</script> 

<style lang="less" scoped>
@import '../assets/style/base.less';

.usercard{
  text-align: left;
      height: 100%;
      // overflow-x: hidden;
      overflow-y: scroll;
      margin-right: -17px;

  h1{
    text-align: left;
    border-bottom: 1px solid rgb(161, 158, 158);
  }
  .el-input{
    width: 300px;
  }
  .search-button{
    width: 100px;
    margin-left: 30px;
  }
  .addUserCard-button{
    display: block;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  table{
    font-size: 12px;
    text-align: center;
    border-spacing: 0px;

    .table-th{
      background: @themColor;
      color: white; 
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
    td:nth-child(1){
      min-width:  60px;
    }
    td:nth-child(2){
      min-width:  70px;
    }
    td:nth-child(3){
      min-width:  110px;
    }
    td:nth-child(4){
      min-width:  90px;
    }
    td:nth-child(5){
      min-width:  90px;
    }
    td:nth-child(6){
      min-width:  120px;
    }
    td:nth-child(7){
      min-width:  120px;
    }
    td:nth-child(8){
      min-width:  120px;
    }
    td:nth-child(9){
      min-width:  100px;
    }
    td:nth-child(10){
      min-width:  115px;
    }
    tr{
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
      
  }
  .block{
    margin: 0 auto;
    text-align: center;
    margin-top: 20px;
  }
}

</style>
