<template>
  <div class="addCity">
    <h1>添加开通城市</h1>
    <div class="content">
      <p>开通城市名称：</p>
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
  name:'addCity',
  data(){
    return {
      input:''
    }
  },
  methods:{
    cancel(){
      location.assign('/openCity');
    },
    save(){
      console.log(this.input);
        this.axios  
          .post("/back/openCity/insert.do",{
             openCity :this.input
          })
          .then(res => {
            console.log(res.data);
            if (res.data.state == "200") {
              this.input=''
              location.assign('/openCity')
            } else {
              Message({
                  message: "新增失败",
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

