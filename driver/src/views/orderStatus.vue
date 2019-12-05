<template>
  <div class="status">
    <van-steps direction="vertical" :active="-1">
      <van-step v-for="(item,index) in dingdan" :key="index" class="buzhoutiao">
        <h3>{{item.logTitle}}</h3>
        <p>{{item.logTime}}</p>
        <p v-show="index == 3" class="address">{{item.logInfo}}</p>
        <div v-show="index == 4">
          <van-button type="primary" text="维修资料" @click="show = true" class="weixiuInfo" />
          <van-overlay :show="show" @click="show = false">
            <div class="wrapper" @click.stop>
              <div class="block">
                <input type="text" placeholder="维修接待姓名" v-model="name" />
                <p></p>
                <input type="text" placeholder="维修接待电话" v-model="phone" />
                <p></p>
                <input type="text" placeholder="预计维修时间" v-model="time" />
                <p></p>
                <button type="button" class="confirm" @click="addThingClick">确定</button>
                <button type="button" class="cancel" @click="show = false">取消</button>
              </div>
            </div>
          </van-overlay>
        </div>
        <div class="post-pic" v-show="index == 2">
          <van-uploader v-model="fileList" multiple :preview-size="50" @click="postImg" />
        </div>
        <div class="info" v-show="index == 4">
          <textarea v-model="havezhi"></textarea>
        </div>
      </van-step>
      <!--<van-step>
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
      </van-step> -->
    </van-steps>
    <div class="qhbtn">
      <van-button type="primary" @click="next" :disabled="active" class="next">下一步</van-button>
      <van-button type="primary" @click="done" class="finish">完成</van-button>
    </div>
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
      time: "",
      active:false,
      dingdan:[],
      weixiu:[],
      title:'',
      havezhi:[],
      can:true
    };
  },
  components: {
    [Button.name]: Button
  },
  methods: {
    addThingClick() {
      this.havezhi.push(this.name);
      this.havezhi.push(this.phone);
      this.havezhi.push(this.time);
      console.log("asdadad "+this.havezhi);
      this.show = false;
      this.dingdan.logInfo.push(this.havezhi)
    },
    next(){
      this.axios.post("/driver/handleOrders",{
        orderId:this.$route.query.orderId
      })
      .then(res => {
        console.log(res)
        this.weixiu = this.dingdan.length;
        console.log(this.weixiu)
        // if(this.weixiu>5){
        //   this.active = true
        // }
      })
      .catch(err => {
        console.log(err);
      }); 
      this.$router.go(0);
    },
    postImg(){
      let fd = new FormData();
      this.fileList.forEach((item,index) => {
        fd.append("files"+index,item.file)
      });
      this.axios.post("/driver/upload",{
        uploadType:1,
        orderId:this.$route.query.orderId
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    },
    done(){
      location.assign("/homea")
    }
  },
  created() {
    this.axios
      .post("/driver/findOrderLogByOrderId",{
        orderId:this.$route.query.orderId
      })
      .then(res => {
        this.dingdan = res.data.data;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    if(this.dingdan.length == 6){
      this.active = true;
      this.can = false
    }
  }
}
</script>

<style lang="less" scoped>
.status{
  text-align: left
}
.van-hairline::after {
  border-bottom: 2px solid black;
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
  border: 2px solid black;
  padding: 10px;
  margin: 8px
}
.block input:first-child {
  margin-top: 48px;
}
.block input:last-child{
  margin-bottom: 20px
}
.block button {
  background: white;
  width: 130px;
  border: 2px solid black;
  height: 40px;
  padding: 10px;
  margin-top: 20px
}
.confirm {
  margin-right: 60px;
}
.content {
  margin-right: 10px;
}
.qhbtn{
  position: absolute;
  bottom: 100px;
}
.next,.finish{
  width: 200px;
  margin-left: 120px;
  height: 50px
}
.buzhoutiao{
  height:120px;
  color: black
}
.buzhoutiao h3{
  float: left;
}
.buzhoutiao p{
  float: right
}
.weixiuInfo{
  margin-top: 60px;
  margin-left: -140px;
  width: 160px;
  height: 50px
}
.address{
  transform: translateX(-200px);
  margin-top: 80px;
}
.van-steps__items .van-step:nth-child(3){
  height: 160px;

  h3{
    margin-right: 300px;
  }
}
.van-steps__items .van-step:nth-child(5){
  height: 160px;

  textarea{
    border: none;
    margin-top: 4px
  }
}
</style>