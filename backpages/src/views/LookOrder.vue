<template>
  <div class="lookOrder">
    <h1>查看订单详情</h1>
    <div class="addUser-body">

      <el-form   label-width="100px"
       class="demo-ruleForm" enctype="multipart/form-data" >
        <table>
          <tr>
            <td>
               <el-form-item label="订单编号：">   
                  {{orderId}}  
                  <!-- <el-input v-model="ruleForm.name" disabled></el-input> -->
                </el-form-item>
            </td>
            <td> 
                <!-- 输入框  -->
                <el-form-item label="接车时间：" >        
                  <el-input v-model="acceptCarTime" disabled></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr> 
            <td> 
                <!-- 输入框  -->
                <el-form-item label="预计维修完成时间：" >        
                  <el-input v-model="preMCTime" disabled></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="订单类型:" >    
                  {{orderType}}    
                  <!-- <el-input v-model="ruleForm.carNumber" disabled></el-input> -->
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="车牌号：" >        
                  <el-input v-model="carNumber" disabled></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="下单时间：" >
                  <!-- <p>{{orderTime}}</p>         -->
                  <el-input v-model="orderTime" disabled></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="发动机号：">        
                  <el-input v-model="engineNumber" disabled></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="接车司机：">        
                  <el-select v-model="acceptDriverLocation"  class="brand" disabled>
                    <el-option label="高新区" value="高新区"></el-option>
                  </el-select>
                  <el-select v-model="acceptDriver"  class="brand" disabled>
                    <el-option label="萨可可" value="萨可可"></el-option>
                  </el-select>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="被保险人：" >        
                  <el-input v-model="insurancedUser" disabled></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="还车司机：" >        
                  <el-select v-model="returnDriverLocation"  class="brand" disabled>
                    <el-option label="高新区" value="高新区"></el-option>
                  </el-select>
                  <el-select v-model="returnDriver"  class="brand" disabled>
                    <el-option label="萨可可" value="萨可可"></el-option>
                  </el-select>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <!-- 输入框  -->
                <el-form-item label="联系电话：" >        
                  <el-input v-model="usertel" disabled></el-input>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="订单状态：" >        
                  <el-select v-model="orderStaus"  disabled>
                    <el-option label="未处理" value="未处理"></el-option>
                  </el-select>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <el-form-item label="4s店：" >  
                  {{ fourDoorLocation }}     {{fourDoor}} 
                  <!-- <el-select v-model="fourDoorLocation"  class="brand" disabled>
                    <el-option label="高新区" value="高新区"></el-option>
                  </el-select> -->
                  <!-- <el-select v-model="fourDoor"  class="brand" disabled>
                    <el-option label="萨可可" value="萨可可"></el-option>
                  </el-select> -->
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="接车地址：" >        
                  <el-input v-model="acceptAddress" disabled></el-input>
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <el-form-item label="还车地址：" >        
                  <el-input v-model="returnAddress" disabled></el-input>
                </el-form-item>
            </td>
            <td>
               <el-form-item label="支付单号：" >        
                  {{payId}}
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <el-form-item label="支付方式：" >        
                  {{payType}}
                </el-form-item>
            </td>
            <td>
              <el-form-item label="支付状态：" >        
                  {{payStaus}}
                </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
                <el-form-item label="支付金额：" >        
                  {{payCount}}.00元
                </el-form-item>
            </td>
            <td>
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
  name:'lookOrder',
  data() {
      return {
          orderId: '',
          acceptCarTime: '',   //接车时间
          preMCTime:'',    
          orderType:'',
          carNumber:'',
          orderTime :'',
          engineNumber:'',
          acceptDriverLocation:'',    //接车司机区域
          acceptDriver:'',  
          acceptAddress:'',
          returnDriverLocation:'',
          returnDriver:'',
          returnAddress:'',
          insurancedUser:'' ,  // 被保险人
          usertel:'',
          orderStaus:'',  //订单状态
          fourDoorLocation:'',  //4s店区域
          fourDoor:'',  //4s店
          payId:'1254215679456421564512365',   // 支付单号
          payType:'支付宝',   // 支付方式
          payStaus:'' , //支付状态    
          payCount:''  ,//支付金额 
      };
  },
  methods:{
    re(){
      location.assign('/order');
    } ,
    getOrder(){
        this.orderId = this.$route.query.userid;
        this.axios  
          .post("/back/assessmentOrder/findByOrderId",{
            orderId : this.orderId
          })
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") { 
              this.engineNumber = res.data.data.carEngineNum   || '无'  // 发动机号
              this.carNumber = res.data.data.carNum   || '无'  // 车牌号
              this.orderTime = res.data.data.createTime  || '无'  // 下单时间
              this.acceptDriverLocation = res.data.data.drivePosition || '无' // 接车司机区域
              this.acceptDriver = res.data.data.driverName  || '无'   // 接车司机
              this.returnDriverLocation = res.data.data.drivePosition   || '无' // 还车司机区域
              this.returnDriver = res.data.data.driverName  || '无'  // 还车司机
              this.preMCTime = res.data.data.endTime  || '无' // 预计维修完时间
              this.orderStaus = res.data.data.orderStateName  || '无' // 订单状态
              this.payStaus = res.data.data.paymentName  || '无' // 支付状态
              this.payCount = res.data.data.repairPrice  || '无' //支付金额
              this.returnAddress = res.data.data.returnAddress   || '无' //还车地址
              this.acceptAddress = res.data.data.substituteAddress  || '无' //接车地址
              this.acceptCarTime = res.data.data.substituteTime || '无'  //接车时间
              this.orderType = res.data.data.typeName  || '无' //接车时间
              this.insurancedUser = res.data.data.userName  || '无' //被保险人
              this.usertel = res.data.data.userTel  || '无' //联系电话
              this.fourDoorLocation = res.data.data.serviceShopAddr  || '无' //4s店区域
              this.fourDoor = res.data.data.servicshopName   || '无' //4s店名称
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
    }
  },
  created(){
    this.getOrder();
  }
}
</script>

<style lang="less" scoped>
.lookOrder{

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
        padding-right: 100px;
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
      width: 90px;
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