<template>
  <div>
    <hr>
    <van-steps direction="vertical" :active="lists.length-1">

         <van-step v-for="item in list" :key="item.logId" >
          <h3>{{item.logTitle}}</h3>
          <h4>{{item.logInfo}}</h4>
          <p>{{item.logTime}}</p>
          <div v-show="getstatu(item.statu0)">
                woshijiahao
          </div>
          
        </van-step>

      
    </van-steps>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          id: 1,
          statu: "订单已经提交",
          statu0:1,
          time: "2016-07-11 10:00",
          beizhu: ""
        },
        {
          id: 2,
          statu: "待录入险种和保费",
          statu0:1,
          time: "2016-07-11 10:00",
          beizhu: "等待后台录入"
        },
        {
          id: 3,
          statu: "待录入信息",
          statu0:2,
          time: "2016-07-11 10:00",
          beizhu: "已录入"
        },
        {
          id: 4,
          statu: "已完成",
          statu0:3,
          time: "2016-07-11 10:00",
          beizhu: "完成保单"
        }
      ],
      list:''
    };
  },
  methods:{
    getstatu(i){     
      if(i==this.lists.length-1&&i>3){
        return true
      }
    }
  },
  created(){
    var a= this.$route.query.id;
    this.axios.post('/user/getInsuranceOrderLog',{
      orderId:a
    })
    .then(res =>{
      console.log(res);
      this.list = res.data.data
    })
    .catch(err =>{
      console.log(err)
    })
  }
};
</script>

<style lang="less" scoped>
h3 {
  text-align: left;
}
p {
  position: absolute;
  top: 30px;
  right: 3px;
  text-align: right;
}
h4 {
  text-align: left;
}

</style>
