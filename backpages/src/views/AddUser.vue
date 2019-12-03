<template>
  <div class="addUser">

  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  name:'adduser'
=======
  name:'adduser',
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
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
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
            this.$message({
              message: '添加成功',
              type: 'success'
            });
            // 对象
            console.log(this.ruleForm);
            this.ruleForm = {
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
        location.assign('/client');
      }
  }
>>>>>>> a56b4bc2869a5d0c925dd9f20340fa52b5ab3891
}
</script>

<style lang="less" scoped>

</style>