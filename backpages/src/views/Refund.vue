<template>
  <div class="refund">
  <h1>退款中</h1>
    <div class="search">
      <el-select v-model="value" placeholder="请选择退款选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" icon="el-icon-search">查询</el-button>
    </div>
    <el-table :data="tableData" height=auto border style="width: 100%">
      <el-table-column prop="orderId" label="订单编号" fixed> </el-table-column>
      <el-table-column prop="date" label="订单日期"> </el-table-column>
      <el-table-column prop="user" label="客户"></el-table-column>
      <el-table-column prop="driver" label="司机"></el-table-column>
      <el-table-column prop="surviceType" label="服务类型"></el-table-column>
      <el-table-column prop="orderMoney" label="订单金额"></el-table-column>
      <el-table-column prop="refundMoney" label="退款金额"></el-table-column>
      <el-table-column prop="oderStatu" label="订单状态"></el-table-column>
      <el-table-column prop="reason" label="理由"></el-table-column>
      <el-table-column prop="apllyDate" label="申请时间"></el-table-column>
      <el-table-column prop="" label="操作">
        <el-button size="small" round>退款</el-button>
        <el-button size="small" round>驳回</el-button>
      </el-table-column>
   </el-table>
   <el-pagination middle layout="prev, pager, next" :total="50"></el-pagination>
  </div>
  
</template>

<script>
export default {
  name: 'refund',
  components: {
  },
  data() {
    return {
      input:'',
      options: [{
          value: '选项1',
          label: '退款中'
        }, {
          value: '选项2',
          label: '已驳回'
        }, {
          value: '选项3',
          label: '退款成功'
        }],
      value:'',
      tableData: [{
          orderId:'20161047',
          date: '2016-05-03',
          user: '王小虎',
          driver: '刘虎',
          surviceType: '估损预约维修',
          orderStatu: '退款中',
          orderMoney: '299',
          refundMoney: '299',
          reason: '经过估损合理',
          apllyDate: '2019-11-25'
        },
        {
          orderId:'20161047',
          date: '2016-05-03',
          user: '王小虎',
          driver: '刘虎',
          surviceType: '估损预约维修',
          orderMoney: '299',
          refundMoney: '299',
          reason: '经过估损合理',
          apllyDate: '2019-11-25'
        },{
          orderId:'20161047',
          date: '2016-05-03',
          user: '王小虎',
          driver: '刘虎',
          surviceType: '估损预约维修',
          orderMoney: '299',
          refundMoney: '299',
          reason: '经过估损合理',
          apllyDate: '2019-11-25'
        },{
          orderId:'20161047',
          date: '2016-05-03',
          user: '王小虎',
          driver: '刘虎',
          survice: '估损预约维修',
          orderMoney: '299',
          refundMoney: '299',
          reason: '经过估损合理',
          apllyDate: '2019-11-25'
        },
        ]
    }
  }
}
</script>

<style>
  h1 {
    text-align: left;
    border-bottom: 1px solid black;
  }
  .search {
    float: left;
  }
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-table {
    height: 400px;
  }
  .el-paginatio {
    margin-top: 20px;
  }
</style>
