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
}
</script>

<style>
  .el-input {
    width: 250px;
    margin-right: 10px;
  }
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
  table {
    width: 90%;

  }
</style>
