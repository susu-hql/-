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
<<<<<<< HEAD
    <table>
      <tr>
        <th>订单号</th>
        <th>订单日期</th>
        <th>客户</th>
        <th>司机</th>
        <th>服务类型</th>
        <th>订单金额</th>
        <th>退款金额</th>
        <th>订单状态</th>
        <th>理由</th>
        <th>申请时间</th>
        <th>操作</th>
      </tr>
      <tr>
        <th>12345678</th>
        <th>2017-03-09 18：55</th>
        <th>陆晋</th>
        <th>谭某某</th>
        <th>估损预约维修</th>
        <th>299</th>
        <th>299</th>
        <th>退款中</th>
        <th>没有理由</th>
        <th>2017-03-09 18：55</th>
        <th><el-button type="info">退款</el-button>
            <el-button type="info" @click="open">驳回</el-button>
        </th>   
      </tr>
    </table>
=======
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
>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
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
<<<<<<< HEAD
      value:''
    }
  },
  methods:{
      handleClick() {
        alert('button click');
      },
      open() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
      
    }
=======
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
>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
}
</script>

<style>
<<<<<<< HEAD
  .el-input {
    width: 250px;
    margin-right: 10px;
  }
=======
>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
  h1 {
    text-align: left;
    border-bottom: 1px solid black;
  }
  .search {
<<<<<<< HEAD
   float: left;
 }
  .el-dropdown {
    vertical-align: top;
    
=======
    float: left;
  }
  .el-dropdown {
    vertical-align: top;
>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
<<<<<<< HEAD
  table {
    width: 90%;

  }
</style>
=======
  .el-table {
    height: 400px;
  }
  .el-paginatio {
    margin-top: 20px;
  }
</style>
>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
