<template>
  <div class="contents">
    <h1>汽车品牌</h1>
    <el-button type="primary" plain class="addDate" @click="addDate">添加汽车品牌<i class="el-icon-plus"></i></el-button>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="brandId" label="编号" width="180"> </el-table-column>
      <el-table-column prop="brandName" label="汽车品牌" width="180"> </el-table-column>
      <el-table-column prop="handle" label="操作" width="180"> 
        <template slot-scope="scope">
          <el-button size="mini"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
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

export default {
  name: 'contents',
  components: {
  },
  data() {
    return {
      isShow:true,
      total:1,   // 一共多少条
      page:1,   //当前第几页
      limit:5   ,// 每页多少条
      checked: false,
      tableData:[{
          id:'1',
          car:'奔驰',
          handle:''
        },{
          id:'2',
          car:'宝马',
          handle:''
        },{
          id:'3',
          car:'奥迪',
          handle:''
        },{
          id:'4',
          car:'大众',
          handle:''
        },{
          id:'5',
          car:'福特',
          handle:''
      }]
    }
  },
  methods:{
    addDate(){
      location.assign('/addBrand');
      console.log('增加');
    },
    handleEdit(index,row){
      console.log(index,row)
    },
    getContent:function(){    // 获取所有的估损预约订单
     this.axios  
          .post("/back/carBrand/findAll",{
            page:this.page,    //当前页
            limit:this.limit ,  //每页显示多少条
          })
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") {
              this.tableData = res.data.data.list;
              this.total = res.data.data.total;   //总共多少页
              if(this.tableData==''){
                  console.log('空');
                  this.isShow = false;
                }else{
                  this.isShow  = true;
                }
            } else {
              Message({
                  message: "账号已过时，请重新登录修改成功",
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
      this.getContent();
   },
   next:function(){  //上一页
      this.page ++;
      this.getContent();
   },
    
  },
  created(){
    this.getContent();
  }
}
</script>

<style lang="less" scoped>
@import '../assets/style/base.less';
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
  .el-table {
    height: 400px;
  }
  .block {
    margin-top: 10px;
  } 
  .el-table .has-gutter th{
    background: #63ADDE!important;
  }
</style>
