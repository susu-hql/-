<template>
  <div class="sss">
    <nav class="nav">
      <router-link to="/" class="ift" id="f">&#xe607;返回</router-link>
      <p class="b">易理赔司机</p>
    </nav>
    <div class="cps">
      <div class="cpsa">
        <div class="tx">
          <img
            :src="require('../assets/pic/'+img)"
            alt
            :style="{'width':'65px','height':'65px','border-radius':'10px'}"
          />
        </div>
        <div class="cpsaa">
          <p class="xm">{{name}}</p>
          <van-rate
            v-model="value"
            allow-half
            void-icon="star"
            void-color="#eee"
            class="xing"
            readonly
          />
          <p>{{value}}分</p>
        </div>
        <div class="dh">
          <p class="dd">订单数&nbsp;: &nbsp; {{dindan}}单</p>
          <p>好评率&nbsp;:&nbsp;{{bfb}}%</p>
        </div>
      </div>
    </div>
    <ul class="zt">
      <li @click="qb($event)" class="1" id="xzys">
        <i class="ift">&#xe70e;</i>
        <p>我的工资</p>
        <i class="ift y">&#xe64a;</i>
      </li>
      <li @click="qb($event)" class="2" id="xzys">
        <i class="ift">&#xe600;</i>
        <p>我的订单</p>
        <i class="ift y">&#xe64a;</i>
      </li>
      <li @click="qb($event)" class="3" id="xzys">
        <i class="ift">&#xe60c;</i>
        <p>我的评价</p>
        <i class="ift y">&#xe64a;</i>
      </li>
      <li @click="qb($event)" class="4" id="xzys">
        <i class="ift">&#xe611;</i>
        <p>个人中心</p>
        <i class="ift y">&#xe64a;</i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      value: 2.5,
      sy: [],
      dindan: "222",
      img: "blog菜单图片_07.png",
      name: "何志勇"
    };
  },
  methods: {
    qb(e) {
      console.log(e.currentTarget.className);
      if (e.currentTarget.className == "1") {
        window.location.href = "../src/views/Login.vue";
      } else if (e.currentTarget.className == "2") {
        window.location.href = "../src/views/";
      } else if (e.currentTarget.className == "3") {
        window.location.href = "../src/views/";
      } else if (e.currentTarget.className == "4") {
        window.location.href = "../src/views/";
      }
    }
  },
  computed: {
    bfb() {
      return (this.value / 5) * 100;
      
    }
  },
  created() {
    this.axios
      .post("/driver/person",{
       driverId:"1"
      })
      .then(res => {
        console.log(res)
        this.sy = res.data.data;

      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body {
  background: white;
}
.van-icon-star {
  font-size: 50px;
}
.xing{
  margin-left:-50px; 
}

//导航栏
.nav {
  width: 100%;
  height: 80px;
  background: #63ADDE;
}
.ift {
  color: rgb(255, 235, 235);
  text-decoration: none;
}
#f {
  float: left;
  line-height: 80px;
  font-size: 30px;
}
.b {
  color: aliceblue;
  line-height: 80px;
  text-align: center;
  margin: 0 auto;
  font-size: 30px;
}
//司机综合信息
.cps {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
}
.cpsa {
  width: 100%;
  height: 130px;
  font-size: 20px;
}
.cpsaa {
  display: flex;
  flex-wrap: nowrap;
  margin-top: -130px;
  margin-left: 170px;
  height: 50px;
  line-height: 50px;
}
.tx {
  border-radius: 13px;
  width: 130px;
  height: 130px;
  margin-left: 30px;
}
.xm {
  margin-left: 50px;
}
// .van-rate
.dh {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 30px;
  margin-left: 200px;
}
.dd {
  margin-right: 30px;
}

//
.zt {
  width: 90%;
  height: 500px;
  margin: 0 auto;
  padding-top: 10px;
  font-size: 30px;
}
.zt > li {
  width: 99%;
  height: 100px;
  margin-top: 20px;
  display: flex;
  align-items: stretch;
  line-height: 100px;
  border: solid #333 2px;
}
li i {
  margin-left: 10px;
  color: #333 !important;
}
.y {
  margin-left: 30px;
}
p {
  width: 500px;
  text-align: left;
  margin-left: 20px;
}

#xzys:active {
  background: white;
}
</style>

<style lang="less">
@font-face {
  font-family: "iconfont"; /* project id 1531997 */
  src: url("//at.alicdn.com/t/font_1531997_694yqw1hmv6.eot");
  src: url("//at.alicdn.com/t/font_1531997_694yqw1hmv6.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1531997_694yqw1hmv6.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1531997_694yqw1hmv6.woff") format("woff"),
    url("//at.alicdn.com/t/font_1531997_694yqw1hmv6.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1531997_694yqw1hmv6.svg#iconfont") format("svg");
}

.ift {
  font-family: "iconfont" !important;
  font-size: 50px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
