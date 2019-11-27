<template>
  <div class="about">
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入用户名" label="用户名" />
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
  </div>
</template>
