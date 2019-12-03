<template>
  <div class="sword">
      <h1>敏感词设置</h1>
      <div class="sword-box"> 
          <p>敏感词(多个敏感词，请用英文状态下的逗号隔开)</p>
          <textarea name="" cols="100" rows="10" class="sword-text" :value='swordStrging'></textarea>
      </div>
      <el-button type="primary" @click="sure" style="margin-left:-350px;">确定</el-button>
  </div>
</template>

<script>

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
      console.log(this.value);
    } ,
    getSword:function(){
      this.axios  
          .post("/back/sensitive/find")
          .then(res => {
            console.log('敏感词',res.data.data);
            if (res.data.state == "200") {
                this.swordList = res.data.data
                // for(var i = 0 ;i< this.swordList.length;i++){
                //   this.swordStrging = this.swordList[i].sensContent + this.swordStrging +",";
                // }
                console.log(this.swordStrging)
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

</style>
