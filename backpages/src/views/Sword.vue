<template>
  <div class="sword">
      <h1>敏感词设置</h1>
      <div class="sword-box"> 
          <p>敏感词(多个敏感词，请用英文状态下的逗号隔开)</p>
          <textarea name="" cols="100" rows="10" class="sword-text" :value='value'></textarea>
      </div>
      <el-button type="primary" @click="sure" style="margin-left:-350px;">确定</el-button>
  </div>
</template>

<script>

export default {
  name: 'sword',
  data(){
    return {
      value:'**,***'
    }
  },
  components: {
  },
  methods:{
    sure(){
      console.log(this.value);
    } 
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
