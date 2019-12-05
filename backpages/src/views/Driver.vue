<template>
  <div class="driver">
      <h1>司机管理</h1>
      <el-input v-model="search" placeholder="请输入要查询的司机姓名或手机号" clear="search-input"></el-input>
      <el-button class="search-button" type="primary" @click='searchOrder'>查询</el-button>
      <el-button class="addUserCard-button" type="warning" @click="addDriver">
        <span class="el-icon-plus" > 添加车司机</span>
      </el-button>
      <table> 
          <tr class="table-th">
            <td>ID</td> 
            <td>司机名</td>
            <td>手机号</td>
            <td>在职状态</td>
            <td>最后登录时间</td>
            <td>操作</td>
          </tr>
          <DriverItem v-for="(item,index) in driverList" :key="index" :info='item'></DriverItem>
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
import { Message } from 'element-ui'

import DriverItem from '@/components/DriverItem.vue'
export default {
  name: 'driver',
 data(){
    return {
      isShow:true,
      search:'',
      driverList:'',
      total:1,   // 一共多少条
      page:1,   //当前第几页
      limit:5   ,// 每页多少条
      // userList:[{userid:'1',name:'微微一笑很倾城'},{userid:'2',name:'lucy'},{userid:'3',name:'lucy'},{userid:'4',name:'lucy'},{userid:'5',name:'lucy'}]
    }
  },
  components: {
    DriverItem
  },
  methods:{
   searchOrder:function(){
     console.log('查询');
     this.getDriverList();
   },
   addDriver:function(){
     console.log('添加司机');
     location.assign('/adddriver');
   },
    getDriverList(){
        this.axios  
          .post("/back/findDriverByNameOrTel",{
          // .post("/back/car/selectByNameOrTel",{
            page:this.page,    //当前页
            limit:this.limit ,  //每页显示多少条
            name: this.search ,  // 搜索条件 
            // tel:this.search
          }) 
          .then(res => {
            console.log("司机列表：",res.data);
            if (res.data.state == "200") {
              this.driverList = res.data.data.list;
              this.total = res.data.data.total;   //总共多少页
              if(this.driverList==''){
                  console.log('空');
                  this.isShow = false;
                }else{
                  this.isShow  = true;
                }
            }else{
               Message({
                message: "账号已过时，请重新登录!",
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
      this.getOrderList1();
    },
    next:function(){  //上一页
        this.page ++;
        this.getOrderList1();
    },
  },
  created(){
    this.getDriverList();
  }
}
</script> 

<style lang="less" scoped>
@import '../assets/style/base.less';

.driver{
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
    font-size: 16px;
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
      // padding:0 10px;
    }
    td:nth-child(1){
      min-width: 60px;
    }
    td:nth-child(2){
      min-width: 100px;
    }
    td:nth-child(3){
      min-width: 150px;
    }
    td:nth-child(4){
      min-width: 70px;
    }
    td:nth-child(5){
      min-width: 170px;
    }
    td:nth-child(6){
      min-width: 300px;
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
