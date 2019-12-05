<template>
  <!-- <div class="userItem"> -->
    <tr>
      <td class="userid">{{info.driverId}}</td>
      <td class="username">{{info.driverName}}</td>
      <td class="tel">{{info.driverTel}}</td>
      <td class="carNum">{{info.stateName}}</td>
      <td class="lTime">{{info.driverLaistLoginTime}}</td>
      <td class='operate'>  
          <el-button type="primary" icon="el-icon-edit" circle @click='modify(info.driverId)' title="修改" ></el-button>
          <el-button type="success" icon="el-icon-view" circle @click='look(info.driverId)' title="查看" ></el-button>
         <el-button type="danger" icon="el-icon-delete" circle @click='del(info.driverId)' title="删除"></el-button>
      </td>
    </tr>
  <!-- </div> -->
</template>

<script>
import { Message,MessageBox } from 'element-ui'

export default {
  name: 'DriverItem',
  data (){
    return {
      isState:''
    }
  },
  props:['info'],
  methods:{
    modify:function(i){
      location.assign('/modifydriver?driverid='+i);
      console.log('修改');
    },
    look:function(i){
      location.assign('/lookdriver?driverid='+ i);
      console.log('查看');
    },
    del:function(i){
      console.log('删除'+i);
      MessageBox.confirm(
        "此操作将永久删除该用户, 是否继续?"
      )
      .then(() => {
        Message({
          message: "删除成功!",
          type: "success",
          showClose: true
        })
      }).catch(() => {
        Message({
          message: "已取消删除!",
          type: "info",
          showClose: true
        })       
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
