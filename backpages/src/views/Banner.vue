<template>
  <div class="banner">
    <h1>Banner管理</h1>
    <el-button type="primary" plain class="addDate">添加数据<i class="el-icon-plus"></i></el-button>
    
   <el-table :data="tableData"  style="width: 100%">
    <el-table-column label="编号">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column label="轮播图">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          {{ scope.row.pic }}
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    
      <el-table-column label="标题">
        <template slot-scope="scope">
          <a href="javascript:;">{{scope.row.title}}</a>
        </template>
      </el-table-column>
      <el-table-column label="点击量">
        <template slot-scope="scope">
          <span>{{scope.row.click}}</span>
        </template>
      </el-table-column>
      <el-table-column label="添加时间">
        <template slot-scope="scope">
          <span>{{scope.row.addDate}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250px">
        <template slot-scope="scope">
          <el-button size="mini"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="info" @click="handlevisible(scope.$index, scope.row)">可见</el-button>
          <el-button size="mini"  type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
  </el-table>
  <el-pagination middle layout="prev, pager, next" :total="100"> </el-pagination>
    
  </div>
</template>


<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.13.0/lib/index.js"></script>
<script>
export default {
  name:'banner',
  components: {
  },
  data() {
    return {
      tableData: [{
          id: '20160502',
          pic: '',
          title: '阳光小白马',
          click:'123',
          addDate:'2017-05-08'
        }, {
          id: '20160504',
          pic: '',
          title: '阳光小白马',
          click:'123',
          addDate:'2017-05-08'
        }]
    }
  },
  methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleVisible(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }

}

</script>



<style>
 @import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
  h1 {
    text-align: left;
    border-bottom: 1px solid black; 
  }
  .addDate {
    display: flex;
    justify-content: flex-start;
    margin: 10px;
  }
  .el-table {
    height: 400px;
  }
  .table-icon i{
    margin: 10px;
  }
  .pagenation {
    width: 80px;
    height: 40px;
  }
  .block {
    margin-top: 10px;
  }
  .el-pagination {
    margin-top: 20px;
  }
</style>