<template> 
  <div class="insurance">
    <div class="insur">
      <h1>保险管理</h1>
    </div> 
    <div class="form">
      <input type="text" v-model="search" placeholder="请输入要查询用户名或手机号" />
      <el-button type="primary" @click="searchOrder">查询</el-button>
    </div>
    <div class="addBtn">
       <el-button type="warning" @click="addpolicy">+ 添加保单</el-button>
    </div>
    <div class="table">
      <!-- <el-table :data="tableData" style="width: 100%" class="tab">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table> -->
      <table>
          <tr class="table-th">
            <td>被保险人姓名</td>
            <td>手机号</td>
            <td>交强起始时间</td>
            <td>交强终止时间</td>
            <td>商业起始时间</td>
            <td>商业终止时间</td>
            <td>保险价格</td>
            <td>获得积分</td>
            <td>操作</td>
          </tr>
          <InsuranceItem v-for="(item,index) in tableData" :key="index" :item='item'></InsuranceItem>
          
      </table>
    </div>
    <div class="block">
      <el-pagination
          layout="prev, pager, next" v-if="isShow"
          :total="total" :page-size="limit" :current-page='page'
          @prev-click='pre'  @next-click='next'>
      </el-pagination>
    </div>
  </div>
</template>

<script>

import { Message } from 'element-ui'
import InsuranceItem from '@/components/InsuranceItem.vue'

export default {
  name: "insurance",
  components: {InsuranceItem},
  data() {
    return {
      isShow:true,
      search:'',
      companyList:'',
      total:1,   // 一共多少条
      page:1,   //当前第几页
      limit:5   ,// 每页多少条
      tableData: [
        {
          name: "王小虎",
          phone: "13458475952",
          dateStartstrength: "2016-05-02",
          dateEndstrength: "2016-05-02",
          businessStarttime: "2016-05-02",
          businessEndtime: "2016-05-02",
          price:"11500.23元",
          integral:"66690"
        },
        {
          name: "王小牛",
          phone: "13458475952",
          dateStartstrength: "2016-05-02",
          dateEndstrength: "2016-05-02",
          businessStarttime: "2016-05-02",
          businessEndtime: "2016-05-02",
          price:"11500.23元",
          integral:"66690"
        },
        {
          name: "王小兔",
          phone: "13458475952",
          dateStartstrength: "2016-05-02",
          dateEndstrength: "2016-05-02",
          businessStarttime: "2016-05-02",
          businessEndtime: "2016-05-02",
          price:"11500.23元",
          integral:"66690"
        },
        {
          name: "王小马",
          phone: "13458475952",
          dateStartstrength: "2016-05-02",
          dateEndstrength: "2016-05-02",
          businessStarttime: "2016-05-02",
          businessEndtime: "2016-05-02",
          price:"11500.23元",
          integral:"66690"
        },
        {
          name: "王小羊",
          phone: "13458475952",
          dateStartstrength: "2016-05-02",
          dateEndstrength: "2016-05-02",
          businessStarttime: "2016-05-02",
          businessEndtime: "2016-05-02",
          price:"11500.23元",
          integral:"66690"
        }
      ],
    };
  },
  methods:{
    searchOrder:function(){
      console.log('查询');
    },
    addpolicy:function(){
      location.replace('/AddPolicy');
    },
    getCompanyList(){
        this.axios  
          .post("/back/Company/list",{
             page:this.page,    //当前页
            limit:this.limit ,  //每页显示多少条
          })
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") { 
              console.log(1)
            } else {
              Message({
                message: "账号已过时，请重新登录",
                type: "error",
                showClose: true
              })
            }
          })
          .catch(err => {
            console.log(err);
          });

    },
    pre:function(){  //上一页
      this.page --;
      this.getCompanyList();
    },
    next:function(){  //上一页
        this.page ++;
        this.getCompanyList();
    },
  },
  created(){
    this.getCompanyList();
  }
};
</script>

<style lang="less" scoped>
  .insur,.form{
    text-align: left;
  }
  table{
    font-size:14px;
  }
  .form input{
    width: 300px;
    height: 40px;
  }
  .form button{
    width: 100px;
    height: 40px;
    margin-left: 30px;
  }
  .addBtn{
    text-align: left;
  }
  h1{
    border-bottom: 1px solid rgb(161, 158, 158);
  }
  table{
    text-align: center;
    border-spacing: 0px;

    .table-th{
      background: #63ADDE;
      color: white; 
      height: 50px;
      line-height: 5px;
      text-align: center;
    }
    td{
      padding:0 20px;
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
</style>
