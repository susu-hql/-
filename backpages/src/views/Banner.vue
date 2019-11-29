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
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td class="table-icon"><i class="el-icon-edit"></i>
              <i class="el-icon-view"></i>         
              <i class="el-icon-delete"></i>         
          </td>
        </tr>
        
      <div class="block">
  <span class="demonstration">页数较少时的效果</span>
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
<div class="block">
  <span class="demonstration">大于 7 页时的效果</span>
  <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</div>
      </table>
    
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
    height: 400px;
    border: 1px solid black;
  }
  .table-icon i{
    margin: 10px;
  }
  .pagenation {
    width: 80px;
    height: 40px;
  }
  
</style>