<template>
  <div class="modifyusercard">
    <h1>修改车主卡</h1>
    <div class="addUser-body">

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
       class="demo-ruleForm" enctype="multipart/form-data">
        <table>
          <tr> 
            <td> 
                <!-- 输入框  -->
                <el-form-item label="用户名：" prop="name">        
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
                <el-form-item label="身份证号：" prop="cardId">        
                  <el-input v-model="ruleForm.cardId"></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 下拉框  -->
                 <el-form-item label="品牌型号：" prop="carbrandtype">
                  <el-select v-model="ruleForm.carbrandtype.yi" placeholder="品牌" class="brand" @input='getSeries'>
                    <el-option v-for="(item,index) in brandList" :key = 'index' :label="item" :value="index+1"></el-option>
                  </el-select>
                  <el-select v-model="ruleForm.carbrandtype.er" placeholder="系列" class="brand" @input="getCarVersion">
                     <el-option v-for="(item,index) in seriesList" :key = 'index' :label="item" :value="index+1"></el-option>
                  </el-select>
                  <el-select v-model="ruleForm.carbrandtype.san" placeholder="版本" class="brand">
                     <el-option v-for="(item,index) in carVersion" :key = 'index' :label="item" :value="index"></el-option>
                  </el-select>
                </el-form-item>
            </td>
           
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="商业险到期日：" > 
                    <el-form-item prop="SinsuranDate">
                      <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.SinsuranDate" ></el-date-picker>
                    </el-form-item>
                </el-form-item>
            </td>
            <td>
                <!-- 日期  -->
                <el-form-item label="交强险到期日：" > 
                    <el-form-item prop="JinsuranDate">
                      <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.JinsuranDate" ></el-date-picker>
                    </el-form-item>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 日期  -->
                <el-form-item label="车辆初登日期："  > 
                    <el-form-item prop="FinsuranDate">
                      <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.FinsuranDate" ></el-date-picker>
                    </el-form-item>
                </el-form-item>
            </td>
            <td></td>
          </tr>
          <tr>
             <td>
                <!-- 输入框  -->
                <el-form-item label="发动机号：" prop="engineNumber">        
                  <el-input v-model="ruleForm.engineNumber"></el-input>
                </el-form-item>
            </td>
            <td>
              <el-form-item label="行驶证附件：" required > 
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
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
        <el-form-item class="button-group" v-if="handleStateName == '待审核'">
          <el-button type="danger" @click="refuse">审核不通过</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">通过审核</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
        <el-form-item class="button-group" v-else-if ="handleStateName == '通过审核'">
          <el-button type="primary" @click="resetForm('ruleForm')" title="返回">审核已通过，点击返回</el-button>
        </el-form-item>
        <el-form-item class="button-group" v-else-if ="handleStateName == '未通过审核'">
          <el-button type="danger" @click="resetForm('ruleForm')">未通过审核，点击返回</el-button>
        </el-form-item>

      </el-form> 

    </div>
  </div>
</template>

<script>
import { Message ,MessageBox} from 'element-ui'

export default {
  name:'modifyusercard',
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


      return {
        handleStateName:'待审核',
        brandList:'',
        seriesList:'',
        carVersion:'',
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
          SinsuranDate: [   //商业险到期日期
            { required: true , message: '请选择日期', trigger: 'change' }
          ],
          JinsuranDate: [   //较强险到期日期
            { required: true, message: '请选择日期', trigger: 'change' }
          ],
          carbrandtype: [   // 汽车品牌
            { required: true, message: '请选择汽车品牌', trigger: 'change' }
          ],
          FinsuranDate: [
            {  required: true, message: '请选择日期', trigger: 'change' }
          ]
        }
      };
  },
  methods:{
      // 未通过审核   
      refuse(){
        console.log('审核未通过')
        MessageBox.confirm(
              "此操作将拒绝该车主卡通过审核, 是否继续?"
            )
            .then(() => {
              this.changState(2);
              this.del();
              Message({
                message: "该审核未通过!",
                type: "success",
                showClose: true
              })
            }).then(()=>{
              // location.assign('/usercard');
            }).catch(() => {
              Message({
                message: "已取消拒绝该请求!",
                type: "info",
                showClose: true
              })       
            });
      },  // 传参没反应  ================
      changState(state){
        this.axios  
            .post("/back/updateCarCard",{
              id : this.$route.query.cardId,
              cardState : state
            })
            .then(res => {
              console.log(res.data);
              if (res.data.state == "200") { 
                console.log(1)
                location.assign('/usercard');
              } else {
                Message({
                  message: "操作失败",
                  type: "error",
                  showClose: true
                })
              }
            })
            .catch(err => {
              console.log(err);
            });
      },
      // 审核通过
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid || 1==1) {
            this.changState(1);
            Message({
                  message: "审核通过",
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
        location.assign('/usercard');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      getCarBrand(){
        this.axios  
          .post("/back/getCarBrand")
          .then(res => {
            console.log('品牌',res.data);
            if (res.data.state == "200") {
                this.brandList = res.data.data;
                // console.log(this.brandList)
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
      },
      getSeries(){
        this.axios  
          .post("/back/getSeries",{
            carBrandId:this.ruleForm.carbrandtype.yi
          })
          .then(res => {
            console.log('系列',res.data);
            if (res.data.state == "200") {
                this.seriesList = res.data.data;
                // console.log(this.brandList)
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
      },
      getCarVersion(){
        this.axios  
          .post("/back/getCarVersion",{
            seriesId:this.ruleForm.carbrandtype.er
          })
          .then(res => {
            console.log('品牌',res.data);
            if (res.data.state == "200") {
                this.carVersion = res.data.data;
                // console.log(this.brandList)
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
      },
      getUserCardInfo(){
       this.axios  
          .post("/back/getCardByCarNum",{
            carNum:this.$route.query.carNum
          }) 
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") {
                this.handleStateName = res.data.data.stateName
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
      },
      del:function(){

          this.axios  
            .post("/back/updatDateState",{
              id: this.ruleForm.carNumber
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
                // Message({
                //   message: "账号已过时，请重新登录",
                //   type: "error",
                //   showClose: true
                // })
              }
            })
            .catch(err => {
              console.log(err);
            });

      },
  
  },
  created(){
    this.getCarBrand();
    this.getUserCardInfo();
    
            // cardId:this.$route.query.cardId
  }
}
</script>

<style lang="less" scoped>
.modifyusercard{

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