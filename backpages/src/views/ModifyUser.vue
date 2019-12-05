<template>
  <div class="modifyuser">
    <h1>修改用户</h1>
    <div class="addUser-body">

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <table>  
          <tr>
            <td>
                <!-- 输入框  --> 
                <el-form-item label="联系人：" prop="name">        
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="车牌号：" prop="carNumber">        
                  <el-input v-model="ruleForm.carNumber"></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="联系电话：" prop="usertel">        
                  <el-input v-model="ruleForm.usertel"></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="车型：" prop="cartype">        
                  <el-input v-model="ruleForm.cartype"></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="身份证号：" prop="cardId">        
                  <el-input v-model="ruleForm.cardId"></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="发动机号：" prop="engineNumber">        
                  <el-input v-model="ruleForm.engineNumber"></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="被保险人：" prop="insuranName">        
                  <el-input v-model="ruleForm.insuranName"></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 日期  -->
                <el-form-item label="投保日期：" required> 
                    <el-form-item prop="insuranDate">
                      <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.insuranDate" ></el-date-picker>
                    </el-form-item>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 下拉框  -->
                <el-form-item label="保险公司：" prop="insurance">   
                  <el-select v-model="ruleForm.insurance" placeholder="请选择活动区域">
                    <el-option v-for="(item,index) in insuranceList" :key = 'index' :label="item.companyName" :value="item.companyId"></el-option>
                  </el-select>
                </el-form-item>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
                  <!-- 多行文本 -->
                  <el-form-item label="备注：" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                  </el-form-item>
            </td>
          </tr>
        </table>
     
        <!-- 按钮 -->
        <el-form-item class="button-group">
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'

export default {
  name:'modifyuser',
  data() {
      // 电话号码验证
      var Telpat = /^1(3|4|5|6|7|8|9)\d{9}$/ ;
      var validateTel = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入电话号码'));
        }else if( !Telpat.test(this.ruleForm.usertel) ){
          callback( new Error('请输入正确的电话号码'));
        } else {
          callback();
        }
      };

      // 用户名验证：2到11位（汉字，字母，数字，下划线，减号）
      var Usernamepat =  /^([a-zA-Z0-9_\u4e00-\u9fa5]{2,11})$/ ;
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        }else if( !Usernamepat.test(this.ruleForm.name) ){
          callback( new Error('请输入正确的用户名'));
        } else {
          callback();
        }
      };

      // 车牌号验证    粤Z1234港  字 大写字母 大写字母
      var carNumberpat = /(^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$)/;
      var validateCarNum = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入车牌号'));
        }else if( !carNumberpat.test(this.ruleForm.carNumber) ){
          callback( new Error('请输入正确的车牌号'));
        } else {
          callback();
        }
      };

      // 身份证号验证
      var cardidpat = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      var validateCardid = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入身份证号'));
        }else if( !cardidpat.test(this.ruleForm.cardId) ){
          callback( new Error('请输入正确的身份证号'));
        } else {
          callback();
        }
      };

      // 用户名验证：2到11位（字母，数字，下划线，减号）
      var insuranNamepat =  /^([a-zA-Z0-9_\u4e00-\u9fa5]{2,11})$/;
      var validateinsuranName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入投保人'));
        }else if( !insuranNamepat.test(this.ruleForm.insuranName) ){
          callback( new Error('请输入正确的投保人姓名'));
        } else {
          callback();
        }
      };

      return {
        userInfo:{},
        insuranceList:[],
        ruleForm: {
          name: '',
          insurance: '',
          insuranDate: '',
          desc: '',
          carNumber:'',
          usertel:'',
          cartype:'',
          cardId:'',
          engineNumber:'',
          insuranName:''
        },
        rules: {
          name: [  // 用户名
            { required: true, validator:validateName,  trigger: 'blur' },
          ],
          carNumber: [   // 车牌号
            { required: true, validator:validateCarNum,  trigger: 'blur' },
          ],
          usertel: [   // 联系电话
            {required: true, validator: validateTel, trigger: 'blur' }
          ],
          cartype: [   //车型
            { required: true, message: '请输入车型', trigger: 'blur' }
          ],
          cardId: [   //身份证号
            { required: true, validator: validateCardid, trigger: 'blur' }
          ],
          engineNumber: [   //发动机号
            { required: true, message: '请输入车型', trigger: 'blur' }
          ],
          insuranName: [   //被 保险人
            { required: true, validator:validateinsuranName, trigger: 'blur' }
          ],
          insurance: [   // 保险公司
            { required: true, message: '请选择保险公司', trigger: 'change' }
          ],
          insuranDate: [
            { required: true, message: '请选择日期', trigger: 'change' }
          ],
          desc: [
            { required: false, message: '', trigger: 'blur' }
          ]
        }
      };
  },
  methods:{
      // 保存
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 对象  ============ 保存--异步：向数据库修改 =======================
            console.log(this.ruleForm);
            this.axios  
              .post("/back/updateUser",{
                    userName: this.ruleForm.name,
                    userTel:this.ruleForm.usertel,
                    userIdcard:this.ruleForm.cardId,
                    insurancePerson:this.ruleForm.insuranName,
                    companyName: this.ruleForm.insurance,
                    insuranceDate: this.ruleForm.insuranDate,
                    userNotes: this.ruleForm.desc,
                    carNum:this.ruleForm.carNumber,
                    carStyle:this.ruleForm.cartype,
                    carEngineNum:this.ruleForm.engineNumber
            })
            .then(res => {
              console.log('4s店',res.data);
              if (res.data.state == "200") {
                // console.log(obj);
                Message({
                  message: "修改成功",
                  type: "success",
                  showClose: true
                })
              } else {
                Message({
                  message: "请求出错",
                  type: "error",
                  showClose: true
                })
              }
            })
            .catch(err => {
              console.log(err);
            });
              // this.ruleForm = {
              //   name: '',
              //   insurance: '',
              //   insuranDate: '',
              //   desc: '',
              //   carNumber:'',
              //   usertel:'',
              //   cartype:'',
              //   cardId:'', 
              //   engineNumber:'',
              //   insuranName:''
              // }
              Message({
                  message: "修改成功",
                  type: "success",
                  showClose: true
              })
          } else {
            return false;
          }
        });
      },
      // 取消
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
              this.ruleForm.name = res.data.data.userName;
              this.ruleForm.insurance = res.data.data.userName
              this.ruleForm.insuranDate= res.data.data.insuranceDate;
              this.ruleForm.desc= res.data.data.companyName;
              this.ruleForm.carNumber= res.data.data.carNum;
              this.ruleForm.usertel= res.data.data.userTel;
              this.ruleForm.cartype= res.data.data.carStyle;
              this.ruleForm.cardId= res.data.data.userIdcard;
              this.ruleForm.engineNumber= res.data.data.carEngineNum;
              this.ruleForm.insuranName= res.data.data.insurancePerson;
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
      },
      getinsuranceList(){
        this.axios  
          .post("/back/getCompany") 
          .then(res => {
            console.log("保险类比：",res.data);
            if (res.data.state == "200") {
              this.insuranceList = res.data.data;
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
      // 获取到 了 用户id  ===============================然后渲染   直接给ruleForm赋值
      // console.log(this.$route.query.userid);
      this.getUserInfo();
      this.getinsuranceList();
    }
}
</script>

<style lang="less" scoped>
.modifyuser{

  h1{
    text-align: left;
    border-bottom: 1px solid rgb(161, 158, 158);
  }
  
  .el-form{
    text-align: left;
    margin-left:80px;
    margin-top: 30px;


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