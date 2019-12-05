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
    </div>
    <van-divider content-position="left">评价</van-divider>
    <div>
      <van-rate v-model="value" allow-half size="30px" />
    </div>
    <div>
      <div class="buju">
    <label><input @change="get"  v-model="radioVal1" type="checkbox" value="工作认真" >工作认真</label>
    <label><input @change="get"  v-model="radioVal2" type="checkbox" value="驾驶平稳">驾驶平稳</label>
    <label><input @change="get"  v-model="radioVal3" type="checkbox" value="活地图认路准" >活地图认路准</label>
    <label><input @change="get"  v-model="radioVal4" type="checkbox" value="服务态度好">服务态度好</label>

  </div>

   
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
          <van-tabbar-item  @click="addComment()">提交评价</van-tabbar-item>
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
      value: 5,
      radioVal1: '',
       radioVal2: '',
        radioVal3: '',
         radioVal4: '',
         result0:[],
      message: "",
      checked: ""
    };
  },
  methods: {
    addComment() {
      var result =  this.result0.join(",")
    console.log(result)
    this.axios
        .post("/user/addComment", {
          orderId: this.$route.query.id,
          orderType: this.$route.query.type,
          commStar: this.value,
          commLabel: result,
          commRemark: this.message
        })
        .then(res => {
          console.log(res)
          if (res.data.state == "200") {
            Toast("您已成功评价");
          }
        })
        .catch(err =>{
          console.log(err)
        });
    },
    get:function(event){
      
       this.a = event.target.value
       console.log(this.a)
    this.result0.push(this.a)
    console.log(this.result0)
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
.buju {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  label {
    display: inline-block;
    width: 40%;
    font-size: 16px;
    margin-top: 30px;
    margin-left: 25px;
    text-align: left;
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

