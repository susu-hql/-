<template>
  <div class="contents">
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
  .car-name  {
    width: 60%;
    margin-left: 20%;
    border: 1px solid black;
  }
  th,td {
    border-bottom: 1px solid black; 
  }
  .block {
    margin-top: 10px;
  } 
</style>
