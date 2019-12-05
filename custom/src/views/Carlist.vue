<template>
  <div>
    <van-nav-bar
      title="车辆订单"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.push('/mylist')"
      class="header"
    />
    <div class="bgc"></div>
    <div v-for="(item, index) in lists" :key="index">
      <van-card
        :desc="'类型：'+getType(item.orderType)"
        :title="'订单号：'+item.orderId"
        :thumb="require('../assets/imgs/'+ getimg(item.imgUrl)  ) "
        :thumb-link="'/details?id='+item.orderId+'&type='+item.orderType"
      >
        <div slot="tags">
          <p>接车时间：{{item.substituteTime}}</p>
          <p>接车司机：{{item.driveName}}</p>
        </div>
        <div slot="tags" class="stuta01">
          <span v-html="item.orderState"></span>
        </div>
        <div slot="footer">
          <div v-show="item.orderState=='待付款'">
            <van-button size="small" @click="quxiao(item.orderId,item.orderType)">取消服务</van-button>
            <van-button size="small" type="warning" is-link to="index">去付款</van-button>
          </div>
          <div v-show="item.orderState=='待确认'">
            <van-button size="small" type="warning" @click="tuikuan(item.orderId,item.orderType)">退款</van-button>
          </div>
          <div v-show="item.orderState=='已完成'">
            <van-button
              size="small"
              type="warning"
              @click="quxiao(item.orderId,item.orderType)"
            >删除订单</van-button>
            <van-button
              size="small"
              type="warning"
              @click="comment(item.orderId,item.orderType)"
            >去评价</van-button>
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
      var token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoie1widXNlcklkXCI6MSxcInVzZXJOYW1lXCI6XCJMV1lcIixcInVzZXJUZWxcIjpcIjE3NzM4MTMwOTMyXCIsXCJ1c2VySWRjYXJkXCI6XCI0NTA0MDMxOTc4MDgxMDcyNDZcIixcInVzZXJMYXN0TG9naW50aW1lXCI6MTU3NDkyOTEyOTAwMCxcImluc3VyYW5jZUlkXCI6MSxcImNvbXBhbnlOYW1lXCI6XCLkuK3lm73kurrlr79cIixcImluc3VyYW5jZURhdGVcIjoxNTc1NDc1MjAwMDAwLFwiaW5zdXJhbmNlUGVyc29uXCI6XCLmnY7nmb1cIixcInVzZXJOb3Rlc1wiOlwi5YKF5aSnXCIsXCJpbWdVcmxcIjpcIuWCheWkpyBcIixcImRhdGFzdGF0ZVwiOjF9IiwiaXNzIjoiamF2YSIsImV4cCI6MTU3NTYyMjM1MCwidXNlcklkIjoxfQ.s_cYEnaK7aYyQIsJKYg7Zm-vegXQr1R7m71ijaD6kcM";
      sessionStorage.setItem("token", token);

      this.axios
        .get("/user/getSimpleOrderInfo")
        .then(res => {
          console.log(res.data.data);
          if (res.data.state == "200") {
            this.lists = res.data.data;
            console.log(this.lists);
          }
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
      if (type == 0) {
        return "预估损订单";
      } else if (type == 1) {
        return "直接损失订单";
      }
    },
    getStatu(statu) {
      if (statu == 1) {
        return "未支付";
      } else if (statu == 2) {
        return "审核中";
      }
    },
    quxiao(id, type) {
      console.log(id, type);
      Dialog.confirm({
        title: "提示",
        message: "您确定取消本次服务吗"
      })
        .then(() => {
          this.axios
            .post("/user/cancelService", {
              orderId: id,
              orderType: type
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
    },
    tuikuan(id, type) {
      Dialog.confirm({
        title: "提示",
        message: "您确定退款吗"
      })
        .then(() => {
          this.$router.push({
            path: "/refund",
            query: { id, type }
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    comment(id, type) {
      this.$router.push({
        path: "/comment",
        query: { id, type }
      });
    },
    getimg(img) {
      if (img == 0) {
        return img;
      } else {
        return "shigu01.jpg";
      }
    }
  },
  created() {
    this.getshu()
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.bgc {
  margin-top: 50px;
}
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
  right: 10px;
  top: 13px;
  color: rgb(230, 30, 30);
  font-size: 16px;
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
</style>>

