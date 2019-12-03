<template>
  <div class="modifydriver">
    <h1>修改司机</h1>
    <div class="addUser-body">

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
       class="demo-ruleForm" enctype="multipart/form-data">
        <table>
          <tr> 
            <td> 
                <!-- 输入框  -->
                <el-form-item label="司机名字：" prop="name">        
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
                 <el-form-item label="所在区域:" prop="region">
                  <el-select v-model="ruleForm.region" placeholder="请选择区域" >
                    <el-option label="区域一" value="shanghai"></el-option>
                  </el-select>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="在职状态" prop="engineNumber">        
                    <el-radio v-model="ruleForm.radio" label="1">在职</el-radio>
                    <el-radio v-model="ruleForm.radio" label="2">离职</el-radio>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="司机照片：" required > 
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="ruleForm.dialogVisible">
                    <img width="100%" :src="ruleForm.dialogImageUrl" alt="">
                  </el-dialog>
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

export default {
  name:'modifydriver',
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
        ruleForm: {
          name: '',
          region: '',
          carNumber:'',
          usertel:'',
          cardId:'',
          radio:'1',
          dialogImageUrl: '',
          dialogVisible: false
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
          region: [   //车型
            { required: true, message: '请选择区域', trigger: 'blur' }
          ],
          cardId: [   //身份证号
            { required: true, validator: validateCardid, trigger: 'blur' }
          ],
          dialogImageUrl: [   //司机图片
            { required: true,  message: '请选择司机照片', trigger: 'change' }
          ]
        }
      };
  },
  methods:{
    // 保存
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '添加成功',
              type: 'success'
            });
            // 对象
            console.log(this.ruleForm);
            this.ruleForm = {
                name: '',
                region: '',
                carNumber:'',
                usertel:'',
                cardId:'',
                radio:'1',
                dialogImageUrl: '',
                dialogVisible: false
              }
              //  ============ 保存--异步：向数据库添加 =======================
          } else {
            
            return false;
          }
        });
      },
      // 取消
      resetForm(formName) {
        this.$refs[formName].resetFields();
        location.assign('/driver');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.ruleForm.dialogImageUrl = file.url;
        this.ruleForm.dialogVisible = true;
      }
  
  },
  created(){
    // 获取到 了 用户id  ===============================然后渲染   直接给ruleForm赋值
    console.log(this.$route.query.userid);
  }
}
</script>

<style lang="less" scoped>
.modifydriver{

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