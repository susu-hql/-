<template>
  <!-- <div class="userItem"> -->
    <tr>
      <td class="userid">{{info.commId}}</td>
      <td class="username">{{info.userName}}</td>
      <td class="username">{{info.driverName}}</td>
      <td class="tel">{{info.userTel}}</td>
      <td class="carNum">
        <el-rate 
          v-model="info.commStar"
          disabled
          show-score
          text-color="#ff9900">
        </el-rate>
      </td>
      <td >
        <p class="desc">{{info.commRemark}}</p>
        </td>
      <td class="lTime">{{info.commTime}}</td>
      <td class='operate'>  
          <el-button type="success" icon="el-icon-view" circle @click='look(info.orderId,info.orderType)' title="查看详情" ></el-button>
         <el-button type="danger" icon="el-icon-delete" circle @click='del(info.commId)' title="删除"></el-button>
      </td>
    </tr>
  <!-- </div> -->
</template>

<script>
import { Message,MessageBox } from 'element-ui'

export default {
  name: 'EvaluateItem',
  data (){
    return {
    }
  },
  props:['info'],
  methods:{
    look:function(i,a){
      location.assign('/lookEvaluate?orderId='+i+'&&orderType='+a);
      console.log('查看');
    },
    del:function(i){
      console.log('删除'+i);

      MessageBox.confirm(
        "此操作将永久删除该用户, 是否继续?"
      )
      .then(() => {
        
        this.axios  
          .post("/back/Comments/delete.do",{
            commId: i
          }) 
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") {
                Message({
                  message: "删除成功!",
                  type: "success",
                  showClose: true
                })
                location.reload();
            }else{
              Message({
                  message: "删除失败!",
                  type: "erro",
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
  mounted(){

  },
  created(){
    
  }
}
</script>


<style scoped lang="less">

   .operate{
        min-width: 210px;
    }
    tr{
      font-size: 14px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      td{
        padding:10px 10px;
        border-bottom: 1px solid rgb(187, 181, 181);
      }
      td:nth-child(1){
        min-width: 70px;
      }
      td:nth-child(2){
        min-width: 70px;
      }
      .desc{
        // border:1px solid red;
        width: 150px;
        overflow: hidden;
        white-space: nowrap;  //强制文本在一行内显示
        text-overflow: ellipsis; //当对象内文本溢出时显示省略标记
      }
    }
</style>
