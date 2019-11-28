<template>
  <div class="client">
      <h1>用户管理</h1>
      <el-input v-model="search" placeholder="请输入内容" clear="search-input"></el-input>
      <el-button type="primary" @click='searchOrder'>查询</el-button>
      <table>
         <tr>
            <td>ID</td>
            <td>用户名</td>
            <td>手机号</td>
            <td>最后登录时间</td>
            <td>操作</td>
          </tr>
          <tr>
            <td>1</td>
            <td>微微一笑很倾城</td>
            <td>12547895442</td>
            <td>2019-09-1-27 24：10</td>
            <td class='operate'> 
                <span class='modify '>修改</span>
                <span class='look '>查看</span>
                <span class='lock ' >锁定</span>
                <span class='del ' >删除</span>
            </td>
          </tr>
      </table>
  </div>
</template>

<script>

export default {
  name: 'client',
  data(){
    return {
      search:''
    }
  },
  components: {
  },
  methods:{
   searchOrder:function(){
     console.log('查询');
   }
  },
  created(){
    
  }
}
</script> 

<style lang="less" scoped>
@import '../assets/style/base.less';

.client{
  text-align: left;

  h1{
    text-align: left;
    border-bottom: 1px solid rgb(161, 158, 158);
  }
  .el-input{
    width: 300px;
  }
  .el-button{
    width: 100px;
    margin-left: 30px;
  }
  table{
    text-align: center;

    tr:nth-child(1){
      background: @themColor;
      color: white;
    }
    tr{
      height: 40px;
      line-height: 40px;
      text-align: center;

      td{
        padding:0 20px;
      }
      .operate{
          min-width: 230px;
      }
    }
  }
}

</style>
