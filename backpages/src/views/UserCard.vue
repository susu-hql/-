<template>
  <div class="usercard">
      <h1>车主卡</h1>
      <el-input v-model="search" placeholder="请输入要查询的用户名姓名或手机号或者车牌号" clear="search-input"></el-input>
      <el-button class="search-button" type="primary" @click='searchOrder'>查询</el-button>
      <el-button class="addUserCard-button" type="warning" @click="addUserCard">
        <span class="el-icon-plus" > 添加车主卡</span>
      </el-button>
      <table> 
          <tr class="table-th">
            <td>ID</td> 
            <td>用户名</td>
            <td>手机号</td>
            <td>车牌号</td>
            <td>车辆初登日期</td>
            <td>交强险到日期</td>
            <td>商业险到日期</td>
            <td>操作</td>
            <td>审核状态</td>
          </tr>
          <UserCardItem v-for="(item,index) in userList" :key="index" :info='item'></UserCardItem>
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
import UserCardItem from '@/components/UserCardItem.vue'
// import { mapState } from 'vuex'

export default {
  name: 'usercard',
  data(){
    return {
      search:'',
      userList:[{userid:'1',name:'微微一笑很倾城'},{userid:'2',name:'lucy'},{userid:'3',name:'lucy'},{userid:'4',name:'lucy'},{userid:'5',name:'lucy'}]
    }
  },
  components: {
    UserCardItem
  },
  methods:{
   searchOrder:function(){
     console.log('查询');
   },
   addUserCard:function(){
     console.log('添加车主卡');
     location.assign('/addUserCard');
   }
  },
  created(){
    
  }
}
</script> 

<style lang="less" scoped>
@import '../assets/style/base.less';

.usercard{
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
    font-size: 12px;
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
