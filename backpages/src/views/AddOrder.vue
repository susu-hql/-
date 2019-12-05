<template>
  <div class="addOrder">
    <h1>新增订单</h1>
    <div class="addUser-body">

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <table> 
          <tr>
            <td>
                <!-- 输入框  --> 
                <el-form-item label="订单类型：" prop="orderType">        
                  <el-select v-model="ruleForm.orderType" placeholder="请选择订单类型">
                    <el-option label="估损预约" value="0"></el-option>
                    <el-option label="直接预约" value="1"></el-option>
                  </el-select>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  --> 
                <el-form-item label="用户姓名：" prop="username">        
                  <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <!-- 下拉框  -->
                <el-form-item label="订单状态：" prop="orderStaus">   
                  <el-select v-model="ruleForm.orderStaus" placeholder="请选择订单状态">
                    <el-option v-for="(item,index) in orderStausList" :key = 'index' :label="item.stateName" :value="item.stateId"></el-option>
                  </el-select>
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
                <el-form-item label="车牌号：" prop="carNumber">        
                  <el-input v-model="ruleForm.carNumber"></el-input>
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
                  <el-select v-model="ruleForm.acceptLocation" placeholder="区域" class="ban" @input='renderAcceptDriver'>
                    <el-option v-for="(item,index) in locationList" :key = 'index' :label="item.openCity" :value="item.openId"></el-option>
                  </el-select>
                  <el-select v-model="ruleForm.acceptDriver" placeholder="接车司机" class="ban">
                    <el-option v-for="(item,index) in DriverList" :key = 'index' :label="item.driverName" :value="item.driverId"></el-option>
                  </el-select>
                </el-form-item>
            </td>
            <td>
               <el-form-item label="接车地址：" prop="acceptAddrss">        
                  <el-input v-model="ruleForm.acceptAddrss"></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <el-form-item label="还车司机：" prop="returnDriver">   
                  <el-select v-model="ruleForm.returnLocation" placeholder="区域" class="ban" @input='renderReturnDriver'>
                    <el-option v-for="(item,index) in locationList" :key = 'index' :label="item.openCity" :value="item.openId"></el-option>
                  </el-select>
                  <el-select v-model="ruleForm.returnDriver" placeholder="还车司机" class="ban">
                    <el-option v-for="(item,index) in DriverList" :key = 'index' :label="item.driverName" :value="item.driverId"></el-option>
                  </el-select>
                </el-form-item>
            </td>
            <td>
               <el-form-item label="还车地址：" > 
                    <el-form-item prop="returnAddrss">
                      <el-input v-model="ruleForm.returnAddrss"></el-input>
                    </el-form-item>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
               <!-- 日期  -->
                <el-form-item label="接车时间：" > 
                    <el-form-item prop="acceptTime">
                      <el-date-picker type="datetime" placeholder="选择日期" v-model="ruleForm.acceptTime" ></el-date-picker>
                    </el-form-item>
                </el-form-item>
            </td>
            <td>
              <el-form-item label="4s店：" prop="fourDoor">   
                  <el-select v-model="ruleForm.fourDoorLocation" placeholder="区域" class="ban" @input='renderFour'>
                     <el-option v-for="(item,index) in locationList" :key = 'index' :label="item.openCity" :value="item.openId"></el-option>
                  </el-select>
                  <el-select v-model="ruleForm.fourDoor" placeholder="4s店" class="ban1">
                    <el-option v-for="(item,index) in fourDoorList" :key = 'index' :label="item.servicshopName" :value="item.serviceNumber"></el-option>
                  </el-select>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <el-form-item label="维修方式：" prop="repairMethod" require > 
                  <el-select v-model="ruleForm.repairMethod" placeholder="维修方式">
                    <el-option label="自费" value="1"></el-option>
                    <el-option label="保险" value="0"></el-option>
                  </el-select>
                </el-form-item>
            </td>
            <td>
              <el-form-item label="是否接车:" prop="substituteDriving" require>   
                  <el-select v-model="ruleForm.substituteDriving" placeholder="是否接车" >
                    <el-option label="接车" value="1"></el-option>
                    <el-option label="不接" value="0"></el-option>
                  </el-select>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="事故类型:" prop="accidentType" require>   
                  <el-select v-model="ruleForm.accidentType" placeholder="事故类型" >
                    <el-option label="双车事故（第三者）" value="双车事故（第三者）"></el-option>
                    <el-option label="单车事故" value="单车事故"></el-option>
                    <el-option label="多车事故" value="多车事故"></el-option>
                  </el-select>
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
  name:'addOrder',
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
        }else if( !Usernamepat.test(this.ruleForm.username) ){
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


      return {
        obj:{},
        DriverList:[],  // 还车司机列表  
        fourDoorList:[],  // 4s店列表
        locationList:[],   // 区域类别
        orderStausList:[],             // 订单状态类别

        ruleForm: {
          orderType:'',
          username: '',
          acceptAddrss:'',
          returnAddrss:'',
          desc: '',
          carNumber:'',
          usertel:'',
          engineNumber:'',
          acceptTime:'',
          acceptDriver:'',
          acceptLocation:'',
          returnDriver:'',
          returnLocation:'',
          orderStaus:'待确定',
          fourDoorLocation:'',
          fourDoor:'',
          substituteDriving:'',
          repairMethod:'',
          accidentType:''
        },
        rules: {
          orderType: [  // 订单类型
            { required: true,message:'请选择订单类型',  trigger: 'blur' },
          ],
          username: [  // 用户名
            { required: true, validator:validateName,  trigger: 'blur' },
          ],
          acceptAddrss: [  // 接车地址
            { required: false,message:'请输入接车地址' ,  trigger: 'blur' },
          ],
          acceptDriver: [  // 接车司机
            { required: false,message:'请输入接车司机' ,  trigger: 'blur' },
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
          carNumber: [   // 车牌号
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
    // 保存
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 对象  ============ 保存--异步：向数据库修改 =======================
            this.obj  = {
                  orderType:this.ruleForm.orderType,   // 订单类型
                  userName: this.ruleForm.username,   // 用户名
                  userTel:this.ruleForm.usertel,   // 联系电话
                  orderState: this.ruleForm.orderStaus,     // 订单状态
                  carNum:this.ruleForm.carNumber,   // 车牌号
                  driverId : this.ruleForm.acceptDriver,     //接车司机
                  substituteAddress:this.ruleForm.acceptAddrss,    // 接车地址
                  returnAddress : this.ruleForm.returnAddrss,
                  substituteTime:this.ruleForm.acceptTime ,      // 接车时间
                  shopId: this.ruleForm.fourDoor , // 4s店名称
                  substituteDriving:this.ruleForm.substituteDriving,
                  repairMethod:this.ruleForm.repairMethod,
                  accidentType:this.ruleForm.accidentType
              }
            console.log(this.obj);
              
              this.axios  
                .post("/back/order/insert",{
                  orderType:this.ruleForm.orderType,   // 订单类型
                  userName: this.ruleForm.username,   // 用户名
                  userTel:this.ruleForm.usertel,   // 联系电话
                  orderState: this.ruleForm.orderStaus,     // 订单状态
                  carNum:this.ruleForm.carNumber,   // 车牌号
                  driverId : this.ruleForm.acceptDriver,     //接车司机
                  substituteAddress:this.ruleForm.acceptAddrss,    // 接车地址
                  returnAddress : this.ruleForm.returnAddrss,
                  substituteTime:this.ruleForm.acceptTime ,      // 接车时间
                  shopId: this.ruleForm.fourDoor , // 4s店名称
                  substituteDriving:this.ruleForm.substituteDriving,
                  repairMethod:this.ruleForm.repairMethod,
                  accidentType:this.ruleForm.accidentType
              })
                .then(res => {
                  console.log('司机：',res.data);
                  if (res.data.state == "200") {
                      Message({
                        message: "添加成功!",
                        type: "success",
                        showClose: true
                      })  
                  } else {
                    Message({
                      message: "请求出错!",
                      type: "error",
                      showClose: true
                    })  
                  }
                }).then( () => {
                  console.log('增加成功');
                  // location.assign('order');
                }).catch(err => {
                  console.log(err);
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
      getOrderStates:function(){  // 获取订单状态
        this.axios  
          .post("/back/state/findOrderState")
          .then(res => {
            // console.log('订单状态',res.data.data);
            if (res.data.state == "200") {
                this.orderStausList = res.data.data
            } else {
              this.$message({
                showClose: true,
                message: '请求出错',
                type: 'error'
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      getLocation:function(){   // 获取区域
        this.axios  
          .get("/back/city/list1")
          .then(res => {
            console.log('4s店区域',res.data.data);
            if (res.data.state == "200") {
                this.locationList = res.data.data
            } else {
              this.$message({
                showClose: true,
                message: '请求出错',
                type: 'error'
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      renderFour:function(){    // 获取4s店
          console.log("00",this.ruleForm.fourDoorLocation);
         this.axios  
          .post("/back/serviceShop/findAllByAreaID",{
            areaId:this.ruleForm.fourDoorLocation
          })
          .then(res => {
            console.log('4s店',res.data.data);
            if (res.data.state == "200") {
                this.fourDoorList = res.data.data
            } else {
              this.$message({
                showClose: true,
                message: '请求出错',
                type: 'error'
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      renderReturnDriver:function(){   // 获取还车司机
        console.log("司机",this.ruleForm.returnLocation)
          this.axios  
          .post("/back/findAllByCityId",{
            cityId:this.ruleForm.returnLocation
          })
          .then(res => {
            console.log('司机：',res.data);
            if (res.data.state == "200") {
                this.DriverList = res.data.data
            } else {
              this.$message({
                showClose: true,
                message: '请求出错',
                type: 'error'
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      renderAcceptDriver:function(){   // 获取接车司机
        console.log("司机",this.ruleForm.acceptLocation)
          this.axios  
          .post("/back/findAllByCityId",{
            cityId:this.ruleForm.acceptLocation
          })
          .then(res => {
            console.log('司机：',res.data);
            if (res.data.state == "200") {
                this.DriverList = res.data.data
            } else {
              this.$message({
                showClose: true,
                message: '请求出错',
                type: 'error'
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
  },
  created(){
    this.getOrderStates();
    this.getLocation();
  }
}
</script>

<style lang="less" scoped>
.addOrder{

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