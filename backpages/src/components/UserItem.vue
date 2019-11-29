<template>
  <!-- <div class="userItem"> -->
    <tr>
      <td class="userid">1</td>
      <td class="username">{{info.name}}</td>
      <td class="tel">12547895442</td>
      <td class="time">2019-09-1-27 24：10</td>
      <td class='operate'> 
          <el-button type="primary" icon="el-icon-edit" circle @click='modify' title="修改" :disabled='isdisable'></el-button>
          <el-button type="success" icon="el-icon-view" circle @click='look' title="查看" :disabled='isdisable'></el-button>
          <el-button type="warning" :icon="icons" circle  @click='lock' :title="islock" ></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click='del' title="删除" :disabled='isdisable'></el-button>
      </td>
    </tr>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'UserItem',
  data (){
    return {
      islock:'锁定',
      icons:'el-icon-lock',
      isdisable:false
    }
  },
  props:['info'],
  methods:{
    modify:function(){
     console.log('修改');
    },
    look:function(){
      console.log('查看');
    },
    lock:function(){
      if(this.islock == '锁定'){
        this.islock = '解锁';
        this.icons = 'el-icon-lock';
        this.isdisable = true;
      }else{
        this.islock = '锁定';
        this.icons = 'el-icon-unlock';
        this.isdisable = false; 
      }
      console.log('锁定');
    },
    del:function(){
      console.log('删除');
    },
  }
}
</script>


<style scoped lang="less">

   .operate{
        min-width: 230px;
    }
    tr{
      height: 50px;
      line-height: 50px;
      text-align: center;
      td{
        padding:10px 35px;
        border-bottom: 1px solid rgb(187, 181, 181);
      }
    }
</style>
