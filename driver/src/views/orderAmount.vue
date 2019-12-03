<template>
    <div class="order-amount">
        <div class="nav">
            <ul>
                <li>&lt;返回</li>
            </ul>
            <p @click="goback">订单详情</p>
        </div>
        <hr>
        <div class="wrap">
            <div class="info">客户姓名：辗迟</div>
            <div class="info">客户电话：18412474512</div>
            <div class="info">接车时间：2019.11.28</div>
            <div class="info">车牌号码：川A85865</div>
            <div class="info">接车地址：地址地址地址地址地址地址地址地<span><img src="../assets/地图.png" alt="">地图</span></div>
            <div class="info">还车地址：地址地址地址地址地址地址地址地<span><img src="../assets/地图.png" alt="">地图</span></div>
            <div class="info">门店名称：店铺名字店铺名字店铺名字店铺名<span><img src="../assets/地图.png" alt="">地图</span></div> 
        </div>
        <div class="jiedan" @click="toorder">接单</div>
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
  created:function(){
      this.axios.post("/driver/findDirectOrderByOrderId",{
          orderId:'23232'
      })
      .then(res => {
        // this.orderinfo = res.data
        console.log(res)
      })
      .catch(err=> {
        console.log(err)
      })
    }
}
</script>

<style lang="less" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .nav{
        width: 100%;
        height: 80px;
        background: #63ADDE;
        font-size: 36px;
        color: white;
        line-height: 80px;
        text-align: center;

        p{
            transform: translateX(-32px);
        }
    }
    ul li{
        float:left;
        list-style: none;
        margin-left: 10px;
    }
    ul li a{
        color: white;
        text-decoration: none;
    }
    ul li a:hover{
        cursor: pointer;
    }
    hr{
        height: 10px;
        color: #d7d7d7;
        background: #d7d7d7;
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
