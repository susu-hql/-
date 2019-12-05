<template>
  <div class="settings">
    <h1>管理员管理</h1>
    <div class="search">
      <el-input v-model="input" placeholder="请输入要查询的账号"></el-input>
      <el-button type="primary" icon="el-icon-search">查询</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="管理员账号" width="180"> </el-table-column>
      <el-table-column prop="time" label="上次登陆时间" width="180"> </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="enable" label="是否可用"> </el-table-column>
      <el-table-column prop="change" label="操作"> 
         <template slot-scope="scope">
          <el-button size="mini" type="info" @click="handleChange(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini"  type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination middle layout="prev, pager, next" :total="100"> </el-pagination>
    </div>
</template>

<script>

export default {
  name: 'settings',
  components: {
  },
  data(){
    return {
        restaurants: [],
        state: '',
        timeout:  null,
        tableData: [{
            id: '20161047011',
            time: '2016-05-04',
            email: 'fay_chou@163.com',
            enable: '1',
            change:''
          },{
            id: '20161047011',
            time: '2016-05-04',
            email: '1599378@163.com',
            enable: '1',
            change:''
          },{
            id: '20161047011',
            time: '2016-05-04',
            email: '1599378@163.com',
            enable: '1',
            change:''
          },{
            id: '20161047011',
            time: '2016-05-04',
            email: '18782232@163.com',
            enable: '1',
            change:''
          },{
            id: '20161047011',
            time: '2016-05-04',
            email: '297963972@com',
            enable: '1',
            change:''
          }
        ]
    }
  },
  methods: {
    loadAll() {
      return [
      
      ];
    },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      },
      handleChange(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }, 
    mounted() {
      this.restaurants = this.loadAll();
    }
}
</script>

<style>
h1 {
  text-align: left;
}
.el-input {
  width: 200px;
}
.search {
  float: left;
}
.el-button {
  height: 40px;
  margin-top: -30px;
  margin-left: 10px;

}
.el-table {
  height: 400px;
}
.el-pagination {
  margin-top: 20px;
}
</style>
