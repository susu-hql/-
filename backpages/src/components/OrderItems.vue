<template>
    <tr>
      <td class="userid" @click='look(info.directOrderId)' title="查看详情">{{info.directOrderId}}</td>
      <td>{{info.typeName}}</td>
      <td class="username">{{info.userName}}</td>
      <td class="tel">13051556515</td>
      <td class="carNum">{{info.carNum}}</td>
      <td>{{info.driverName}}</td>
      <td class="jTime">{{info.driverName}}</td>
      <td>{{info.orderStateName}}</td>
      <td class="sTime">{{info.substituteTime}}</td>
      <td>{{info.paymentName}}</td> 
      <td>
         <el-button :type="color" @click='modify(info.directOrderId)' :disabled="isdisable">{{isverify}}</el-button>
      </td>
    </tr> 
</template>

<script>
export default {
  name: 'OrderItem',
  data (){
    return {
      color:'warning',
      isverify:'',
      isdisable:false
    }
  },
  props:['info'],
  methods:{
    modify:function(i){
      location.assign('/modifyOrder?userid='+i);
      console.log('修改');
    },
    look:function(i){
      location.assign('/lookOrder?userid='+i);
      console.log('查看');
    }
  },
  mounted(){
  },
  created(){
    // 获取审核状态 
    this.isverify = this.info.handleStateName;
    if(this.isverify == '未通过审核'){  
       this.color = 'danger'
        this.isdisable = true;
    }else if( this.isverify == '通过审核' ){
      this.color = 'primary'
      this.isdisable = true;
    }else {
      this.isverify = '待审核'
    }

    if(this.info.driverName==null){  //判断是否有接车司机
      this.info.driverName='无';
    }
  }
}
</script>


<style scoped lang="less">

   .userid{
        cursor: pointer;
        color:rgb(19, 9, 163);
    }
    tr{
      height: 50px;
      line-height: 50px;
      text-align: center;
      td{
        padding:10px 10px;
        border-bottom: 1px solid rgb(187, 181, 181);
      }
    }
</style>
