<template>
  <div class="openCity">
    <h1>开通城市</h1>
    <el-button type="primary" plain >开通城市<i class="el-icon-plus"></i></el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="编号" width="180"> </el-table-column>
      <el-table-column prop="cityName" label="城市名称" width="180"> </el-table-column>
      <el-table-column prop="handle" label="操作"> 
        <template slot-scope="scope">
          <el-button size="mini"  @click="handleEdit(scope.$index, scope.row.handleChange)">修改</el-button>
            
          
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>

export default {
  name: 'openCity',
  components: {
  },
  data() {
        return {
          tableData: [{
            id: '1',
            cityName: '成都',
            handle: ''
          }]
        }
  },
  methods: {
      handleChange(index, row) {
        console.log(index, row);
      }
  }
}
</script>

<style>
h1 {
  text-align: left;
}
.el-button {
  float: left;
}
.el-table {
  height: 400px;
}

</style>
