<template>
  <div class="lookuser">
    <h1>查看用户</h1>
    <div class="addUser-body">

      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <table>
          <tr>
            <td>
                <!-- 输入框  --> 
                <el-form-item label="联系人：" prop="name">        
                  <el-input v-model="ruleForm.name" disabled></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="车牌号：" prop="carNumber">        
                  <el-input v-model="ruleForm.carNumber" disabled></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="联系电话：" prop="usertel">        
                  <el-input v-model="ruleForm.usertel" disabled></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="车型：" prop="cartype">        
                  <el-input v-model="ruleForm.cartype" disabled></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="身份证号：" prop="cardId">        
                  <el-input v-model="ruleForm.cardId" disabled></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="发动机号：" prop="engineNumber">        
                  <el-input v-model="ruleForm.engineNumber" disabled></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="被保险人：" prop="insuranName">        
                  <el-input v-model="ruleForm.insuranName" disabled></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 日期  -->
                <el-form-item label="投保日期：" required> 
                    <el-form-item prop="insuranDate" >
                      <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.insuranDate" disabled></el-date-picker>
                    </el-form-item>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 下拉框  -->
                <el-form-item label="保险公司：" prop="insurance">   
                  <el-select v-model="ruleForm.insurance" placeholder="请选择活动区域" disabled>
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
                  <el-form-item label="备注：" prop="desc">
                    <el-input  type="textarea" v-model="ruleForm.desc" disabled></el-input>
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

export default {
  name:'lookuser',
  data() {
      return {
        ruleForm: {
          name: 'dd',
          insurance: '',
          insuranDate: '',
          desc: '',
          carNumber:'',
          usertel:'',
          cartype:'',
          cardId:'',
          engineNumber:'',
          insuranName:''
        }
      };
  },
  methods:{
    re(){
      location.assign('/client');
    }
  },
  created(){
    // 获取到 了 用户id ，然后渲染  直接给ruleForm赋值
    console.log(this.$route.query.userid);
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