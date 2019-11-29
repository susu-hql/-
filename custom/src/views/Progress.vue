<template>
  <div>
    <van-steps direction="vertical" :active="0">

        <van-step v-for="item in lists" :key="item.id" >
          <h3>{{item.statu}}</h3>
          <h4>{{item.beizhu}}</h4>
          <p>{{item.time}}</p>
          <div v-show="getstatu(item.statu0)">
                woshijiahao
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
          statu0:1,
          time: "2016-07-11 10:00",
          beizhu: ""
        },
        {
          id: 2,
          statu: "已发送",
          statu0:1,
          time: "2016-07-11 10:00",
          beizhu: ""
        },
        {
          id: 3,
          statu: "已受理",
          statu0:2,
          time: "2016-07-11 10:00",
          beizhu: "我好可乐"
        },
        {
          id: 4,
          statu: "已派工",
          statu0:3,
          time: "2016-07-11 10:00",
          beizhu: "我好可乐"
        },
        {
          id: 5,
          statu: "司机接单",
          statu0:4,
          time: "2016-07-11 10:00",
          beizhu: "我好可乐"
        }
      ]
    };
  },
  methods:{
    getstatu(i){     
      if(i==this.lists.length-1&&i>3){
        return true
      }
    }
  }
};
</script>

<style lang="less" scoped>
h3 {
  text-align: left;
}
p {
  position: absolute;
  top: 30px;
  right: 3px;
  text-align: right;
}
h4 {
  text-align: left;
}

</style>>

