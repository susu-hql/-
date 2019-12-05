<template>
  <tr>
    <td>{{item.companyId}}</td>
    <td>{{item.companyName}}</td>
    <td>{{item.companySname}}</td>
    <td>{{item.companyPhone}}</td>
    <td>{{item.companyPayment}}</td>
    <td>{{item.companyAddress}}</td>
    <td>  
      <!-- <el-button type="primary" icon="el-icon-edit" circle @click='modify' title="修改" :disabled='isdisable'></el-button>
      <el-button type="success" icon="el-icon-view" circle @click='look' title="查看" :disabled='isdisable'></el-button>
      <el-button type="warning" :icon="icons" circle  @click='lock' :title="islock" ></el-button> -->
      <el-button type="danger" icon="el-icon-delete" circle @click='del(item.companyId)' title="删除" :disabled='isdisable'></el-button>
    </td>
  </tr>
</template>


<script>
import { Message,MessageBox } from 'element-ui'
export default {
  name:'InsuranceItem',
  data(){
    return {
      islock:'锁定',
      icons:'el-icon-lock',
      isdisable:false
    }
  },
  props:['item'],
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
      del:function(i){
        console.log('删除',i);
          MessageBox.confirm(
              "此操作将永久删除该用户, 是否继续?"
            )
            .then(() => {
              this.axios  
                .post("/back/Company/delete.do",{
                  companyId: i 
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
  }
}
</script>

<style>

</style>
