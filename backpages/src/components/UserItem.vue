<template>
  <!-- <div class="userItem"> -->
    <tr>
      <td class="userid">{{info.userid}}</td>
      <td class="username">{{info.name}}</td>
      <td class="tel">12547895442</td>
      <td class="time">2019-09-1-27 24：10</td>
      <td class='operate'> 
          <el-button type="primary" icon="el-icon-edit" circle @click='modify(info.userid)' title="修改" :disabled='isdisable'></el-button>
          <el-button type="success" icon="el-icon-view" circle @click='look(info.userid)' title="查看" :disabled='isdisable'></el-button>
          <el-button type="warning" :icon="icons" circle  @click='lock' :title="islock" ></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click='del(info.userid)' title="删除" :disabled='isdisable'></el-button>
      </td>
    </tr>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'UserItem',
  data (){
    return {
      islock:'锁定',
      icons:'el-icon-lock',
      isdisable:false
    }
  },
  props:['info'],
  methods:{
    modify:function(i){
      location.assign('/modifyuser?userid='+i);
      console.log('修改');
    },
    look:function(i){
      location.assign('/lookuser?userid='+i);
      console.log('查看');
    },
    lock:function(){
      if(this.islock == '锁定'){
        this.islock = '解锁';
        this.icons = 'el-icon-lock';
        this.isdisable = true;
        this.$message({
          message: '已锁定',
          type: 'success'
        });
      }else{
        this.islock = '锁定';
        this.icons = 'el-icon-unlock';
        this.isdisable = false; 
        this.$message({
          message: '已解锁',
          type: 'success'
        });
      }
      console.log('锁定');
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
        padding:10px 35px;
        border-bottom: 1px solid rgb(187, 181, 181);
      }
    }
</style>
