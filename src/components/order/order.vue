<template>
<div class="content">
  <div class="order">
    <div class="header">
      <h1>订单</h1>
    </div>
    <split></split>
    <div class="order-warrper">
      <ul>
        <li class="order-list">
          <div class="title">
            <div class="avatar">
              <img width="30" height="30">
            </div>
            <div class="seller">
              <span class="name">粥品香坊</span>
              <i class="icon-keyboard_arrow_right"></i>
            </div>
          </div>
          <div class="order-content">
            <div class="content1">
              <span class="food-name">皮蛋瘦肉粥</span>
              <span class="price">￥15</span>
            </div>
            <div class="content2">
              <span class="time">2016-07-23 18:54</span>
              <span class="state">已完成</span>
            </div>
          </div>
          <div class="buttom">
            <span>再来一单</span>
            <span>评价</span>
          </div>
          <split></split>
        </li>
      </ul>
    </div>
  </div>
  <v-navigation></v-navigation>
</div>
</template>

<script>
import split from 'components/split/split';
import navigation from 'components/navigation/navigation';
export default{
  components: {
    split,
    'v-navigation': navigation
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .header
    height: 75px
    font-size: 18px
    font-weight: 700
    line-height: 75px
    text-align:center
    color: #fff
    background-color: #ff2d4b
  .order-warrper
    .order-list
      .title
        width: 100%
        height: 50px
        display: flex
        box-sizing:border-box
        border-bottom: 1px dashed #c5c5c5
        padding-top: 10px
        .avatar
          flex: 0 0 30px
          width: 30
          margin-left: 14px
          img
            border-radius: 50%
            background-color: red
        .seller
          flex: 1
          font-size: 0
          line-height: 32px
          vertical-align: middle
          .name
            font-size: 16px
            margin-left: 13px
            color: #4d4d4d
            font-weight: 700
          .icon-keyboard_arrow_right
            font-size: 24px
            margin-left: 7px
            color: #c5c5c5
      .order-content
        width: 100%
        height: 92px
        box-sizing:border-box
        border-bottom: 1px solid #c5c5c5
        padding-left: 14px
        .content1
          padding-top: 26px
          .food-name
            font-size: 16px
            font-weight: 700
            color: #4d4d4d
          .price
            position: absolute
            right: 16px
        .content2
          margin-top: 10px
          font-size: 14px
          color: #999999
          .state
            position: absolute
            right: 16px
      .buttom
        display: flex
        height: 44px
        width: 100%
        box-sizing:border-box
        span
          flex: 1
          box-sizing:border-box
          padding-top: 16px
          text-align: center
          font-size: 14px
          color: #666666
          border-right: 1px solid #c5c5c5
          &:last-child
            border-right: 0

</style>