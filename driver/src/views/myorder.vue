<template>
  <div class="order">
    <div class="nav">
      <ul>
        <li>&lt;返回</li>
      </ul>
      <p @click="goback">全部订单</p>
    </div>
    <!-- <div class="tab">
      <ul>
        <li>进行中</li>
        <li>已完成</li>
        <li>全部订单</li>
      </ul>
    </div>-->
    <div class="orders" v-for="(item,index) in myorder" :key="index">
      <div class="orders-top">
        <span>订单号:{{item.directOrderId}}</span>
        <span>{{item.orderStateName}}</span>
      </div>
      <div class="orders-bottom">
        <div class="info">
          <span>{{item.typeName}}</span>
          <br />
          <span>接车时间：{{item.substituteTime}}</span>
        </div>
        <div class="accept">
          <button type="button" @click=getId(myorder[index].directOrderId)>接单</button>
        </div>
      </div>
    </div>
    <div class="orders" v-for="(item,index) in myorder2" :key="'orders'+index">
      <div class="orders-top">
        <span>订单号:{{item.orderId}}</span>
        <span>{{item.orderStateName}}</span>
      </div>
      <div class="orders-bottom">
        <div class="info">
          <span>{{item.typeName}}</span>
          <br />
          <span>接车时间：{{item.substituteTime}}</span>
        </div>
        <div class="accept">
          <button type="button" @click=getId(myorder2[index].orderId)>接单</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myorder: [],
      myorder2:[]
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    getId(i) {
      console.log(i)
      // this.$router.push();
      location.assign("/orderAmount?orderId="+i)
    }
  },
  created() {
    this.axios
      .get("/driver/directOrder/findList")
      .then(res => {
        this.myorder = res.data.data;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

      this.axios
      .get("/driver/assessmentOrder/findList")
      .then(res => {
        this.myorder2 = res.data.data;
        console.log("myoder2",this.myorder2);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang='less' scoped>
* {
  margin: 0;
  padding: 0;
}
.nav {
  width: 100%;
  height: 80px;
  background: #63adde;
  font-size: 36px;
  color: white;
  line-height: 80px;
  text-align: center;

  p {
    transform: translateX(-80px);
  }
}
.nav ul li {
  float: left;
  list-style: none;
  margin-left: 30px;
}
.nav ul li a {
  color: white;
  text-decoration: none;
}
.nav ul li a:hover {
  cursor: pointer;
}
.tab ul li {
  list-style: none;
}
.tab ul {
  display: flex;
  justify-content: space-around;
  font-size: 36px;
  height: 60px;
  line-height: 60px;
  border-bottom: 6px solid lightgray;
}
.orders {
  font-size: 36px;
  border-bottom: 6px solid lightgray;
  height: 200px;
  line-height: 42px;
}
.orders-top {
  height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: -20px;
}
.orders-top span:first-child {
  float: left;
  margin-left: 40px;
}
.orders-top span:last-child {
  float: right;
  color: red;
  margin-right: 20px;
}
.orders-bottom {
  margin-top: 8px;
}
.info {
  text-align: left;
  line-height: 66px;
  margin-left: 20px;
}
.accept {
  float: right;
  margin-right: 20px;
  margin-top: -45px;
}
.accept button {
  width: 112px;
  height: 40px;
  background: orange;
  border: 1px solid orange;
  outline: none;
  border-radius: 5px;
  color: white;
}
</style>