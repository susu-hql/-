<template>
  <div class="lookusercard">
    <h1>添加用户</h1>
    <div class="addUser-body">

      <el-form :model="ruleForm" ref="ruleForm" label-width="100px"
       class="demo-ruleForm" enctype="multipart/form-data" >
        <table>
          <tr> 
            <td> 
                <!-- 输入框  -->
                <el-form-item label="用户名：" prop="name">        
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
                <el-form-item label="身份证号：" prop="cardId">        
                  <el-input v-model="ruleForm.cardId" disabled></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 下拉框  -->
                 <el-form-item label="品牌型号：" prop="carbrandtype">
                  <el-select v-model="ruleForm.carbrandtype.yi" placeholder="品牌" class="brand" disabled>
                    <el-option label="区域一" value="shanghai"></el-option>
                  </el-select>
                  <el-select v-model="ruleForm.carbrandtype.er" placeholder="系列" class="brand" disabled>
                    <el-option label="区域一" value="shanghai"></el-option>
                  </el-select>
                  <el-select v-model="ruleForm.carbrandtype.san" placeholder="版本" class="brand" disabled>
                    <el-option label="区域一" value="shanghai"></el-option>
                  </el-select>
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
                <el-form-item label="商业险到期日：" required> 
                    <el-form-item prop="SinsuranDate">
                      <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.SinsuranDate" disabled></el-date-picker>
                    </el-form-item>
                </el-form-item>
            </td>
            <td>
                <!-- 日期  -->
                <el-form-item label="交强险到期日：" required> 
                    <el-form-item prop="JinsuranDate">
                      <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.JinsuranDate" disabled></el-date-picker>
                    </el-form-item>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 日期  -->
                <el-form-item label="车辆初登日期：" required > 
                    <el-form-item prop="FinsuranDate">
                      <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.FinsuranDate" disabled></el-date-picker>
                    </el-form-item>
                </el-form-item>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <el-form-item label="行驶证附件：" required > 
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove" disabled>
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                  </el-dialog>
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
  name:'lookusercard',
  data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        ruleForm: {
          name: '',
          FinsuranDate: '',
          carNumber:'',
          usertel:'',
          cardId:'',
          engineNumber:'',
          SinsuranDate:'',
          JinsuranDate:'',
          carbrandtype:{yi:'',er:'',san:''},   // 品牌型号
        }
      };
  },
  methods:{
    re(){
      location.assign('/usercard');
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  
  }
}
</script>

<style lang="less" scoped>
.lookusercard{

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
    .brand{
      width: 60px;
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