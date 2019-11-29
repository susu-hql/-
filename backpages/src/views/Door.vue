<template>
  <div class="door">
    <h1>4S店管理</h1>
    <div class="search">
      <el-input v-model="input" placeholder="请输入要查询的4S店名"></el-input>
      <el-button type="primary" icon="el-icon-search">查询</el-button>
    </div>
    <br><el-button type="primary" plain class="addDate">添加汽车品牌<i class="el-icon-plus"></i></el-button>
    <table>
      <tr>
        <th><el-checkbox v-model="checked"></el-checkbox></th>
        <th>编号</th>
        <th>店铺名称</th>
        <th>短名称</th>
        <th>店铺主修车型</th>
        <th>店铺折扣</th>
        <th>区域</th>
        <th>地址</th>
        <th>是否签约</th>
        <th>操作</th>
      </tr>
      <tr>
        <td><el-checkbox v-model="checked"></el-checkbox></td>
        <td>1024</td>
        <td>成都高新区四轮车修理公司 </td>
        <td>中和奔驰店</td>
        <td>四轮车</td>
        <td>工时0折</td>
        <td>高新区</td>
        <td>成都市高新区中和镇</td>
        <td>已签约</td>
        <td><el-button type="info" plain>修改</el-button>
        <el-button type="info" plain>删除</el-button></td>
      </tr>
      <tr>
        <td><el-checkbox v-model="checked"></el-checkbox></td>
        <td>1024</td>
        <td>成都高新区四轮车修理公司 </td>
        <td>中和奔驰店</td>
        <td>四轮车</td>
        <td>工时0折</td>
        <td>高新区</td>
        <td>成都市高新区中和镇</td>
        <td>已签约</td>
        <td><el-button type="info" plain>修改</el-button>
        <el-button type="info" plain>删除</el-button></td>
      </tr>
      <tr>
        <td><el-checkbox v-model="checked"></el-checkbox></td>
        <td>1024</td>
        <td>成都高新区四轮车修理公司 </td>
        <td>中和奔驰店</td>
        <td>四轮车</td>
        <td>工时0折</td>
        <td>高新区</td>
        <td>成都市高新区中和镇</td>
        <td>已签约</td>
        <td><el-button type="info" plain>修改</el-button>
        <el-button type="info" plain>删除</el-button></td>
      </tr>
      <tr>
        <td><el-checkbox v-model="checked"></el-checkbox></td>
        <td>1024</td>
        <td>成都高新区四轮车修理公司 </td>
        <td>中和奔驰店</td>
        <td>四轮车</td>
        <td>工时0折</td>
        <td>高新区</td>
        <td>成都市高新区中和镇</td>
        <td>已签约</td>
        <td><el-button type="info" plain>修改</el-button>
        <el-button type="info" plain>删除</el-button></td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'door',
  components: {
  },
  data() {
    return {
      input: '',
      checked: false
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
 .addDate {
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
  }
  table {
    width: 100%;
  }
</style>
