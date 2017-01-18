<template>
<div class="home">
  <div class="swipe-warrper">
    <div class="address">
      <span>送至：</span>
      <span>深圳职业技术学院北校区A座</span>
      <i class="icon-drop_down"></i>
    </div>
    <div class="seach">
      <p></p>
      <span>搜索</span>
    </div>
  </div>
  <div>I am home</div>
</div>
</template>

<script>
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swipe-warrper
    width: 100%
    height: 160px
    background-color: red
    .address
      overflow: hidden
      text-overflow:ellipsis
      white-space: nowrap
      position: absolute
      top: 32px
      left: 91px
      right: 91px
      border-radius: 25px
      height: 24px
      background-color: rgba(7, 17, 27, 0.3)
      font-size: 14px
      line-height: 24px
      color: #fff
      font-weight: 700
      padding: 0 20px 0 12px
      .icon-drop_down
        width: 24px
        text-align: center
        display: block
        line-height: 24px
        position: absolute
        right: 0
        top: 0
        font-size: 6px
        color: #fff

</style>