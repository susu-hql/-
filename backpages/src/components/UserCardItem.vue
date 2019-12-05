<template>
  <!-- <div class="userItem"> -->
    <tr>
      <td class="userid">{{info.userId}}</td>
      <td class="username">{{info.userName}}</td>
      <td class="tel">{{info.userTel}}</td>
      <td class="tel">{{info.ownerName}}</td>
      <td class="carNum">{{info.carNum}}</td>
      <td class="fTime">{{info.carRegistTime}}</td>
      <td class="jTime">{{info.compulsoryInsuranceDate}}</td>
      <td class="sTime">{{info.commercialInsuranceDate}}</td>
      <td class='operate'> 
          <!-- <el-button type="primary" icon="el-icon-edit" circle @click='modify(info.userId)' title="修改" :disabled='isdisable'></el-button> -->
          <el-button type="success" icon="el-icon-view" circle @click='look(info.carNum)' title="查看" :disabled='isdisable'></el-button>
         <!-- <el-button type="danger" icon="el-icon-delete" circle @click='del(info.userId)' title="删除" :disabled='isdisable'></el-button> -->
      </td>
      <td> 
         <el-button :type="color" @click='modify(info.carNum,info.cardId)' >{{info.stateName}}</el-button>
      </td>
    </tr>
  <!-- </div> -->
</template>

<script>
import { Message,MessageBox } from 'element-ui'

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
    modify:function(i,a){
      location.assign('/modifyusercard?carNum='+i+'&&cardId='+a);
      console.log('修改');
    },
    look:function(i){ 
      location.assign('/lookusercard?carNum='+i);
      console.log('查看');
    },
    del:function(i){

      MessageBox.confirm(
        "此操作将永久删除该用户, 是否继续?"
      )
      .then(() => {
        this.axios  
          .post("/back/updatDateState",{
            id:i
          }) 
          .then(res => {
            console.log("删除",res.data);
            if (res.data.state == "200") {
              Message({
                  message: "删除成功!",
                  type: "success",
                  showClose: true
              })
              location.reload();
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

      }).catch(() => {
        Message({
          message: "已取消删除!",
          type: "info",
          showClose: true
        })       
      });
    },
  },
  created(){
  }
}
</script>


<style scoped lang="less">

   .operate{
        min-width: 130px;
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
