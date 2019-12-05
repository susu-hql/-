<template>
  <div class="lookuser">
    <h1>查看用户</h1>
    <div class="addUser-body">

      <el-form label-width="100px" class="demo-ruleForm">
        <table> 
          <tr>
            <td>
                <!-- 输入框  --> 
                <el-form-item label="联系人：" >        
                  <el-input v-model="userInfo.userName" disabled></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="车牌号：">        
                  <el-input v-model="userInfo.carNum" disabled></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="联系电话：" >        
                  <el-input v-model="userInfo.userTel" disabled></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="车型：" prop="cartype">        
                  <el-input v-model="userInfo.carStyle" disabled></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="身份证号：" prop="cardId">        
                  <el-input v-model="userInfo.userIdcard" disabled></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="发动机号：" prop="engineNumber">        
                  <el-input v-model="userInfo.carEngineNum" disabled></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="被保险人：" prop="insuranName">        
                  <el-input v-model="userInfo.insurancePerson" disabled></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 日期  -->
                <el-form-item label="投保日期：" required> 
                    <el-form-item >
                      <el-date-picker type="date" placeholder="选择日期" v-model="userInfo.insuranceDate" disabled></el-date-picker>
                    </el-form-item>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 下拉框  -->
                <el-form-item label="保险公司：" >   
                  <el-select v-model="userInfo.companyName" placeholder="请选择活动区域" disabled>
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
                  <!-- 多行文本 -->
                  <el-form-item label="备注：" >
                    <el-input  type="textarea" v-model="userInfo.userNotes" disabled></el-input>
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
  name:'lookuser',
  data() {
      return {
        userInfo:{}
      };
  },
  methods:{
    re(){
      location.assign('/client');
    },
    getUserInfo(){
      this.axios  
          .post("/back/getUserById",{
              id:this.$route.query.userid
          }) 
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") {
              this.userInfo = res.data.data;
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
    }
  }, 
  created(){
    // 获取到 了 用户id ，然后渲染  直接给ruleForm赋值
    // console.log(this.$route.query.userid);
    this.getUserInfo();
  }
}
</script>

<style lang="less" scoped>
.lookuser{

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