<template>
  <!-- <div class="userItem"> -->
    <tr>
      <td class="userid">{{info.userid}}</td>
      <td class="username">{{info.name}}</td>
      <td class="tel">12547895442</td>
      <td class="carNum">在职</td>
      <td class="lTime">2019-09-1-27</td>
      <td class='operate'>  
          <el-button type="primary" icon="el-icon-edit" circle @click='modify(info.userid)' title="修改" ></el-button>
          <el-button type="success" icon="el-icon-view" circle @click='look(info.userid)' title="查看" ></el-button>
         <el-button type="danger" icon="el-icon-delete" circle @click='del(info.userid)' title="删除"></el-button>
      </td>
    </tr>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'DriverItem',
  data (){
    return {
    }
  },
  props:['info'],
  methods:{
    modify:function(i){
      location.assign('/modifydriver?userid='+i);
      console.log('修改');
    },
    look:function(i){
      location.assign('/lookdriver?userid='+i);
      console.log('查看');
    },
    del:function(i){
      console.log('删除'+i);
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
          //  =============== 删除 ===============
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
  },
  mounted(){

  },
  created(){
    
  }
}
</script>


<style scoped lang="less">

   .operate{
        min-width: 230px;
    }
    tr{
      height: 50px;
      line-height: 50px;
      text-align: center;
      td{
        padding:10px 25px;
        border-bottom: 1px solid rgb(187, 181, 181);
      }
    }
</style>
