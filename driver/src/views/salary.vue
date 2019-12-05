<template>
  <div id="se">
    <nav class="nav">
      <div class="ift" id="f" @click="goback">&#xe607;返回</div>
      <p class="b">我的工资</p>
    </nav>
    <div :style="{'width':'100%','height':'20px','border-bottom':'1px #333 solid'}"></div>
    <div class="nr" v-for="(item,index) in sy" :key="index">
     <div :style="{'display':'flex','flex-wrap':'nowrap','justify-content':'space-between','width':'100%'}">
      <p class="gs">{{item.stateName}}</p>
      <p class="sj">{{item.endTime}}</p>
    </div>
      <p class="gz">您得到工资:{{item.carriageFee}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
  return{
    sy:[],
  }
   },
   methods:{
     goback(){
     this.$router.go(-1);
     }
   },
    created(){
    this.axios
      .post("/driver/findSalaryByDriverId",{
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
*{
  margin: 0;
  padding:0;
}
.nav {
  width: 100%;
  height: 80px;
  background: #63ADDE;
}
body{
  background: white;
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
.nr{
  width: 100%;
  height:150px;
  background: white;
  font-size:30px;
  border-bottom: 1px solid #333;  
  padding-top: 20px;
}
.gs{
width: 300px;
margin-bottom: 30px;
}
.sj{
width: 300px;
float: right;
}
.gz{
width:320px;
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