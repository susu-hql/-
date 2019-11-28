<template>
  <div class="banner">
    <h1>Banner管理</h1>
    <el-button type="primary" plain class="addDate">添加数据<i class="el-icon-plus"></i></el-button>
    
      <table class="table">
        <tr>
          <th>编号</th>
          <th>轮播图</th>
          <th>标题</th>
          <th>点击量</th>
          <th>添加事件</th>
          <th>操作</th>
        </tr>
        <tr>
          <td>1</td>
          <td> <img src="" alt=""></td>
          <td><a href="javascript:;"><span>banner对应的标题</span></a></td>
          <td>1000</td>
          <td>time</td>
          <td class="table-icon">
              <el-button type="primary" icon="el-icon-edit" circle title="编辑"></el-button>
              <el-button type="success" icon="el-icon-view" circle title="可见性" background="green"></el-button>
              <el-button type="danger" icon="el-icon-delete" circle title="删除"></el-button>        
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td> <img src="" alt=""></td>
          <td><a href="javascript:;"><span>banner对应的标题</span></a></td>
          <td>1000</td>
          <td>time</td>
          <td class="table-icon">
              <el-button type="primary" icon="el-icon-edit" circle title="编辑"></el-button>
              <el-button type="success" icon="el-icon-view" circle title="可见性"></el-button>
              <el-button type="danger" icon="el-icon-delete" circle title="删除"></el-button>                      
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td> <img src="" alt=""></td>
          <td><a href="javascript:;"><span>banner对应的标题</span></a></td>
          <td>1000</td>
          <td>time</td>
          <td class="table-icon">
              <el-button type="primary" icon="el-icon-edit" circle title="编辑"></el-button>
              <el-button type="success" icon="el-icon-view" circle title="可见性"></el-button>
              <el-button type="danger" icon="el-icon-delete" circle title="删除"></el-button>       
          </td>
        </tr>
      </table>
      <div class="block">
        <span class="demonstration"></span>
        <el-pagination layout="prev, pager, next"  :total="50" page-size="5" hide-on-single-page="true" pager-count="5">
        </el-pagination>
      </div>
    
  </div>
</template>


<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.13.0/lib/index.js"></script>
<script>
export default {
  name:'banner',
  components: {
  },

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
  .table {
    width: 100%;
    height: 350px;
    border: 1px solid black;
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
</style>