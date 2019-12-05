<template>
  <div class="evaluate">
      <h1>司机评价</h1>
      <el-input v-model="search" placeholder="请输入要查询的客户名、司机姓名、手机号" clear="search-input"></el-input>
      <el-button class="search-button" type="primary" @click='searchOrder'>查询</el-button>
      <!-- <el-button class="addUserCard-button" type="warning" @click="addDriver">
        <span class="el-icon-plus" > 添加车司机</span>
      </el-button> -->
      <table>  
          <tr class="table-th">
            <td>订单编号</td> 
            <td>客户名</td>
            <td>司机名</td>
            <td>客户手机号</td>
            <td>总星数</td>
            <td>备注</td>
            <td>评论时间</td>
            <td>操作</td>
          </tr>
          <EvaluateItem v-for="(item,index) in EvaList" :key="index" :info='item'></EvaluateItem>
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

import EvaluateItem from '@/components/EvaluateItem.vue'
export default {
  name: 'evaluate',
 data(){
    return {
      isShow:true,
      total:1,   // 一共多少条
      page:1,   //当前第几页
      limit:5   ,// 每页多少条
      EvaList:[],
      search:'',
    }
  },
  components: {
    EvaluateItem
  },
  methods:{
   searchOrder:function(){
     console.log('查询');
     this.getEvaList();
   },
    getEvaList:function(){
        this.axios  
          .post("/back/Comments/list",{
            page:this.page,    //当前页
            limit:this.limit ,  //每页显示多少条
            // name: this.search   // 搜索条件 
          }) 
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") {
              this.EvaList = res.data.data.list;
              this.total = res.data.data.total;   //总共多少页
              if(this.EvaList==''){
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
      this.getOrderList1();
    },
    next:function(){  //上一页
        this.page ++;
        this.getOrderList1();
    },
  },
  created(){
    this.getEvaList();
  }
}
</script> 

<style lang="less" scoped>
@import '../assets/style/base.less';

.evaluate{
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
        min-width: 90px;
      }
      td:nth-child(2){
        min-width: 90px;
      }
      td:nth-child(3){
        min-width: 80px;
      }
      td:nth-child(4){
        min-width: 110px;
      }
      td:nth-child(5){
        min-width: 150px;
      }
      td:nth-child(6){
        min-width: 170px;
      }
      td:nth-child(7){
        min-width: 100px;
      }
      td:nth-child(8){
        min-width: 240px;
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
