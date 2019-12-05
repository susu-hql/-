<template>
  <div class="lookdriver">
     <h1>查看司机</h1>
    <div class="addUser-body">

      <el-form  ref="ruleForm" label-width="100px"
       class="demo-ruleForm" enctype="multipart/form-data">
        <table>
          <tr> 
            <td> 
                <!-- 输入框  -->
                <el-form-item label="司机名字：" prop="name">        
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
                 <el-form-item label="所在区域:" prop="region">
                  <el-select v-model="ruleForm.region" placeholder="请选择区域" disabled >
                    <el-option label="区域一" value="shanghai"></el-option>
                  </el-select>
                </el-form-item>
            </td>
            <td>
                <!-- 输入框  -->
                <el-form-item label="在职状态" prop="engineNumber" >        
                    <el-radio v-model="ruleForm.radio" label="1" disabled>在职</el-radio>
                    <el-radio v-model="ruleForm.radio" label="2" disabled>离职</el-radio>
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
                    :on-remove="handleRemove" disabled>
                    <i class="el-icon-plus" ></i>
                  </el-upload>
                  <el-dialog :visible.sync="ruleForm.dialogVisible" disabled>
                    <img width="100%" :src="ruleForm.dialogImageUrl" alt="" disabled>
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
  name:'lookdriver',
   data() {
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
        }
      };
  },
  methods:{
    re(){
      location.assign('/driver');
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.ruleForm.dialogImageUrl = file.url;
      this.ruleForm.dialogVisible = true;
    },
    getDriverInfo(){
      this.axios  
          .post("/back/getDriverById",{
            id:this.$route.query.driverid
          }) 
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") {
                this.ruleForm.name = res.data.data.driverName;
                // this.ruleForm.region= res.data.data.
                this.ruleForm.carNumber= res.data.data.driverCarNum
                this.ruleForm.usertel= res.data.data.driverTel;
                this.ruleForm.cardId= res.data.data.drivePid;
                this.ruleForm.radio= res.data.data.driverState;
                this.ruleForm.dialogImageUrl= res.data.data.headUrl;
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
    this.getDriverInfo();
    // 获取到 了 用户id ，然后渲染  直接给ruleForm赋值
    // console.log(this.$route.query.driverid);
  }
}
</script>

<style lang="less" scoped>
.lookdriver{

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