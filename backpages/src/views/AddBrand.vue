<template>
  <div class="addBrand">
    <h1>添加汽车品牌</h1>
    <div class="content">
      <p>汽车品牌名称：</p>
      <input type="text" v-model="input" />
    </div>
    <div class="btnGroup">
      <button @click="save">保存</button>
      <button @click="cancel">取消</button>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
  name:'addBrand',
  data(){
    return {
      input:''
    }
  },
  methods:{
    cancel(){
      location.assign('/contents');
    },
    save(){
      console.log(this.input);
        this.axios  
          .post("/back/carBrand/insert.do",{
             brandName :this.input
          })
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") {
              this.input=''
            } else {
              Message({
                  message: "账号已过时，请重新登录修改成功",
                  type: "error",
                  showClose: true
              })
            }
          })
          .catch(err => {
            console.log(err);
          });
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
    text-align: left;
    border-bottom: 1px solid black; 
  }
  .content{
    p{
      margin-top: 40px;
    }
    input{
      width: 300px;
      height: 30px;
    }
  }
  .btnGroup{
      button{
        margin-top: 100px; 
        width: 100px;
        height: 30px;
        margin-right: 20px;
      }
  }
</style>

