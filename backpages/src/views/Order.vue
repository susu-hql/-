<template>
  <div class="order">
      <h1>订单管理</h1>
      <el-select v-model="searchCity" placeholder="城市" class="search">
        <el-option
          v-for="item in cityList"
          :key="item.value"
          :label="item.label" 
          :value="item.value">
        </el-option>
      </el-select>
      
      <el-input v-model="searchOrderId" placeholder="订单编号" clear="search-input" class="search"></el-input>
      
      <el-select v-model="searchOderType" placeholder="订单类型" class="search">
        <el-option
          v-for="item in orderTypeList"
          :key="item.value"
          :label="item.label" 
          :value="item.value">
        </el-option>
      </el-select>

      <el-select v-model="searchOderStaus" placeholder="订单状态" class="search">
        <el-option
          v-for="item in orderStausList"
          :key="item.value"
          :label="item.label" 
          :value="item.value">
        </el-option>
      </el-select>
      
      <el-button class="search-button" type="primary" @click='searchOrder'>查询</el-button>

      <el-button class="addUserCard-button" type="warning" @click="addUserCard">
        <span class="el-icon-plus" > 添加订单</span>
      </el-button>
      
      <table> 
          <tr class="table-th">
            <td>订单编号</td> 
            <td>订单类型</td>
            <td>姓名</td>
            <td>城市</td>
            <td>手机号</td>
            <td>车牌号</td>
            <td>接车司机</td>
            <td>是否还车</td>
            <td>还车司机</td>
            <td>订单状态</td>
            <td>下单时间</td>
            <td>付款状态</td>
            <td>审核状态</td>
          </tr>
          <OrderItem v-for="(item,index) in userList" :key="index" :info='item'></OrderItem>
      </table>
      <div class="block">
        <el-pagination
          layout="prev, pager, next"
          :total="20" :page-size="5">
        </el-pagination>
      </div>
  </div>
</template>

<script>
import OrderItem from '@/components/OrderItem.vue'
// import { mapState } from 'vuex'

export default {
  name: 'order',
  data(){
    return {
      searchCity:'',
      cityList:[{value:'高新区',label:'高新区'}],
      searchOrderId:'',
      searchOderType:'',
      orderTypeList:[{value:'估损预约',label:'估损预约'},{value:'直接预约',label:'直接预约'}],
      searchOderStaus:'',
      orderStausList:[{value:'待付款',label:'待付款'}],
      

      userList:[{userid:'1',name:'微微一笑很倾城'},{userid:'2',name:'lucy'},{userid:'3',name:'lucy'},{userid:'4',name:'lucy'},{userid:'5',name:'lucy'}]
    }
  },
  components: {
    OrderItem
  },
  methods:{
   searchOrder:function(){
    //  this.searchCity   this.searchOrderId  this.searchOderType this.searchOderStaus
     console.log('查询');
   },
   addUserCard:function(){
     console.log('添加车主卡');
     location.assign('/addoder');
   }
  },
  created(){
    
  }
}
</script> 

<style lang="less" scoped>
@import '../assets/style/base.less';

.order{
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
    td{
      // padding:0 10px;
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
