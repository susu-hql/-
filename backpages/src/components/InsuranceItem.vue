<template>
  <tr>
    <td>{{item.name}}</td>
    <td>{{item.phone}}</td>
    <td>{{item.dateStartstrength}}</td>
    <td>{{item.dateEndstrength}}</td>
    <td>{{item.businessStarttime}}</td>
    <td>{{item.businessEndtime}}</td>
    <td>{{item.price}}</td>
    <td>{{item.integral}}</td>
    <td>  
      <el-button type="primary" icon="el-icon-edit" circle @click='modify' title="修改" :disabled='isdisable'></el-button>
      <el-button type="success" icon="el-icon-view" circle @click='look' title="查看" :disabled='isdisable'></el-button>
      <el-button type="warning" :icon="icons" circle  @click='lock' :title="islock" ></el-button>
      <el-button type="danger" icon="el-icon-delete" circle @click='del' title="删除" :disabled='isdisable'></el-button>
    </td>
  </tr>
</template>


<script>
export default {
  name:'InsuranceItem',
  data(){
    return {
      islock:'锁定',
      icons:'el-icon-lock',
      isdisable:false
    }
  },
  props:['item'],
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

<style>

</style>
