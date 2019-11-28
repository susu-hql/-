<template>
  <div class="status">
    <van-steps direction="vertical" :active="1">
      <van-step>
        <h3>新订单</h3>
        <p>2016-07-12 12:40</p>
      </van-step>
      <van-step>
        <h3>已接单</h3>
        <p>2016-07-11 10:00</p>
      </van-step>
      <van-step>
        <h3>已到达</h3>
        <p>上传车辆仪表盘和车辆外观图片：</p>
        <van-uploader v-model="fileList" multiple />
        <p>2016-07-10 09:30</p>
      </van-step>
      <van-step>
        <h3>去往维修点</h3>
        <p>2016-07-10 09:30</p>
      </van-step>
      <van-step>
        <h3>已到达</h3>
        <van-button type="primary" text="维修资料" @click="show = true" />
        <van-overlay :show="show" @click="show = false">
          <div class="wrapper" @click.stop>
            <div class="block">
              <input type="text" placeholder="维修接待姓名" v-model="name" />
              <p></p>
              <input type="text" placeholder="维修接待电话" v-model="phone" />
              <p></p>
              <input type="text" placeholder="预计维修时间" v-model="time" />
              <p></p>
              <button type="button" class="confirm" @click="show = false;addThingClick">确定</button>
              <button type="button" class="cancel" @click="show = false">取消</button>
            </div>
          </div>
        </van-overlay>
        <p>
          <span class="content">{{name}}</span>
          <span class="content">{{phone}}</span>
          <span class="content">{{time}}</span>
        </p>

        <p>2016-07-10 09:30</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  data() {
    return {
      fileList: [],
      show: false,
      name: "",
      phone: "",
      time: ""
    };
  },
  components: {
    [Button.name]: Button
  },
  methods: {
    addThingClick() {
      console.log(this.$el.querySelector("input").value);
    }
  }
};
</script>

<style lang="less">
.van-hairline::after {
  border: 0 solid black;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 500px;
  height: 360px;
  background-color: #fff;
  border-radius: 9px;
  text-align: center;
}
.block input {
  border: 1px solid black;
  padding: 10px;
}
.block input:first-child {
  margin-top: 48px;
}
.block button {
  background: white;
  width: 130px;
  border: 1px solid black;
  height: 40px;
  padding: 10px;
}
.confirm {
  margin-right: 60px;
}
.content {
  margin-right: 10px;
}
</style>