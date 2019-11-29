<template>
  <div>
    <van-steps direction="vertical" :active="0">

        <van-step v-for="item in lists" :key="item.id" >
          <h3>{{item.statu}}</h3>
          <h4>{{item.beizhu}}</h4>
          <p>{{item.time}}</p>
          <div v-show="get">

          </div>
        </van-step>

      
    </van-steps>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          id: 1,
          statu: "已结单",
          time: "2016-07-11 10:00",
          beizhu: ""
        },
        {
          id: 2,
          statu: "已发送",
          time: "2016-07-11 10:00",
          beizhu: ""
        },
        {
          id: 3,
          statu: "已受理",
          time: "2016-07-11 10:00",
          beizhu: "我好可乐"
        },
        {
          id: 4,
          statu: "已派工",
          time: "2016-07-11 10:00",
          beizhu: "我好可乐"
        },
        {
          id: 5,
          statu: "司机接单",
          time: "2016-07-11 10:00",
          beizhu: "我好可乐"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
h3 {
  text-align: left;
}
p {
  position: absolute;
  top: 15px;
  right: 0;
}
h4 {
  text-align: left;
}
</style>>

