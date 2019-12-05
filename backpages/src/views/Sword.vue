<template>
  <div class="sword">
      <h1>敏感词设置</h1>
      <div class="sword-box"> 
          <p>敏感词(多个敏感词，请用英文状态下的逗号隔开)</p>
          <textarea name="" cols="100" rows="10" class="sword-text" v-model='swordStrging'></textarea>
      </div>
      <el-button type="primary" @click="sure" style="margin-left:-350px;">确定</el-button>
  </div>
</template>

<script>
import { Message } from 'element-ui'

export default {
  name: 'sword',
  data(){
    return {
      swordStrging:'',
      swordList:''
    }
  },
  components: {
  },
  methods:{
    sure(){
      console.log(this.swordStrging);
      this.addSword();
    } ,
    getSword:function(){
      this.axios  
          .post("/back/sensitive/select.do")
          .then(res => {
            console.log('敏感词',res.data);
            if (res.data.state == "200") {
                this.swordStrging = res.data.data;
                console.log(this.swordStrging)
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
    addSword:function(){
      this.axios  
          .post("/back/sensitive/update.do",{
            sensitiv:this.swordStrging
          })
          .then(res => {
            console.log('修改敏感词:',res.data);
            if (res.data.state == "200") {
                this.getSword();
                Message({
                  message: "添加成功",
                  type: "success",
                  showClose: true
                })
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
    }
  },
  created(){
    this.getSword();
  }
}
</script>

<style lang="less" scoped>
h1{
    text-align: left;
    border-bottom: 1px solid rgb(161, 158, 158);
}
.sword-box{
  text-align: left;
  margin-left: 30px;
}
textarea{
  font-size: 20px;
  color: rgb(88, 84, 84);
}

</style>
