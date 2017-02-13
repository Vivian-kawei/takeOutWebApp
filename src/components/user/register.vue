<template>
<div class="register">
  <div class="registerHeader">
    <div class="warpper">
      <i class="icon-arrow_lift" v-on:click="hide"></i>
      <div class="title">注册</div>
    </div>
  </div>
  <div class="registerContent">
    <div class="registerWarpper">
      <input class="username" placeholder="用户名">
      <i></i>
      <input class="password" placeholder="密码">
    </div>
    <button type="button" class="registerButton">保存</button>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        showFlag: false
      };
    },
    methods: {
      show() {
        this.showFlag = true;
      },
      hide() {
        this.showFlag = false;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .register
    position: fixed
    top: 0
    left: 0
    background: #fafafa
    width: 100%
    height: 100%
    font-size: 0
    .registerHeader
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
          left: 0
          width: 100%
          display: inline-block
          font-weight: 700
          text-align: center
          color: #4d4d4d
        span
          float: right
    .registerContent
      width: 100%
      box-sizing: border-box
      padding: 150px 16px
      .registerWarpper
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
      .registerButton
        margin-top: 24px
        width: 100%
        height: 50px
        border-radius: 5px
        border: 0
        outline: none
        background: #367cff
        color: #fff

</style>