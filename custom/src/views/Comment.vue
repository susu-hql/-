<template>
  <div>
    <van-nav-bar
      title="发表评价"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.push('/carlist')"
      class="header"
    />
    <div class="commentHeader">
      <span>直接预约维修</span>
      <br />
      <span>司机：王五</span>
    </div>
    <van-divider content-position="left">评价</van-divider>
    <div>
      <van-rate v-model="value" allow-half size="30px" />
    </div>
    <div>
      <van-checkbox-group v-model="result">
        <van-checkbox name="a" class="a">驾驶平稳</van-checkbox>
        <van-checkbox name="b" class="b">工作认真</van-checkbox>
        <van-checkbox name="c" class="c">活地图认路准</van-checkbox>
        <van-checkbox name="d" class="d">服务态度好</van-checkbox>
      </van-checkbox-group>
    </div>
    <br />
    <van-cell-group>
      <van-field
        v-model="message"
        rows="5"
        autosize
        type="textarea"
        maxlength="200"
        placeholder="请写下您对司机的评价（选填）"
        show-word-limit
      />
    </van-cell-group>
    <div>
      <van-checkbox v-model="checked" class="niming">匿名提交</van-checkbox>
      <div>
        <van-tabbar>
          <van-tabbar-item is-link to="/carlist" @click="addComment()">提交评价</van-tabbar-item>
        </van-tabbar>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: 2.6,
      result: [],
      message: "",
      checked: ""
    };
  },
  methods: {
    addComment() {
      Toast("您已成功评价");
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
p {
  display: block;
  padding-left: 0;
  text-indent: 2em;
}
.commentHeader {
  font-size: 16px;
  margin-bottom: 30px;
  span {
    display: inline-block;
    margin-top: 10px;
  }
}
.van-checkbox-group {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .van-checkbox {
    width: 38%;
    font-size: 16px;
    margin-top: 30px;
    margin-left: 25px;
  }
}
.van-cell-group {
  border: 1px solid #000;
  width: 90%;
  text-align: center;
  margin-left: 5%;
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
.niming {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: 20px;
  font-size: 16px;
}
</style>>

