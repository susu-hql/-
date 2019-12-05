<template> 
  <div class="thirdParty">
    <div class="insur">
      <h1>保险公司管理</h1>
    </div> 
    <div class="addBtn">
       <el-button type="warning" @click="addpolicy">+ 添加保险公司</el-button>
    </div>
    <div class="table">
      <table>
          <tr class="table-th">
            <td>编号</td>
            <td>公司名称</td>
            <td>公司短称</td>
            <td>公司报案电话</td>
            <td>是否支持垫付</td>
            <td>地址</td>
            <td>操作</td>
          </tr>
          <ThirdItem v-for="(item,index) in tableData" :key="index" :item='item'></ThirdItem>
          
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
import ThirdItem from '@/components/ThirdItem.vue'

export default {
  name: "thirdParty",
  components: {ThirdItem},
  data() {
    return {
      isShow:true,
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
              this.tableData = res.data.data.list;
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
    
    td:nth-child(1){
      min-width: 50px;
    }
    td:nth-child(2){
      min-width: 90px;
    }
    td:nth-child(3){
      min-width: 80px;
    }
    td:nth-child(4){
      min-width: 105px;
    }
    td:nth-child(5){
      min-width: 105px;
    }
    td:nth-child(6){
      min-width: 50px;
    }
    td:nth-child(7){
      min-width: 230px;
    }
    td{
      padding:0 20px;
    }
      
  }
  .block{
    margin: 0 auto;
    text-align: center;
    margin-top: 20px;
  }
</style>
