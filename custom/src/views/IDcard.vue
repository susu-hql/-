<template>
  <div>
    <van-nav-bar
      title="身份录入"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.push('/allsafe')"
      class="header"
    />
    <div>
      <van-cell-group>
        <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />
        <van-field
          v-model="email"
          type="email"
          label="邮箱"
          placeholder="请输入邮箱"
          @blur="pan(email)"
          :error-message=" emailInfo  "
          required
        />
            <van-field
          v-model="shenfenId"
          type="email"
          label="身份证"
          placeholder="请输入身份证"
          :error-message=" emailInfo"
          required
        />
      </van-cell-group>
     
    
    </div>
    <!-- <div class="shangchuan">
      <p>上传身份证：（正反照各一张）</p>
      <van-uploader v-model="fileList" multiple :after-read="afterRead" />
    </div>
    <div class="img">
      <p>示例：</p>
      <van-image width="100" height="100"  :src="require('../assets/imgs/shenfen01.jpg') " />
      <van-image width="100" height="100"  :src="require('../assets/imgs/shenfen02.jpg')" />
    </div> -->
     <div>
        <van-tabbar>         
            <van-tabbar-item   @click="addComment()">提交</van-tabbar-item>         
        </van-tabbar>
      </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  
  data() {
    return {
      username: "",
      email: "",
      emailInfo: "",
      fileList: [],
      shenfenId:''
      
    };
  },
  methods: {
    pan(email) {
      var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if (re.test(email)) {
        this.emailInfo = "";
        // return ""
      } else {
        this.emailInfo = "请输入正确邮箱格式  例如  alibaba@163.com";
      }
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
     addComment() {
       console.log(this.$route.query.id, this.username,this.email,this.fileList[0].content,this.fileList[1].content)
       this.axios.post('/user/enteringIdentityInfo',{
         orderId:this.$route.query.id ,
         name : this.username,
         tel : this.email,
         frontImage:this.fileList[0].content,
         backImage:this.fileList[1].content
       })
       .then(res =>{
         console.log(res)
       }).catch(err =>{
         console.log(err)
       })
      Toast("您已成功提交");
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
  text-align: left;
  font-size: 16px
}
.shangchuan {
  text-align: left;
  margin-top: 20px;
}
.van-uploader {
  display: inline-block;
  text-align: left;
  margin-top: 10px;
  margin-left: 20px;
}
.img{
  text-align: left;
  margin-top: 20px;
  .van-image{
    margin-left: 10px;
    margin-top: 10px;
  }
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
</style>>

