<template>
  <!-- <div class="userItem"> -->
    <tr>
      <td class="userid" @click='look(info.orderId)' title="查看详情">{{info.orderId}}</td>
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
         <el-button type="primary"  @click='modify(info.orderId)' >{{info.handleStateName}}</el-button>
      </td>
    </tr> 
  <!-- </div> -->
</template>

<script>
export default {
  name: 'OrderItem',
  data (){
    return {
    }
  },
  watch:{
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
  },
  destroyed(){
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
