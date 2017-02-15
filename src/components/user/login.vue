<template>
<div class="login">
  <div class="loginHeader">
    <div class="warpper">
      <i class="icon-arrow_lift"></i>
      <div class="title">登录</div>
      <span v-on:click="register">注册</span>
    </div>
  </div>
  <div class="loginContent">
    <div class="loginWarpper">
      <input class="username" placeholder="用户名">
      <i></i>
      <input class="password" placeholder="密码">
    </div>
    <button type="button" class="loginButton">登录</button>
  </div>
  <v-register ref="register"></v-register>
</div>
</template>

<script>
import register from 'components/user/register';

export default{
  methods: {
    register(event) {
      console.log(123);
      this.$refs.register.show();
    }
  },
  components: {
      'v-register': register
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login
    position: fixed
    top: 0
    left: 0
    background: #fafafa
    width: 100%
    height: 100%
    font-size: 0
    .loginHeader
      box-sizing: border-box 
      padding: 34px 15px 0 15px
      width: 100%
      height: 75px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      background: #fff
      .warpper
        width: 100%
        font-size: 14px
        line-height: 14px
        color: #ff0000
        .title
          position: absolute
          top: 34px
          left: 45px
          right: 45px
          display: inline-block
          font-weight: 700
          text-align: center
          color: #4d4d4d
        span
          float: right
    .loginContent
      width: 100%
      box-sizing: border-box
      padding: 150px 16px
      .loginWarpper
        border-radius: 12px
        border: 1px solid rgba(7, 17, 27, 0.1)
        input 
          display: block
          box-sizing: border-box
          padding: 20px
          width: 100%
          height: 50px
          font-size: 12px
          line-height: 12px
          border-radius: 12px
          outline: none
        i
          width: 100%
          display: block
          border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      .loginButton
        margin-top: 24px
        width: 100%
        height: 50px
        border-radius: 5px
        border: 0
        outline: none
        background: #367cff
        color: #fff



</style>