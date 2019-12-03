<template>
  <div class="door">
    <h1>4S店管理</h1>
    <div class="search">
      <el-input v-model="input" placeholder="请输入要查询的4S店名"></el-input>
      <el-button type="primary" icon="el-icon-search">查询</el-button>
    </div>
    <br><el-button type="primary" plain class="addDate">添加4S店<i class="el-icon-plus"></i></el-button>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="编号" width="120">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column prop="doorName" label="店铺名称" width="120"> </el-table-column>
      <el-table-column prop="major" label="主修车型" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="sale" label="店铺折扣" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="adress" label="地址" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="state" label="是否签约" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="handle" label="操作" show-overflow-tooltip> 
        <template slot-scope="scope">
          <el-button size="mini"  @click="handleEdit(scope.$index, scope.row)">修改</el-button>     
          <el-button size="mini" type="danger"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>     
        </template>
      </el-table-column>
    </el-table>
    <el-pagination middle layout="prev, pager, next" :total="100"> </el-pagination>
  </div>
</template>

<script>

export default {
  name: 'door',
  components: {
  },
  data(){
    return {
      tableData:[{
        id:'1',
        doorName: '成都晨得保汽车',
        sortName:'机场燕宝',
        marjor:'奔驰',
        sale:'工时0折',
        adress:'成都市双流区双流机场',
        state:'已签约',
        handle:''
      },{
        id:'1',
        doorName: '成都晨得保汽车',
        sortName:'机场燕宝',
        marjor:'奔驰',
        sale:'工时0折',
        adress:'成都市双流区双流机场',
        state:'已签约',
        handle:''
      },{
        id:'1',
        doorName: '成都晨得保汽车',
        sortName:'机场燕宝',
        marjor:'奔驰',
        sale:'工时0折',
        adress:'成都市双流区双流机场',
        state:'已签约',
        handle:''
      },{
        id:'1',
        doorName: '成都晨得保汽车',
        sortName:'机场燕宝',
        marjor:'奔驰',
        sale:'工时0折',
        adress:'成都市双流区双流机场',
        state:'已签约',
        handle:''
      }]
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
  .el-table {
    height: 400px;
  }
 .el-pagination{
   margin-top: 20px;

 }

</style>
