<template>
  <div class="client">
      <h1>用户管理</h1>
      <el-input v-model="search" placeholder="请输入用户名" clear="search-input"></el-input>
      <el-button class="search-button" type="primary" @click='searchOrder'>查询</el-button>
      <el-button class="addUser-button" type="warning" @click="addUser">
        <span class="el-icon-plus"> 添加用户</span>
      </el-button>
      <table> 
          <tr class="table-th">
            <td>ID</td>
            <td>用户名</td>
            <td>手机号</td>
            <td>最后登录时间</td>
            <td>操作</td>
          </tr>
          <UserItem v-for="(item,index) in userList" :key="index" :info='item'></UserItem>
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
import UserItem from '@/components/UserItem.vue'
import { Message } from 'element-ui'

export default { 
  name: 'client',
  data(){
    return { 
      isShow:true,
      search:'',
      userList:[],
      total:1,   // 一共多少条
      page:1,   //当前第几页
      limit:5   ,// 每页多少条
    }
  },
  components: {
    UserItem
  },
  methods:{
   searchOrder:function(){
     this.getOrderList1();
     console.log('查询');
   },
   addUser:function(){
     console.log('添加用户');
     location.replace('/adduser');
   },
   pre:function(){  //上一页
      this.page --;
      this.getOrderList1();
   },
   next:function(){  //上一页
      this.page ++;
      this.getOrderList1();
   },
    getOrderList1:function(){    // 获取所有的估损预约订单
     console.log('查询用户',this.search );
     this.axios  
          .post("/back/getUserByNameOrTel",{
            page:this.page,    //当前页
            limit:this.limit ,  //每页显示多少条
            name: this.search ,  // 搜索条件 
          }) 
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") {
              this.userList = res.data.data.list;
              this.total = res.data.data.total;   //总共多少页
              if(this.userList ==''){
                  console.log('空');
                  this.isShow = false;
                }else{
                  this.isShow  = true;
                }
            } else {
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
  },
  created(){
    this.getOrderList1();
  }
}
</script> 

<style lang="less" scoped>
@import '../assets/style/base.less';

.client{
  text-align: left;
      height: 100%;
      overflow-x: hidden;
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
  .addUser-button{
    display: block;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  table{
    text-align: center;
    border-spacing: 0px;

    .table-th{
      background: @themColor;
      color: white; 
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
    td{
      // padding:0 35px;
    }
    td:nth-child(1){
      min-width: 100px;
    }
    td:nth-child(2){
      min-width:140px ;
    }
    td:nth-child(3){
      min-width: 230px;
    }
    td:nth-child(4){
      min-width: 315px;
    }
    td:nth-child(5){
      min-width:300px ;
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
