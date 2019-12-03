<template>
  <div>
<van-nav-bar
      title="保单详情"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.push('/home/mydata')"
      class="header"
    />
    <hr>
    <div class="dmiddle">
      <hr>
      <span>订单信息</span>
      
      <p>保险公司名称：人寿保险</p>
      <p>车牌号：京N88R88</p>
      <p>交强保单号：2017229382392392392</p>
      <p>交强起始日期：2017.02.19</p>
      <p>交强终止日期：2017.02.19</p>
      <p>商业保单号：2017229382392392392</p>
      <p>商业起始日期：2017.02.19</p>
      <p>商业终止日期：2017.02.19</p>
    </div>
    <hr />
    <table class="biaoge">
      <tr>
        <td>已投保险种</td>
        <td>保额</td>
        <td>保费金额</td>
        <td>含不计免赔</td>
      </tr>
      <tr>
        <td>交强险</td>
        <td>100万</td>
        <td>2098.45元</td>
        <td>含</td>
      </tr>
    </table>
    <hr>
    <div class="allplice">
      <span>
        投保实收金额：
      </span>
      <span class="allqian">
        4567.43元
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";

p {
  display: block;
  padding-left: 0;
  text-indent: 2em;
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
  margin-top: 40px;
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

.biaoge{
text-align: center;
width: 100%;
  tr{
    margin-bottom: 3px;
  font-size: 14px;
  font-weight: 400;
  display: flex;
justify-content:space-around;
td{
  width: 25%;
}
  }

}
.allplice{
  font-size: 16px;
  text-align: right;
  span{
    margin-right: 10px;
  }
  .allqian{
    color: red;
    margin-right: 20px;
  }
}
</style>>

