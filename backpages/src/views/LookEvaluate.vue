<template>
  <div class="lookEvaluate">
    <h1>查看司机评论详情</h1>
    <div class="addUser-body">

      <el-form   label-width="100px"
       class="demo-ruleForm" enctype="multipart/form-data" >
        <table>
          <tr>
            <td>
               <el-form-item label="订单编号：">   
                  {{orderId}}  
                </el-form-item>
            </td>
          </tr>
          <tr>
              <td> 
                <!-- 输入框  -->
                <el-form-item label="司机姓名：" >        
                  {{name}}
                </el-form-item>
              </td> 
          </tr>
          <tr>
            <td>
               <el-form-item label="总星数：">   
                  <el-rate
                    v-model="start"
                    disabled
                    show-score
                    text-color="#ff9900">
                  </el-rate>
                </el-form-item>
            </td>
            <td> 
            </td>
          </tr>
          <tr>
            <td colspan="2" class="desc">
                <!-- 输入框  -->
                <el-form-item label="评论：" >        
                  {{desc}}
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="评论时间：" >        
                  {{time}}
                </el-form-item>
            </td>
          </tr>
        </table>
     
        <!-- 按钮 -->
        <el-form-item class="button-group">
          <el-button type="primary" @click="re">返回</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'

export default {
  name:'lookEvaluate',
  data() {
      return {
        time:'',
        orderId: '201911281574927145699311',
        name:'覃友宏',
        start:3.4,
        desc:'体验很好，服务很周到，下次会再次光临体验很好，服务很周到，下次会再次光临体验很好，服务很周到，下次会再次光临'
      };
  },
  methods:{
    re:function(){
      location.assign('/evaluate');
    } ,
    getElvInfo:function(){
      console.log(this.$route.query.commId,this.$route.query.orderType)
      this.axios  
          .post("/back/Comments/selectById.do",{
            orderId:this.$route.query.orderId,
            orderType:this.$route.query.orderType
          })  
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") {
                this.orderId = res.data.data[0].orderId;
                this.name = res.data.data[0].driverName
                this.start = res.data.data[0].commStar
                this.desc = res.data.data[0].commRemark
                this.time = res.data.data[0].commTime
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
    }
  },
  created(){
    this.getElvInfo();
    // console.log(this.$rom  ute.query.commId);
  }
}
</script>

<style lang="less" scoped>
.lookEvaluate{

  h1{
    text-align: left;
    border-bottom: 1px solid rgb(161, 158, 158);
  }
  
  .el-form{
    text-align: left;
    margin-left:80px;
    margin-top: 30px;

    table{

      td{
        padding-right: 100px;
        width: 300px;
      }
      
      .desc{
        text-indent: 20px;
      }
    }

    .el-input,
    .el-select,
    .el-date-editor{
      width: 200px;
    }
    .el-textarea{
      width: 300px;
    }
    .brand{
      width: 90px;
      margin-right: 10px;
    }

    .button-group{
      text-align: center;
    }
    .el-button{
      margin-right: 100px;
      margin-top: 30px;
    }
 
  }
  
}
</style>