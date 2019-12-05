<template>
  <div class="bgc">
    <van-nav-bar title="首页"  fixed  class="header" />
    <div class="banner">
      <van-swipe @change="onChange" :autoplay="2000" indicator-color="blank">
        <van-swipe-item v-for="(item,index) in  img" :key="index">
          <!-- <img src="../assets/imgs/develop1.jpg" alt="图片"> -->
          <img :src="item.bannerUrl" alt="图片">
          <!-- <img :src="[require(toString(image.address))]" alt="123" /> -->
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="yewu">
      <van-button color="linear-gradient(to right, #4bb0ff, #63ADDE)" icon="like" is-link to='/insureHome'>保险</van-button>
      <van-button color="linear-gradient(to right, #4bb0ff, #63ADDE)" icon="coupon"  is-link to='/DirectHome'>预估损维修</van-button>
      <van-button color="linear-gradient(to right, #4bb0ff, #63ADDE)" icon="wap-home" is-link to='/zjhome'>直接预约维修</van-button>
      <!-- <van-button color="linear-gradient(to right, #4bb0ff, #63ADDE)" icon="send-gift" > 取车 </van-button> -->
    </div>
  </div>
</template>
  
<script>

export default {
  name: "dash",
  data() {
    return {
      images: [
        {address:"/develop1.png"},
        {address:"/develop2.png"},
        {address:"/develop3.png"},
        {address:"/develop4.png"},  
      ],
      img:''
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }, 
    getshu(){
      this.axios.get('/back/findBannerAllOnline.do')
      .then(res =>{
        console.log(res.data.data)
        this.img = res.data.data
      })
      .catch(err =>{
        console.log(err)
      })
    } 
  },
  created(){
    this.getshu()
  }
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
.bgc{

  height: 700px;
}
.banner {
  margin-top:70px;
}
.yewu{
  margin-top: 40px;
  display: flex;
  justify-content:space-around;
  flex-wrap: wrap;
  

  .van-button{
    display: inline-block;
    width: 280px;
    height: 80px;
    margin-left: 8px;
    margin-top: 20px;
    border-radius: 8%;
    line-height: 1;
  }
  .van-button__icon {
    font-size: 60px;
  }
  .van-button__text{
    margin-top: 25px;
  }
  
}
</style>>

