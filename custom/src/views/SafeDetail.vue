<template>
  <div>
    <hr />
    <div class="dheader">
      <p>订单号：{{lists.insuranceNum}}</p>
      <p>订单时间：</p>
      <span style="color:red" class="statu">待录入</span>
      <van-button size="small">取消服务</van-button>
    </div>
    <hr />
    <div class="dmiddle">
      <span>订单信息</span>
      <p v-html="'姓&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名：'+lists.name"></p>
      <p>联系方式：{{lists.tel}}</p>
      <p>车牌号码：{{lists.carNum}}</p>
    </div>
    <hr />
    <div class="dfooter">
      <span>服务信息</span>
      <p>保险公司：{{lists.companyName}}</p>
      <p class="fuwu">险种与费用：</p>
      <ul  >
        <li v-for="(item, index) in list" :key="index">
          <span class="shu">{{item.insuranceName}}</span>
          <span style="color:red" class="dollar">{{item.price}}.00元</span>
        </li>
      </ul>
      <p class="alldollar">
        维修折算合计：{{lists.price}}.00元
        <span style="color:red"></span>
      </p>
    </div>
    <div>
      <van-tabbar>
        <van-tabbar-item style="color:red" is-link to="/idCard">去录入</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lists:'',
      list:''
    }
  },

  created(){
    console.log(this.$route.query.id)
    this.axios.post('/user/getInsuranceDatail',{
      orderId:this.$route.query.id
    })
    .then(res =>{
      console.log(res.data.data.insuranceList);
      this.lists = res.data.data.detail
      this.list = res.data.data.insuranceList
    })
    .catch(err =>{
      console.log(err)
    })
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
.van-tabbar {
  height: 40px;
  .van-tabbar-item {
    border: 1px solid #000;
    font-size: 16px;
  }
}
</style>>

