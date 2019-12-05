<template>
  <div>
    <hr />
    <div class="dheader">
      <p>订单号：{{lists.orderId}}</p>
      <p>订单时间：{{lists.createTime}}</p>
      <span style="color:red" class="statu">{{lists.orderState}}</span>
      <van-button size="small" @click="quxiao(lists.orderId,item.orderType)">取消服务</van-button>
    </div>
    <hr />
    <div class="dmiddle">
      <span>订单信息</span>
      <p v-html="'姓&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名：'+lists.clientName"></p>
      <p>联系方式：{{lists.clientTel}}</p>
      <p>车牌号码：{{lists.plateNumber}}</p>
      <p>接车时间：{{lists.substituteTime}}</p>
      <p>修车门店：{{lists.shopName}}</p>
      <p>修车地址：{{lists.shopAddress}}</p>
      <p>接车地址：{{lists.substituteAddress}}</p>
      <p>还车地址：{{lists.returnAddress}}</p>
    </div>
    <hr />
    <div class="dfooter">
      <span>服务信息</span>
      <p>服务项目：</p>
      <p class="fuwu">服务部位：</p>
      <ul>
        <li>
          <span class="shu">后视镜维修</span>
          <span style="color:red" class="dollar">$1000</span>
        </li>
        <li>
          <span class="shu">发动机维修</span>
          <span style="color:red" class="dollar">$1000</span>
        </li>
        <li>
          <span class="shu">轮胎维修</span>
          <span style="color:red" class="dollar">$1000</span>
        </li>
        <li>
          <span class="shu">保险杠维修</span>
          <span style="color:red" class="dollar">$1000</span>
        </li>
      </ul>
      <p class="alldollar">
        维修合计：
        <span style="color:red">$3000</span>
      </p>
    </div>
    <div>
      <van-tabbar >
        <van-tabbar-item  style="color:black">接车费用: <span style="color:red">{{lists.carriageFee}}元</span></van-tabbar-item>
        <!-- <van-tabbar-item style="color:red" is-link to="/refund">退款</van-tabbar-item> -->
        <van-tabbar-item style="color:red" is-link to="/pay">去付款</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { Toast } from "vant";
export default {
 data(){
   return{
    lists:''
    
   }
   
 },
 methods:{
   quxiao(id,type) {
      console.log(id,type)
      Dialog.confirm({
        title: "提示",
        message: "您确定取消本次服务吗"
      })
        .then(() => {
        this.axios.post('/user/cancelService',{
          orderId:id,
          orderType:type
        }).then(res => {
        
        if (res.data.state == "200") {
         Toast("您已成功取消本次服务");
         location.reload()
        }
      })
      .catch(err => {
        console.log(err);
      });
         
          
        })
        .catch(() => {
          // on cancel
        });
    }
 },
 
 created(){
   var a= this.$route.query.id;
   var b = this.$route.query.type;
   console.log(this.id,this.type)
   this.axios.post('/user/getDetailOrderInfo',{
     orderId:a,
     orderType:b
   }).then(res =>{
     console.log(res.data.data);
     this.lists = res.data.data

   }) .catch(err => {
        console.log(err);
      });
 }
};
</script>

<style lang="less" scoped>
p {
  display: block;
  padding-left: 0;
  text-indent: 2em;
  font-size: 14px;
  text-align: left;
}
.dheader {

  position: relative;
  p {
    line-height: 30px;
  }
  .statu {
    font-size: 14px;
    position: absolute;
    top: 1px;
    right: 10px;
  }
  .van-button {
    position: absolute;
    bottom: 1px;
    right: 10px;
    font-size: 14px;
    text-align: center;
  }
}
.dmiddle {
  span {
    display: block;
    text-align: left;
    margin-top: 0;
    margin-bottom: 10px;
    margin-left: 2em;
    font-size: 14px;
  }
  p {
    line-height: 25px;
    background-color: #fff;
  }
}
.dfooter {
  margin-bottom: 45px;
  span {
    display: block;
    text-align: left;
    margin-top: 0;
    margin-bottom: 10px;
    margin-left: 2em;
    font-size: 14px;
  }
  p {
    line-height: 25px;
  }
  li {
    position: relative;
  }
  .shu {
    margin-left: 100px;
  }
  .dollar {
    position: absolute;
    top: 0;
    right: 10px;
  }
  .alldollar {
    display: flex;
    justify-content: flex-end;

    span {
      display: inline-block;
      margin-right: 10px;
    }
  }
}
.van-tabbar{
  height: 40px;
.van-tabbar-item{
  border: 1px solid #000;
  font-size: 16px
}
}

</style>>

