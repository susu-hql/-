<template>
  <div class="door">
    <h1>4S店管理</h1>
    <div class="search">
      <el-input v-model="input" placeholder="请输入要查询的4S店名"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="search" >查询</el-button>
    </div>
    <br><el-button type="primary" plain class="addDate" @click="addDoor">添加4S店<i class="el-icon-plus"></i></el-button>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="编号" width="120">
        <template slot-scope="scope">{{ scope.row.shopId }}</template>
      </el-table-column>
      <el-table-column prop="servicshopName" label="店铺名称" width="120"> </el-table-column>
      <el-table-column prop="brandName" label="主修车型" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="servicshopNameDiscount" label="店铺折扣" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="stateName" label="是否签约" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="handle" label="操作" show-overflow-tooltip> 
        <template slot-scope="scope">
          <el-button size="mini"  @click="handleEdit(scope.$index, scope.row)">修改</el-button>     
          <el-button size="mini" type="danger"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>     
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-pagination middle layout="prev, pager, next" :total="100"> </el-pagination> -->
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
import { Message,MessageBox } from 'element-ui'

export default {
  name: 'door',
  components: {
  },
  data(){
    return {
      isShow:true,
      DoorList:[],
      total:1,   // 一共多少条
      page:1,   //当前第几页
      limit:4   ,// 每页多少条
      input:'',
      tableData:[]
    }
  },
  methods:{
    search(){
      this.getDoorList();
    },
    addDoor:function(){
      console.log('增加');
    },
    handleDelete:function(x,y){
      console.log('删除',x,y.shopId);
      MessageBox.confirm(
        "此操作将永久删除该用户, 是否继续?"
      )
      .then(() => {

        this.axios  
          .post("/back/serviceShop/delete.do",{
              shopId: y.shopId
          }) 
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") {
              Message({
                message: "删除成功",
                type: "error",
                showClose: true
              })
              location.reload();
            } else {
              Message({
                message: "请求出错",
                type: "error",
                showClose: true
              })
            }
          })
          .catch(err => {
            console.log(err);
          });

      }).catch(() => {
        Message({
          message: "已取消删除!",
          type: "info",
          showClose: true
        })       
      });
    },
    handleEdit:function(x,y){
      console.log('删除',x,y);
    },
    getDoorList:function(){
      console.log(this.input)
      this.axios  
          .post("/back/serviceShop/findAll",{
             page:this.page,    //当前页
             limit:this.limit ,  //每页显示多少条
             servicshopName:this.input
          }) 
          .then(res => {
            console.log(res.data.data);
            if (res.data.state == "200") {
                this.tableData = res.data.data.list;
                this.total = res.data.data.total;
            }else{
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
      this.getDoorList();
    },
    next:function(){  //上一页
        this.page ++;
        this.getDoorList();
    },
  },
  created(){
    this.getDoorList();
  }
  
}
</script>

<style>
 .el-input {
   width: 250px;
   margin-right: 10px;
 }
 h1 {
   text-align: left;
   border-bottom: 1px solid black;
 }
 .search {
   float: left;
 }
 .addDate {
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
  }
  .el-table {
    height: 400px;
  }
 .el-pagination{
   margin-top: 20px;

 }

</style>
