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
          @blur='pan(email)'
          :error-message = " emailInfo  "
          required
                   
        />
      </van-cell-group>
    </div>
    <div>
      <van-uploader v-model="fileList" multiple :after-read="afterRead" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      emailInfo:'',
      fileList: []
    };
  },
  methods: {
    pan(email) {     
      var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if (re.test(email)) {
        this.emailInfo = ''
        // return ""
      } else {
        this.emailInfo = '请输入正确邮箱格式  例如  alibaba@163.com'
      }
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
</style>>

