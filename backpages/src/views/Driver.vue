<template>
  <div class="driver">
      <h1>司机管理</h1>
      <el-input v-model="search" placeholder="请输入要查询的司机姓名或手机号" clear="search-input"></el-input>
      <el-button class="search-button" type="primary" @click='searchOrder'>查询</el-button>
      <el-button class="addUserCard-button" type="warning" @click="addDriver">
        <span class="el-icon-plus" > 添加车司机</span>
      </el-button>
      <table> 
          <tr class="table-th">
            <td>ID</td> 
            <td>司机名</td>
            <td>手机号</td>
            <td>在职状态</td>
            <td>最后登录时间</td>
            <td>操作</td>
          </tr>
          <DriverItem v-for="(item,index) in userList" :key="index" :info='item'></DriverItem>
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

import DriverItem from '@/components/DriverItem.vue'
export default {
  name: 'driver',
 data(){
    return {
      search:'',
      userList:[{userid:'1',name:'微微一笑很倾城'},{userid:'2',name:'lucy'},{userid:'3',name:'lucy'},{userid:'4',name:'lucy'},{userid:'5',name:'lucy'}]
    }
  },
  components: {
    DriverItem
  },
  methods:{
   searchOrder:function(){
     console.log('查询');
   },
   addDriver:function(){
     console.log('添加司机');
     location.assign('/adddriver');
   }
  },
  created(){
    
  }
}
</script> 

<style lang="less" scoped>
@import '../assets/style/base.less';

.driver{
  text-align: left;
      height: 100%;
      // overflow-x: hidden;
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
  .addUserCard-button{
    display: block;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  table{
    font-size: 16px;
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
      // padding:0 10px;
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
