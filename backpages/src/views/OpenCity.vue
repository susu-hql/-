<template>
  <div class="openCity">
    <h1>开通城市</h1>
    <div class="btn"><el-button type="primary" plain @click="addCity">开通城市<i class="el-icon-plus"></i></el-button></div>
    <el-table :data="cityList" style="width: 100%">
      <el-table-column prop="openId" label="编号" width="180"> </el-table-column>
      <el-table-column prop="openCity" label="城市名称" width="180"> </el-table-column>
      <el-table-column prop="handle" label="删除"> 
        <template slot-scope="scope">
          <el-button size="mini"  @click="handleChange(scope.row.openId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
import { Message,MessageBox } from 'element-ui'

export default {
  name: 'openCity',
  components: {
  },
  data() {
        return {
          cityList:[],
          tableData: [{
            id: '1',
            cityName: '成都',
            handle: ''
          }]
        }
  },
  methods: {
      handleChange(i) {
        console.log(i);
        MessageBox.confirm(
              "此操作将永久删除该用户, 是否继续?"
            )
            .then(() => {
              this.axios  
                .post("/back/openCity/delete.do",{
                  open_id: i 
                })
                .then(res => {
                  console.log(res.data);
                  if (res.data.state == "200") { 
                    Message({
                      message: "删除成功",
                      type: "success",
                      showClose: true
                    })
                    location.reload();
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

            }).catch(() => {
              Message({
                message: "已取消删除!",
                type: "info",
                showClose: true
              })       
          });

      },
      getCityList(){
        this.axios  
          .get("/back/city/list1")
          .then(res => {
            console.log('4s店区域',res.data.data);
            if (res.data.state == "200") {
                this.cityList = res.data.data
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
      },
      addCity(){
        location.assign('addCity')
      }
  },
  created(){
    this.getCityList();
  }
}
</script>

<style>
h1 {
  text-align: left;
}
.btn {
  text-align: left;
}
.el-table {
  height: 400px;
}

</style>
