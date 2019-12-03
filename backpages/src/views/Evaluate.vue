<template>
  <div class="evaluate">
      <h1>司机评价</h1>
      <el-input v-model="search" placeholder="请输入要查询的客户名、司机姓名、手机号" clear="search-input"></el-input>
      <el-button class="search-button" type="primary" @click='searchOrder'>查询</el-button>
      <!-- <el-button class="addUserCard-button" type="warning" @click="addDriver">
        <span class="el-icon-plus" > 添加车司机</span>
      </el-button> -->
      <table> 
          <tr class="table-th">
            <td>订单编号</td> 
            <td>客户名</td>
            <td>司机名</td>
            <td>客户手机号</td>
            <td>总星数</td>
            <td>备注</td>
            <td>评论时间</td>
            <td>操作</td>
          </tr>
          <EvaluateItem v-for="(item,index) in userList" :key="index" :info='item'></EvaluateItem>
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

import EvaluateItem from '@/components/EvaluateItem.vue'
export default {
  name: 'evaluate',
 data(){
    return {
      search:'',
      userList:[{userid:'1245757875574',name:'覃友宏' , desc:'体验很好，服务很周到，下次会再次光临',start:3.4},
      {userid:'2754545457575757',name:'lucy' , desc:'体验很好，服务很周到，下次会再次光临',start:3.4},
      {userid:'3',name:'lucy' , desc:'体验很好，服务很周到，下次会再次光临',start:3.4},
      {userid:'4',name:'lucy' , desc:'体验很好，服务很周到，下次会再次光临',start:3.4},
      {userid:'5',name:'lucy' , desc:'体验很好，服务很周到，下次会再次光临',start:3.4}]
    }
  },
  components: {
    EvaluateItem
  },
  methods:{
   searchOrder:function(){
     console.log('查询');
   },
  //  addDriver:function(){
  //    console.log('添加司机');
  //    location.assign('/adddriver');
  //  }
  },
  created(){
    
  }
}
</script> 

<style lang="less" scoped>
@import '../assets/style/base.less';

.evaluate{
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
