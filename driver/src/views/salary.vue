<template>
  <div id="se">
    <nav class="nav">
      <router-link to="/" class="ift" id="f">&#xe607;返回</router-link>
      <p class="b">我的工资</p>
    </nav>
    <div class="nr">

    </div>
  </div>
</template>
<script>
export default {
  el: "#se"
};
</script>

<style lang="less">
.nav {
  width: 100%;
  height: 80px;
  background: #333;
}
body{
  background: rgba(204, 204, 204, 1);
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
  margin-right: 60px;
  font-size: 30px;
}




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