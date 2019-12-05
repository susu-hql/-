<template>
  <div>
    <van-nav-bar
      title="添加车主卡"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.push('/carid')"
      class="header"
      
    />
    <div>
      <div class="ju"></div>
      <div class="dmiddle">
        <van-cell-group>
          <van-field v-model="name" required clearable label="持卡人：" placeholder="请输入持卡人的姓名" />
          <van-field v-model="phone" required clearable label="手机号：" placeholder="请输入持卡人的手机号" />
          <van-field v-model="carname" required clearable label="车主姓名：" placeholder="请输入车主姓名" />
          <van-field v-model="carnum" required clearable label="车牌号码：" placeholder="请输入车牌号" />
        </van-cell-group>
      </div>
      <hr />
      <div class="dmiddle">
        <van-cell-group>
          <van-field v-model="nameID" clearable label="车主身份证：" placeholder="(选填)" />
          <van-field v-model="fadong"  clearable label="发动机号：" placeholder="请输入发动机号" />
        </van-cell-group>
      </div>


</div>
    <div>
      <van-tabbar>
        <van-tabbar-item is-link to="/carid"  @click="addComment()">新增车主卡</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      name: "",
      phone: "",
      carname: "",
      carnum: "",
      nameID: "",
      fadong: "",
      
    };
  },
  methods: {
    addComment() {
      this.axios.post('/user/addNewCarCard',{
        ownerName: this.name,
        ownerTel : this.phone,
        carNum: this.carnum,
        ownerPid:this.nameID,
        carEngineNum:this.fadong
      })
      .then(res =>{
        console.log(res)
        if (res.data.state == "200"){
          Toast("您已成功添加车主卡");
        }
      })
      
    },
   
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.ju{
  margin-top: 50px;
}
.van-tabbar {
  height: 40px;
  .van-tabbar-item {
    font-size: 16px;
    background-color: #63adde;
    color: rgb(255, 255, 255);

    .tijiao {
      display: inline-block;
      text-align: right;
    }
  }
}
p {
  display: block;
  padding-left: 0;
  text-indent: 1em;
}
.shangchuan {
  text-align: left;
  margin-top: 20px;
}
.van-uploader {
  display: inline-block;
  text-align: left;
  margin-top: 10px;
  margin-left: 20px;
}
.dmiddle {
  text-align: left;

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
.img{
  text-align: left;
  margin-top: 20px;
  margin-bottom: 50px;
  .van-image{
    margin-left: 10px;
    margin-top: 10px;
  }
}
</style>>

