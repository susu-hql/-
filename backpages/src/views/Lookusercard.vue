<template>
  <div class="lookusercard">
    <h1>查看车主卡</h1>
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
                 <el-form-item label="品牌型号：" prop="carbrandtype" aria-colspan="2" >
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
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="商业险到期日：" required> 
                    <el-form-item prop="SinsuranDate">
                      <el-date-picker placeholder="选择日期" v-model="ruleForm.SinsuranDate" disabled></el-date-picker>
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
                <!-- 输入框  -->
                <el-form-item label="发动机号：" prop="engineNumber">        
                  <el-input v-model="ruleForm.engineNumber" disabled></el-input>
                </el-form-item>
            </td>
            <td>
              <el-form-item label="行驶证附件：" required > 
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :name="imgName"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove" disabled>
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <!-- <img width="100%" src="http://qqpublic.qpic.cn/qq_public/0/0-3032902438-A14BB9800C13B72A186194167B8FC000/0?fmt=jpg&size=114&h=695&w=700&ppv=1.jpg" alt=""> -->
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
import { Message } from 'element-ui'

export default {
  name:'lookusercard',
  data() {
      return {
        imgName:'',
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
    },
    getUserCardInfo(){
       this.axios  
          .post("/back/getCardByCarNum",{
            carNum:this.$route.query.carNum
          }) 
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") {
                this.ruleForm.name = res.data.data.userName;
                this.ruleForm.engineNumber = res.data.data.carEngineNum;
                this.ruleForm.SinsuranDate = res.data.data.commercialInsuranceDate;
                this.ruleForm.JinsuranDate= res.data.data.compulsoryInsuranceDate;
                this.ruleForm.FinsuranDate= res.data.data.createTime;
                this.ruleForm.carNumber= res.data.data.carNum
                this.ruleForm.usertel= res.data.data.ownerTel;
                this.ruleForm.cardId= res.data.data.ownerPid;
                this.ruleForm.carbrandtype.yi= res.data.data.carStyle;
                this.ruleForm.carbrandtype.er= res.data.data.carBrand;
                this.ruleForm.carbrandtype.san= res.data.data.carSeries;
                // this.imgName= require("http://172.17.4.226:8080/upload/2019/12/04/37b662b7613f447283241f135926ec4d.jpg");
                // this.dialogImageUrl= require("res.data.data.carOwnerUrl");
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
    this.getUserCardInfo();
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
      width: 160px;
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