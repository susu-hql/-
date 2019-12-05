<template>
  <div class="orders">
      <h1>订单管理 -- 直接预约</h1>
      
      <el-input v-model="searchOrderId" placeholder="订单编号" clear="search-input" class="search"></el-input>

      <el-select v-model="searchOderStaus" placeholder="订单状态" class="search">
        <el-option label="全部订单" value=""></el-option>
        <el-option
          v-for="item in orderStausList"
          :key="item.stateId"
          :label="item.stateName" 
          :value="item.stateId">
        </el-option>
      </el-select>

      <el-select v-model="searchOderState" placeholder="审核状态" class="search">
        <el-option label="全部状态" value=""></el-option>
        <el-option label="待审核"  value="3"> </el-option>
        <el-option label="通过审核"  value="1"> </el-option>
        <el-option label="未通过审核"  value="2"> </el-option>
      </el-select>
      
      <el-button class="search-button" type="primary" @click='searchOrder'>查询</el-button>

      <el-button class="addUserCard-button" type="warning" @click="addUserCard">
        <span class="el-icon-plus" > 添加订单</span>
      </el-button>
      
      <table> 
          <tr class="table-th">
            <td>编号</td> 
            <td>订单类型</td>
            <td>姓名</td>
            <td>手机号</td>
            <td>车牌号</td>
            <td>接车司机</td>
            <td>还车司机</td>
            <td>订单状态</td>
            <td>下单时间</td>
            <td>付款状态</td>
            <td>审核状态</td>
          </tr>
          <OrderItems v-for="(item,index) in orderList" :key="index" :info='item'></OrderItems>
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
import OrderItems from '@/components/OrderItems.vue'
// import { mapState } from 'vuex'

export default {
  name: 'orders',
  data(){
    return {
      isShow:true,
      searchOrderId:'',
      searchOderStaus:'',
      searchOderState:'',
      orderStausList:[],
      orderList:[],
      total:1,   // 一共多少条
      page:1,   //当前第几页
      limit:5   ,// 每页多少条
    }
  },
  components: {
    OrderItems
  },
  methods:{
   searchOrder:function(){    // 点击查询
     this.getOrderList1();
     console.log('查询');
   },
   addUserCard:function(){    // 添加
     console.log('添加车主卡');
     location.assign('/addOrder');
   },
   getOrderList1:function(){    // 获取所有的估损预约订单
     this.axios  
          .post("/back/directOrder/findList",{
            page:this.page,    //当前页
            limit:this.limit ,  //每页显示多少条
            orderId:this.searchOrderId,
            orderState:this.searchOderStaus,
            handleState:this.searchOderState
          })
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") {
              this.orderList = res.data.data.list;
              this.total = res.data.data.total;   //总共多少页
               if(this.orderList==''){
                  console.log('空');
                  this.isShow = false;
                }else{
                  this.isShow  = true;
                }
            } else {
               Message({
                  message: "账号已过时，请重新登录修改成功",
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
   getOrderStates:function(){  // 获取订单状态
        this.axios  
          .post("/back/state/findOrderState")
          .then(res => {
            console.log('订单状态',res.data.data);
            if (res.data.state == "200") {
                this.orderStausList = res.data.data
            } else {
              Message({
                  message: "请求出错",
                  type: "error",
                  showClose: true
              })
            }
          })
          .catch(err => {
            console.log(err);
          });
   }
  },
  created(){
    this.getOrderList1();
    this.getOrderStates();
  }
}
</script> 

<style lang="less" scoped>
@import '../assets/style/base.less';

.orders{
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
      width:182px;
    }
    td:nth-child(2){
      width:92px;
    }
    td:nth-child(3){
      width:50px;
    }
    td:nth-child(4){
      width:100px;
    }
    td:nth-child(5){
      width:80px;
    }
    td:nth-child(6){
      width:50px;
    }
    td:nth-child(7){
      width:50px;
      padding: 0 15px;
    }
    td:nth-child(8){
      width:80px;
    }
    td:nth-child(9){
      width:90px;
    }
    td:nth-child(10){
      width:60px;
    }
    td:nth-child(11){
      width:120px;
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
  .search{
    width:150px;
    margin-right: 20px;
  }
}

</style>
