<template>
  <div class="order">
    <div class="nav">
      <ul>
        <li @click="goback">&lt;返回</li>
      </ul>
      <p>全部订单</p>
    </div>
    <div class="tab">
      <ul>
        <li>进行中</li>
        <li>已完成</li>
        <li>全部订单</li>
      </ul>
    </div>
    <div class="orders">
      <div class="orders-top">
        <span>订单号:213151321532135</span>
        <span>新订单</span>
      </div>
      <div class="orders-bottom">
        <div class="touxiang"></div>
        <div class="info">
          <span>验车</span>
          <br />
          <span>接车时间：2119.11.28</span>
        </div>
        <div class="accept">
          <button type="button" @click="acceprBtn">接单</button>
        </div>
      </div>
    </div>
    <div class="orders">
      <div class="orders-top">
        <span>订单号:213151321532135</span>
        <span>新订单</span>
      </div>
      <div class="orders-bottom">
        <div class="touxiang"></div>
        <div class="info">
          <span>验车</span>
          <br />
          <span>接车时间：2119.11.28</span>
        </div>
        <div class="accept">
          <button type="button">接单</button>
        </div>
      </div>
    </div>
    <div class="orders">
      <div class="orders-top">
        <span>订单号:213151321532135</span>
        <span>新订单</span>
      </div>
      <div class="orders-bottom">
        <div class="touxiang"></div>
        <div class="info">
          <span>验车</span>
          <br />
          <span>接车时间：2119.11.28</span>
        </div>
        <div class="accept">
          <button type="button">接单</button>
        </div>
      </div>
    </div>
    <div class="orders">
      <div class="orders-top">
        <span>订单号:213151321532135</span>
        <span>新订单</span>
      </div>
      <div class="orders-bottom">
        <div class="touxiang"></div>
        <div class="info">
          <span>验车</span>
          <br />
          <span>接车时间：2119.11.28</span>
        </div>
        <div class="accept">
          <button type="button">接单</button>
        </div>
      </div>
    </div>
    <div class="orders">
      <div class="orders-top">
        <span>订单号:213151321532135</span>
        <span>新订单</span>
      </div>
      <div class="orders-bottom">
        <div class="touxiang"></div>
        <div class="info">
          <span>验车</span>
          <br />
          <span>接车时间：2119.11.28</span>
        </div>
        <div class="accept">
          <button type="button">接单</button>
        </div>
      </div>
    </div>
    <div class="orders">
      <div class="orders-top">
        <span>订单号:213151321532135</span>
        <span>新订单</span>
      </div>
      <div class="orders-bottom">
        <div class="touxiang"></div>
        <div class="info">
          <span>验车</span>
          <br />
          <span>接车时间：2119.11.28</span>
        </div>
        <div class="accept">
          <button type="button">接单</button>
        </div>
      </div>
    </div>
    <div class="orders">
      <div class="orders-top">
        <span>订单号:213151321532135</span>
        <span>新订单</span>
      </div>
      <div class="orders-bottom">
        <div class="touxiang"></div>
        <div class="info">
          <span>验车</span>
          <br />
          <span>接车时间：2119.11.28</span>
        </div>
        <div class="accept">
          <button type="button">接单</button>
        </div>
      </div>
    </div>
    <div class="orders">
      <div class="orders-top">
        <span>订单号:213151321532135</span>
        <span>新订单</span>
      </div>
      <div class="orders-bottom">
        <div class="touxiang"></div>
        <div class="info">
          <span>验车</span>
          <br />
          <span>接车时间：2119.11.28</span>
        </div>
        <div class="accept">
          <button type="button">接单</button>
        </div>
      </div>
    </div>
    <div class="orders">
      <div class="orders-top">
        <span>订单号:213151321532135</span>
        <span>新订单</span>
      </div>
      <div class="orders-bottom">
        <div class="touxiang"></div>
        <div class="info">
          <span>验车</span>
          <br />
          <span>接车时间：2119.11.28</span>
        </div>
        <div class="accept">
          <button type="button">接单</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.push("/");
    },
    acceprBtn() {
      this.$router.push("/orderAmount");
    }
  }
}
</script>

<style lang='less' scoped>
* {
  margin: 0;
  padding: 0;
}
.nav {
  width: 100%;
  height: 80px;
  background: #63ADDE;
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
  line-height:42px;
}
.orders-top {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: -20px
}
.orders-top span:last-child {
  transform: translateX(8px);
}
.orders-bottom {
  margin-top: 8px;
}
.touxiang {
  width: 100px;
  height: 100px;
  background: lightblue;
  float: left;
  margin-left: 60px;
  margin-right: 20px;
}
.info {
  text-align: left;
  line-height: 54px;
}
.accept {
  float: right;
  margin-right: 66px;
  margin-top: -45px;
}
.accept button {
  width: 112px;
  height: 36px;
  background: white;
  border: 1px solid black;
  outline: none;
  border-radius: 5px;
}
</style>