<template>
  <div class="insurance">
    <div class="insur">
      <h1>保险管理</h1>
    </div>
    <div class="form">
      <input type="text" placeholder="请输入要查询用户名或手机号" />
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
          <tr v-for="(item,index) in tableData" :key="index" :info='item'>
            <td>{{item.name}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.dateStartstrength}}</td>
            <td>{{item.dateEndstrength}}</td>
            <td>{{item.businessStarttime}}</td>
            <td>{{item.businessEndtime}}</td>
            <td>{{item.price}}</td>
            <td>{{item.integral}}</td>
            <td>
              <el-button type="primary" icon="el-icon-edit" circle @click='modify' title="修改" :disabled='isdisable'></el-button>
              <el-button type="success" icon="el-icon-view" circle @click='look' title="查看" :disabled='isdisable'></el-button>
              <el-button type="warning" :icon="icons" circle  @click='lock' :title="islock" ></el-button>
              <el-button type="danger" icon="el-icon-delete" circle @click='del' title="删除" :disabled='isdisable'></el-button>
            </td>
          </tr>
      </table>
    </div>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="20" :page-size="5">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "insurance",
  components: {},
  data() {
    return {
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
      islock:'锁定',
      icons:'el-icon-lock',
      isdisable:false
    };
  },
  methods:{
    modify:function(){
     console.log('修改');
    },
    look:function(){
      console.log('查看');
    },
    lock:function(){
      if(this.islock == '锁定'){
        this.islock = '解锁';
        this.icons = 'el-icon-lock';
        this.isdisable = true;
      }else{
        this.islock = '锁定';
        this.icons = 'el-icon-unlock';
        this.isdisable = false; 
      }
      console.log('锁定');
    },
    del:function(){
      console.log('删除');
    },
    addpolicy:function(){
      location.replace('/AddPolicy');
    },
    searchOrder:function(){
      console.log('查询');
    }
  }
};
</script>

<style lang="less" scoped>
  .insur,.form{
    text-align: left
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
      padding:0 10px;
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
