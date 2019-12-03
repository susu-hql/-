<template>
    <div class="addins">
        <h1>添加保单</h1>
        <div class="form-group">
            <font class="xing">*</font>
            <span>用户姓名：</span>
            <p>
                <input type="text" name="" id="">
            </p>
        </div>
        <div class="form-group">
            <font class="xing">*</font>
            <span>手机号：</span>
            <p>
                <input type="text" name="" id="">
            </p>
        </div>
        <div class="form-group">
            <font class="xing">*</font>
            <span>车牌号：</span>
            <p>
                <input type="text" name="" id="">
            </p>
        </div>
        <div class="form-group">
            <font class="xing">*</font>
            <span>用户姓名：</span>
            <p>
                <input type="text" name="" id="">
            </p>
        </div>
        <div class="form-group">
            <font class="xing">*</font>
            <span>保险公司名称：</span>
            <p>
                <select>
                    <option value="">请选择保险公司</option>
                    <option value="">中国人寿</option>
                    <option value="">中国平安</option>
                    <option value="">太平洋保险</option>
                    <option value="">中国人保</option>
                    <option value="">新华保险</option>
                    <option value="">泰康保险</option>
                    <option value="">中国太平</option>
                    <option value="">阳光保险</option>
                    <option value="">福德生命人寿</option>
                    <option value="">友邦保险</option>
                    <option value="">自定义</option>
                </select>
            </p>
        </div>
        <div class="form-group">
            <font class="xing">*</font>
            <span>交强保单号：</span>
            <p>
                <input type="text" name="" id="">
            </p>
        </div>
        <div class="form-group">
            <font class="xing">*</font>
            <span>商业保单号：</span>
            <p>
                <input type="text" name="" id="">
            </p>
        </div>
        <div class="form-group">
            <font class="xing">*</font>
            <span>兑换积分比例：</span>
            <p>
                <input type="text" name="" id="">
            </p>
        </div>
        <div class="form-group">
            <font class="xing">*</font>
            <span>保险公司电话：</span>
            <p>
                <input type="text" name="" id="">
            </p>
        </div>
        <div class="form-group">
            <font class="xing">*</font>
            <span>交强保单起始时间：</span>
            <p>
                <input type="date" name="" id="">
            </p>
        </div>
        <div class="form-group">
            <font class="xing">*</font>
            <span>交强保单终止时间：</span>
            <p>
                <input type="date" name="" id="">
            </p>
        </div>
        <div class="form-group">
            <font class="xing">*</font>
            <span>商业保单起始时间：</span>
            <p>
                <input type="text" name="" id="">
            </p>
        </div>
        <div class="form-group">
            <font class="xing">*</font>
            <span>商业保单终止时间：</span>
            <p>
                <input type="text" name="" id="">
            </p>
        </div>
        <div class="form-group">
            <font class="xing">*</font>
            <span>保单信息：</span>
        </div>
        <div class="info">
            <table>
                <tr>
                    <td>投保险种</td>
                    <td>保额（元）</td>
                    <td>保费金额（元）</td>
                    <td>含不计免赔</td>
                </tr>
                <tr>
                    <td>交强险</td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                    <td><input type="text"></td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td>车船税</td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                    <td><input type="text"></td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td>车辆损失险</td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                    <td><input type="text"></td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td>第三者责任险</td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td>司机责任险</td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td>乘客责任险</td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td>玻璃单独破碎险</td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td>机动车被盗险</td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                    <td><input type="text"></td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td>自然损失险</td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                    <td><input type="text"></td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td>车身划痕损失险</td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td>发动机特别损失险</td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                    <td><input type="text"></td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td>不计免赔险</td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                    <td><input type="text"></td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td>无法找到第三方特约险</td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                    <td><input type="text"></td>
                    <td>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
            </table>
            <el-button type="primary" class="confirm">确认</el-button>
            <el-button>取消</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        checked: false
      };
    }
}
</script>

<style lang="less" scoped>
    .addins{
        text-align: left;
        margin: 0;
        line-height: 30px;
    }
    h1{
        border-bottom: 1px solid rgb(161, 158, 158);
    }
    .xing{
        color: red;
    }
    input,select{
        width: 200px;
    }
    table input{
        width: 100px
    }
    td{
        padding: 0 10px
    }
    .info button{
        width: 100px;
        margin-left: 20px
    }
</style>