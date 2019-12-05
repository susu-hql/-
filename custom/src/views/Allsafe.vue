<template>
  <div>
    <van-nav-bar
      title="保险订单"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.back(-1)"
      class="header"
    />
    <div v-for="item in lists" :key="item.id">
      <van-card
        :desc="'保单'"
        :title="'订单号：'+item.orderNum"
        :thumb="require('../assets/imgs/baoxian.jpg') "
        :thumb-link="'/safeDetails?id='+item.insuranceOrderId"
      >
        <div slot="tags">
          <p>保费：{{item.insurancePrice}}元</p>
        </div>
        <div slot="tags" class="stuta01">
          <span v-html="getStatu(item.orderState)"></span>
        </div>
        <div slot="footer">
          <div v-show="item.orderState==0">
            <van-button size="small" @click="quxiao(item.insuranceOrderId)">取消服务</van-button>
            <van-button
              size="small"
              type="warning"
              is-link
              :to="'idCard?id='+item.insuranceOrderId"
            >去录入</van-button>
          </div>
        </div>
      </van-card>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { Toast } from "vant";
export default {
  data() {
    return {
      lists: []
    };
  },
  methods: {
    getshu() {
      this.axios
        .get("/user/getMyInsurances")
        .then(res => {
          console.log(res.data.data);
          this.lists = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    onClickLeft() {
      this.$router.push({
        path: "/mylist",
        name: "mylist"
      });
    },
    getType(type) {
      if (type == 1) {
        return "预估损订单";
      } else if (type == 2) {
        return "直接损失订单";
      }
    },
    getStatu(statu) {
      if (statu == 0) {
        return "待录入";
      } else if (statu == 1) {
        return "待审核";
      } else if (statu == 2) {
        return "通过";
      }
    },
    quxiao(id) {
      console.log(id);
      Dialog.confirm({
        title: "提示",
        message: "您确定取消本次服务吗"
      })
        .then(() => {
          this.axios
            .post("/user/deleteMyInsuranceOrder", {
              orderId: id
            })
            .then(res => {
              if (res.data.state == "200") {
                Toast("您已成功取消本次服务");
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
    }
  },
  created() {
    this.getshu();
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.van-cell {
  text-align: left;
  font-size: 18px;
  margin-bottom: 5px;
}
.van-card__content {
  text-align: left;
  position: relative;
}
.stuta01 {
  position: absolute;
  right: 0px;
  top: 10px;
  color: rgb(230, 30, 30);
  font-size: 13px;
}
.van-card__footer {
  position: absolute;
  right: 10px;
  bottom: 12px;
}
p {
  padding-left: 0;
  font-size: 12px;
  margin-top: 2px;
}
.van-card__title {
  margin-top: 15px;
}
</style>>

