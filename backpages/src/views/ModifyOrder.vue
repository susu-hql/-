<template>
  <div class="modifyOrder">
    <h1>修改订单</h1>
    <div class="addUser-body">

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <table aria-disabled> 
          <tr>
            <td>
                <!-- 输入框  --> 
                <el-form-item label="订单类型：" prop="orderType">        
                  <el-select v-model="ruleForm.orderType" placeholder="请选择订单类型">
                    <el-option label="估损预约" value="估损预约"></el-option>
                    <el-option label="直接预约" value="估损预约"></el-option>
                  </el-select>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  --> 
                <el-form-item label="用户姓名：" prop="name">        
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="接车地址：" prop="acceptAddrss">        
                  <el-input v-model="ruleForm.acceptAddrss"></el-input>
              </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="联系电话：" prop="usertel">        
                  <el-input v-model="ruleForm.usertel"></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="车牌号：" prop="carNum">        
                  <el-input v-model="ruleForm.carNum"></el-input>
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
                <el-form-item label="接车司机：" prop="acceptDriver">   
                  <el-select v-model="ruleForm.acceptLocation" placeholder="区域" class="ban">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                  <el-select v-model="ruleForm.acceptDriver" placeholder="接车司机" class="ban">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
            </td>
            <td>
                <!-- 日期  -->
                <el-form-item label="还车地址：" > 
                    <el-form-item prop="returnAddrss">
                      <el-input v-model="ruleForm.returnAddrss"></el-input>
                    </el-form-item>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <el-form-item label="还车司机：" prop="returnDriver">   
                  <el-select v-model="ruleForm.returnLocation" placeholder="区域" class="ban">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                  <el-select v-model="ruleForm.returnDriver" placeholder="还车司机" class="ban">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
            </td>
            <td>
                <!-- 日期  -->
                <el-form-item label="接车时间：" > 
                    <el-form-item prop="acceptTime">
                      <el-date-picker type="datetime" placeholder="选择日期" v-model="ruleForm.acceptTime" ></el-date-picker>
                    </el-form-item>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 下拉框  -->
                <el-form-item label="订单状态：" prop="orderStaus">   
                  <el-select v-model="ruleForm.orderStaus" placeholder="请选择订单状态">
                    <el-option label="未处理" value="未处理"></el-option>
                    <el-option label="已处理" value="已处理"></el-option>
                  </el-select>
                </el-form-item>
            </td>
            <td>
              <el-form-item label="4s店：" prop="fourDoor" style="color:#888;">  
                {{ruleForm.fourDoorLocation}} 
                {{ruleForm.fourDoor}}
              </el-form-item>
            </td>
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

export default {
  name:'modifyOrder',
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
      var carNumpat = /(^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$)/;
      var validateCarNum = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入车牌号'));
        }else if( !carNumpat.test(this.ruleForm.carNum) ){
          callback( new Error('请输入正确的车牌号'));
        } else {
          callback();
        }
      };


      return {
        handleStateName:'',
        ruleForm: {
          orderType:'',
          name: '',
          acceptAddrss:'',
          returnAddrss:'',
          desc: '',
          carNum:'',
          usertel:'',
          cartype:'',
          engineNumber:'',
          acceptTime:'',
          acceptDriver:'',
          acceptLocation:'',
          returnDriver:'',
          returnLocation:'',
          orderStaus:'',
          fourDoorLocation:'',
          fourDoor:''
        },
        rules: {
          orderType: [  // 订单类型
            { required: true,message:'请选择订单类型',  trigger: 'blur' },
          ],
          name: [  // 用户名
            { required: true, validator:validateName,  trigger: 'blur' },
          ],
          acceptAddrss: [  // 接车地址
            { required: false,message:'请输入接车地址' ,  trigger: 'blur' },
          ],
          acceptDriver: [  // 接车司机
            { required: false,message:'请输入接车司机' ,  trigger: 'blur' },
          ],
          returnAddrss: [  // 还车地址
            { required: false,message:'请输入还车地址' ,  trigger: 'blur' },
          ],
          returnDriver: [  // 还车司机
            { required: false,message:'请输入还车司机' ,  trigger: 'blur' },
          ],
          orderStaus: [  // 订单状态
            { required: true,message:'请输入订单状态' ,  trigger: 'blur' },
          ],
          fourDoor: [  // 选择4s店
            { required: true,message:'请选择4s店' ,  trigger: 'blur' },
          ],
          carNum: [   // 车牌号
            { required: true, validator:validateCarNum,  trigger: 'blur' },
          ],
          usertel: [   // 联系电话
            {required: true, validator: validateTel, trigger: 'blur' }
          ],
          cartype: [   //车型
            { required: true, message: '请输入车型', trigger: 'blur' }
          ],
          engineNumber: [   //发动机号
            { required: true, message: '请输入发动机号', trigger: 'blur' }
          ],
          acceptTime: [   // 接车时间
            { required: false, message: '请选择接车时间', trigger: 'change' }
          ],
          desc: [
            { required: false, message: '', trigger: 'blur' }
          ]
        }
      };
  },
  methods:{
      // 1同意审核
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.changState(1);
            this.$message({
                message: '审核通过',
                type: 'success'
            });
            
          } else {
            return false;
          }
        });
      },
      // 取消
      resetForm(formName) {
        this.$refs[formName].resetFields();
        location.assign('/order');
      },
      refuse(){   // 2审核不通过
          this.$confirm('此操作将拒绝该订单通过审核, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.changState(2);
            this.$message({
                message: '审核未通过',
                type: 'success'
            });
          }).then(()=>{
            // location.assign('/order');
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消拒绝该请求'
            });          
          });
      },
      getOrder(){   // 得到订单详情
        this.orderId = this.$route.query.userid;
        this.axios  
          .post("/back/assessmentOrder/findByOrderId",{
            orderId : this.orderId
          })
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") { 
              this.ruleForm.orderType = res.data.data.typeName  //订单类型
              this.ruleForm.name = res.data.data.userName || '无' //用户名
              this.ruleForm.acceptAddrss = res.data.data.substituteAddress || '无' //接车地址
              this.ruleForm.usertel = res.data.data.userTel || '无' //联系电话
              this.ruleForm.carNum = res.data.data.carNum   || '无' // 车牌号
              this.ruleForm.engineNumber = res.data.data.carEngineNum || '无' //发动机号
              this.ruleForm.acceptLocation = res.data.data.driverPosition || '无'  // 接车司机区域
              this.ruleForm.acceptDriver = res.data.data.driverName || '无'   // 接车司机
              this.ruleForm.returnAddrss = res.data.data.returnAddress || '无' //还车地址
              this.ruleForm.returnLocation = res.data.data.driverPosition || '无'   // 还车司机区域
              this.ruleForm.returnDriver = res.data.data.driverName || '无'  // 还车司机
              this.ruleForm.acceptTime = res.data.data.substituteTime   //接车时间
              this.ruleForm.orderStaus = res.data.data.orderStateName || '无' // 订单状态
              this.ruleForm.fourDoorLocation = res.data.data.serviceShopAddr  || '无' //4s店区域
              this.ruleForm.fourDoor = res.data.data.servicshopName   || '无' //4s店名称
              this.handleStateName = res.data.data.handleStateName    //审核状态
            } else {
              this.$message({
                showClose: true,
                message: '账号已过时，请重新登录',
                type: 'error'
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      changState(state ){
       this.axios  
          .post("/back/assessmentOrder/update",{
            orderId : this.$route.query.userid,
            handleState : state
          })
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") { 
              console.log(1)
              location.assign('/order');
            } else {
              this.$message({
                showClose: true,
                message: '操作失败',
                type: 'error'
              });
            }
          })
          .catch(err => {
            console.log(this.$route.query.userid,state)
            console.log(err);
          });
      }
  },
  created(){
    this.getOrder();
    // if(this.handleStateName=='')
  }
}
</script>

<style lang="less" scoped>
.modifyOrder{

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
    .ban{
      width: 90px;
      margin-right: 10px;
    }
 
  }
  
}
</style>