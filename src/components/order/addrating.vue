<template>
<div class="addrating" v-show="showFlag">
  <div class="ratingheader">
    <div class="wrapper">
      <i class="icon-arrow_lift" v-on:click="hide"></i>
      <div class="title">添加评价</div>
    </div>
  </div>
  <div class="ratingContent">
    <div class="avatar">
      <img width="100%" height="100%">
    </div>
    <div class="sellername">店名</div>
    <div class="gade">
      <span>商品评分:</span>
      <input  name="foodgade" placeholder="请输入0~5的整数">
    </div>
    <div class="deliverytime">
      <span>配送时长:</span>
      <input  name="deliverytime" placeholder="请输入收到货物所需的时间">
    </div>
    <div class="recommend">
      <ul>
        <li>
          <div class="recommend-wrapper">
            <span class="foodname">商品名称</span>
            <span class="icon-thumb_up"></span>
            <span class="icon-thumb_down"></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="rating-conetnt">
      <input type="text" name="rating" placeholder="点评一下吧，您的意见很重要哦">
    </div>
    <button type="button" class="save">保存</button>
  </div>
</div>
</template>

<script>
  export default{
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
  .addrating
    position: fixed
    top: 0
    left: 0
    background: #fff
    width: 100%
    height: 100%
    font-size: 0
    .ratingheader
      box-sizing: border-box 
      padding: 34px 15px 0 15px
      width: 100%
      height: 75px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      background: #fff
      .wrapper
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
    .ratingContent
      width: 100%
      box-sizing: border-box
      padding: 20px 15px
      font-size: 14px
      .avatar
        display: inline-block
        width: 60px
        height: 60px
      .sellername
        display: inline-block
        vertical-align: top
        margin: 22px 10px
        font-weight: 700
      .gade
        display: flex
        margin-top: 10px
        span
          flex: 0 0 64px
          margin-right: 10px
          font-weight: 700
        input
          flex: 1
          border-bottom: 1px solid rgba(7, 17, 27, 0.2)
      .deliverytime
        display: flex
        margin-top: 10px
        span
          flex: 0 0 64px
          margin-right: 10px
          font-weight: 700
        input
          flex: 1
          border-bottom: 1px solid rgba(7, 17, 27, 0.2)
      .recommend
        margin-top: 10px
        .recommend-wrapper
          display: flex
          .foodname
            flex: 1
          .icon-thumb_up
            flex: 0 0 40px
          .icon-thumb_down
            flex: 0 0 40px
      .rating-conetnt
        width:100%
        height: 100px
        margin-top: 10px
        border: 1px solid rgba(7, 17, 27, 0.2)
      .save
        margin: 16px 0
        width: 100%
        height: 38px
        text-align: center
        color: #fff
        background: #ff2b4d
        border: 0
        border-radius: 5px

</style>