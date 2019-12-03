<template>
  <div class="contents">
<<<<<<< HEAD
      <h1>汽车品牌</h1>
      <el-button type="primary" plain class="addDate">添加汽车品牌<i class="el-icon-plus"></i></el-button>
      <table class="car-name">
        <tr>
          <th>编号</th>
          <th>汽车品牌</th>
          <th>操作</th>
        </tr>
        <tr>
          <td>10</td>
          <td>奔驰</td>
          <td><el-button type="info" plain>修改</el-button></td>
        </tr>
        <tr>
          <td>10</td>
          <td>奔驰</td>
          <td><el-button type="info" plain>修改</el-button></td>
        </tr>
        <tr>
          <td>10</td>
          <td>奔驰</td>
          <td><el-button type="info" plain>修改</el-button></td>
        </tr>
        <tr>
          <td>10</td>
          <td>奔驰</td>
          <td><el-button type="info" plain>修改</el-button></td>
        </tr>
        <tr>
          <td>10</td>
          <td>奔驰</td>
          <td><el-button type="info" plain>修改</el-button></td>
        </tr>
        <tr>
          <td>10</td>
          <td>奔驰</td>
          <td><el-button type="info" plain>修改</el-button></td>
        </tr>
        <tr>
          <td>10</td>
          <td>奔驰</td>
          <td><el-button type="info" plain>修改</el-button></td>
        </tr>
      </table>
=======
    <h1>汽车品牌</h1>
    <el-button type="primary" plain class="addDate">添加汽车品牌<i class="el-icon-plus"></i></el-button>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="编号" width="180"> </el-table-column>
      <el-table-column prop="car" label="汽车品牌" width="180"> </el-table-column>
      <el-table-column prop="handle" label="操作" width="180"> 
        <template slot-scope="scope">
          <el-button size="mini"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
      <div class="block">
        <span class="demonstration"></span>
        <el-pagination layout="prev, pager, next"  :total="50" page-size="5" hide-on-single-page="true" pager-count="5">
        </el-pagination>
      </div>
  </div>
</template>

<script>

export default {
  name: 'contents',
  components: {
  },
  data() {
    return {
      input: '',
      checked: false,
      tableData:[{
        id:'1',
        car:'奔驰',
        handle:''
      },{
        id:'2',
        car:'宝马',
        handle:''
      },{
        id:'3',
        car:'奥迪',
        handle:''
      },{
        id:'4',
        car:'大众',
        handle:''
      },{
        id:'5',
        car:'福特',
        handle:''
      }]

    }
  },
  methods:{
    handleEdit(index,row){
      console.log(index,row)
    }
    
  }
}
</script>

<style>
  h1 {
    text-align: left;
    border-bottom: 1px solid black; 
  }
  .addDate {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px
  }
<<<<<<< HEAD
  .car-name  {
    width: 60%;
    margin-left: 20%;
    border: 1px solid black;
  }
  th,td {
    border-bottom: 1px solid black; 
=======
  .el-table {
    height: 400px;
>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
  }
  .block {
    margin-top: 10px;
  } 
<<<<<<< HEAD
=======

>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
</style>
