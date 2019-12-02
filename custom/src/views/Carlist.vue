<template>
  <div>
    <van-nav-bar
      title="车辆订单"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.push('/mylist')"
      class="header"
    />
    <div v-for="item in lists" :key="item.id">
      <van-card
        :desc="'类型：'+getType(item.type)"
        :title="'订单号：'+item.orderN"
        :thumb="require('../assets/imgs/'+item.photo) "
        :thumb-link="'/details?'+item.id"
      >
        <div slot="tags">
          <p>接车时间：{{item.time}}</p>
          <p>接车司机：{{item.driver}}</p>
        </div>
        <div slot="tags" class="stuta01">
          <span v-html="getStatu(item.statu)"></span>
        </div>
        <div slot="footer">
          <div v-show="item.statu==1">
            <van-button size="small" @click="quxiao(item.id)">取消服务</van-button>
            <van-button size="small" type="warning" is-link to="index">去付款</van-button>
          </div>
          <div v-show="item.statu>1&&item.statu<5">
            <van-button size="small" type="warning" @click="tuikuan(item.id)">退款</van-button>
          </div>
          <div v-show="item.statu==12">
            <van-button size="small" type="warning" @click="comment(item.id)">去评价</van-button>
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
      lists: [
        {
          id: 1,
          orderN: "123115456465",
          type: "1",
          time: "2019/11/28 11:20:08",
          driver: "小谢",
          statu: 12,
          photo: "shigu01.jpg"
        },
        {
          id: 2,
          orderN: "123115456465",
          type: "1",
          time: "2019/11/28 11:20:08",
          driver: "小谢",
          statu: 1,
          photo: "shigu01.jpg"
        },
        {
          id: 3,
          orderN: "123115456465",
          type: "1",
          time: "2019/11/28 11:20:08",
          driver: "小谢",
          statu: 2,
          photo: "shigu01.jpg"
        }
      ]
    };
  },
  methods: {
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
      if (statu == 1) {
        return "未支付";
      } else if (statu == 2) {
        return "审核中";
      }
    },
    quxiao(id) {
      Dialog.confirm({
        title: "提示",
        message: "您确定取消本次服务吗"
      })
        .then(() => {
          var index = this.lists.findIndex(item => {
            if (item.id == id) {
              return true;
            }
          });
          this.lists.splice(index, 1);
          Toast("您已成功取消本次服务");
        })
        .catch(() => {
          // on cancel
        });
    },
    tuikuan(id) {
      Dialog.confirm({
        title: "提示",
        message: "您确定退款吗"
      })
        .then(() => {
          this.$router.push({
            path: "/refund",
            query: { id }
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    comment(id){
       this.$router.push({
            path: "/comment",
            query: { id }
          });       
    }
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
  right: 10px;
  top: 10px;
  color: rgb(230, 30, 30);
  font-size: 16px;
}
.van-card__footer {
  position: absolute;
  right: 10px;
  bottom: 12px;
}
p{
  padding-left: 0;
  font-size: 12px;
  margin-top: 2px;
}
</style>>

