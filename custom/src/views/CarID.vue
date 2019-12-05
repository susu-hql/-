<template>
  <div>
    <van-nav-bar
      title="车主卡"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.push('/home/mydata')"
      class="header"
    />
    <div class="none" v-show="false">
      <h5>未检测到您的车主卡信息</h5>
    </div>
    <div class="hong"></div>
    <div class="cheka" v-for="(item, index) in list" :key="index">
      <van-card>
        <div slot="tags">
          <h3>车主卡</h3>
          <i @click="del(item.cardNum)">X</i>
          <h4>车牌号码：{{item.plateNumber}}</h4>
          <span v-html="getstatu(item.cardState)">(审核中)</span>

          <p>车主姓名：{{item.ownerName}}</p>
          <p>车主卡号：{{item.cardNum}}</p>
          <p>交强险到险日期：{{item.compulsoryInsuranceDate}}</p>
          <p>商业险到险日期：{{item.commercialInsuranceDate}}</p>
        </div>
      </van-card>
    </div>

    <div>
      <van-tabbar>
        <van-tabbar-item is-link to="/addcarID">继续添加车辆</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { Toast } from "vant";
export default {
  data() {
    return {
      list: ""
    };
  },
  methods: {
    del(i) {
      Dialog.confirm({
        title: "提示",
        message: "您确定删除本条车主卡？"
      })
        .then(() => {
          console;
          this.axios
            .post("/user/deleteCardByNum", {
              cardNum: i
            })
            .then(res => {
              if (res.data.state == "200") {
                Toast("您已成功删除车主卡");
                this.getshu()
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {
          // on cancel
        });
    },
    getstatu(i) {
      if (i == 0) {
        return "审核中";
      } else if (i == 1) {
        return "已生效";
      } else if (i == 2) {
        return "未通过";
      } else {
        return "审核中";
      }
    },
    getshu() {
      this.axios
        .post("/user/findCarCardDetail")
        .then(res => {
          console.log(res.data.data);
          this.list = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getshu()
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.hong {
  margin-top: 50px;
}
.cheka {
  margin-top: 10px;
}
.none {
  margin-top: 50px;
}
p {
  display: block;
  padding-left: 0;
  text-indent: 2em;
}
.van-card {
  text-align: left;
  position: relative;
  h3 {
    margin: 0;
    text-align: center;
  }
  h4 {
    margin: 0;
    color: #63adde;
    text-indent: 2em;
    font-size: 14px;
    display: inline-block;
  }
  span {
    margin-left: 10px;
    color: rgb(255, 11, 11);
  }
  i {
    display: inline-block;
    text-align: center;
    line-height: 22px;
    background-color: rgba(68, 60, 60, 0.272);
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    font-style: inherit;
    font-size: 18px;
  }
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
</style>>
