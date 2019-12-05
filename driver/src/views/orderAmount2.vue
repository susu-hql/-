<template>
    <div class="order-amount">
        <div class="wrap">
            <div class="info">客户姓名：{{orderinfo.userName}}</div>
            <div class="info">客户电话：{{orderinfo.userTel}}</div>
            <div class="info">接车时间：{{orderinfo.substituteTime}}</div>
            <div class="info">车牌号码：{{orderinfo.carNum}}</div>
            <div class="info">接车地址：{{orderinfo.substituteAddress}}</div>
            <div class="info">还车地址：{{orderinfo.returnAddress}}</div>
            <div class="info">门店名称：{{orderinfo.servicshopName}}</div> 
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orderinfo:[]
        };
    },
    methods:{
        goback(){
            console.log("点击")
            this.$router.push('/myorder')
        },
        toorder(){
            this.$router.push('/orderReceiving')
        }
    },
    created(){
      this.axios.post("/driver/findAssessmentOrderByOrderId",{
          orderId:this.$route.query.orderId
      })
      .then(res => {
        this.orderinfo = res.data.data
        console.log(res)
      })
      .catch(err=> {
        console.log(err)
      });
    //   this.axios.post("/driver/findDirectOrderByOrderId",{
    //       orderId:this.$route.query.orderId
    //   })
    //   .then(res => {
    //     this.orderinfo = res.data.data
    //     console.log(res)
    //   })
    //   .catch(err=> {
    //     console.log(err)
    //   })
    }
}
</script>

<style lang="less" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .info{
        font-size: 30px;
        border-bottom: 1px solid black;
        height: 80px;
        line-height: 80px;
        text-align: left;
        padding-left: 30px;
    }
    .jiedan{
        width: 100%;
        height: 80px;
        line-height: 80px;
        font-size: 36px;
        border-top: 1px solid black;
        position: absolute;
        bottom: 0;
        text-align: center
    }
    .wrap{
        position: relative;
        min-height: 100%;
    }
    span{
        margin-left: 10px;
    }
    span img{
        vertical-align: middle;
    }
</style>
