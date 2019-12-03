<template>
  <div class="door">
    <h1>4S店管理</h1>
    <div class="search">
      <el-input v-model="input" placeholder="请输入要查询的4S店名"></el-input>
      <el-button type="primary" icon="el-icon-search">查询</el-button>
    </div>
<<<<<<< HEAD
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
=======
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
>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
  </div>
</template>

<script>

export default {
  name: 'door',
  components: {
  },
<<<<<<< HEAD
  data() {
    return {
      input: '',
      checked: false
    }
  }

=======
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
  
>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
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
<<<<<<< HEAD
  table {
    width: 100%;
  }
=======
  .el-table {
    height: 400px;
  }
 .el-pagination{
   margin-top: 20px;

 }

>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
</style>
