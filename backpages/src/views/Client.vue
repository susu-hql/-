<template>
  <div class="client">
      <h1>用户管理</h1>
      <el-input v-model="search" placeholder="请输入内容" clear="search-input"></el-input>
      <el-button class="search-button" type="primary" @click='searchOrder'>查询</el-button>
      <el-button class="addUser-button" type="warning" @click="addUser">
        <span class="el-icon-plus"> 添加用户</span>
      </el-button>
      <table> 
          <tr class="table-th">
            <td>ID</td>
            <td>用户名</td>
            <td>手机号</td>
            <td>最后登录时间</td>
            <td>操作</td>
          </tr>
          <UserItem v-for="(item,index) in userList" :key="index" :info='item'></UserItem>
      </table>
      <div class="block">
        <el-pagination
          layout="prev, pager, next"
          :total="20" :page-size="5">
        </el-pagination>
      </div>
  </div>
</template>

<script>
import UserItem from '@/components/UserItem.vue'

export default {
  name: 'client',
  data(){
    return {
      search:'',
      userList:[{name:'微微一笑很倾城'},{name:'lucy'},{name:'lucy'},{name:'lucy'},{name:'lucy'}]
    }
  },
  components: {
    UserItem
  },
  methods:{
   searchOrder:function(){
     console.log('查询');
   },
   addUser:function(){
     console.log('添加用户');
     location.replace('/adduser');
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
      height: 100%;
      overflow-x: hidden;
      overflow-y: scroll;
      margin-right: -17px;

  h1{
    text-align: left;
    border-bottom: 1px solid rgb(161, 158, 158);
  }
  .el-input{
    width: 300px;
  }
  .search-button{
    width: 100px;
    margin-left: 30px;
  }
  .addUser-button{
    display: block;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  table{
    text-align: center;
    border-spacing: 0px;

    .table-th{
      background: @themColor;
      color: white; 
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
    td{
      padding:0 35px;
    }
    tr{
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
      
  }
  .block{
    margin: 0 auto;
    text-align: center;
    margin-top: 20px;
  }
}

</style>
