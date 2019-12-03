<template>
  <!-- <div class="userItem"> -->
    <tr>
      <td class="userid">{{info.userid}}</td>
      <td class="username">{{info.name}}</td>
      <td class="tel">12547895442</td>
      <td class="carNum">川FS2356</td>
      <td class="fTime">2019-09-1-27</td>
      <td class="jTime">2019-09-1-27</td>
      <td class="sTime">2019-09-1-27</td>
      <td class='operate'> 
          <el-button type="primary" icon="el-icon-edit" circle @click='modify(info.userid)' title="修改" :disabled='isdisable'></el-button>
          <el-button type="success" icon="el-icon-view" circle @click='look(info.userid)' title="查看" :disabled='isdisable'></el-button>
         <el-button type="danger" icon="el-icon-delete" circle @click='del(info.userid)' title="删除" :disabled='isdisable'></el-button>
      </td>
      <td>
         <el-button :type="color" @click='verify'  >{{isverify}}</el-button>
      </td>
    </tr>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'UserCardItem',
  data (){
    return {
      color:'warning',
      isverify:'',
      verifyState: 0 , // 模拟数据库的审核状态  0 待审核  1 通过审核  2 未通过审核
      icons:'el-icon-lock',
      isdisable:false
    }
  },
  props:['info'],
  methods:{
    modify:function(i){
      location.assign('/modifyusercard?userid='+i);
      console.log('修改');
    },
    look:function(i){
      location.assign('/lookusercard?userid='+i);
      console.log('查看');
    },
    verify:function(){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        cancelButtonText: '驳回请求',
        confirmButtonText: '通过审核',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '通过审核!'
        });
        this.isverify='审核通过'
        this.color ='primary'
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已驳回审核请求'
        }); 
        this.isverify='审核未通过'    
        this.color = 'danger'     
      });
      console.log('审核');
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
    // 获取审核状态 
    // this.verifyState = 
    if( this.verifyState == 0){  // 0 待审核  1 通过审核  2 未通过审核
      this.isverify = '待审核'
    }else if( this.verifyState == 1 ){
      this.isverify = '通过审核'
      this.color = 'primary'
    }else {
      this.isverify = '未通过审核'
      this.color = 'danger'
    }
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
        padding:10px 15px;
        border-bottom: 1px solid rgb(187, 181, 181);
      }
    }
</style>
