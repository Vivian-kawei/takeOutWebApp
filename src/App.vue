<template>
<div>
  <div clas="swipe-warrper">
    <div class="address">
      <span>送至：</span>
      <span>深圳职业技术学院北校区A座</span>
      <p></p>
    </div>
    <div class="seach">
      <p></p>
      <span>搜索</span>
    </div>
  </div>
  <router-view></router-view>
  <div class="tab">
    <div class="tab-item">
      <div class="tab-wrap">
        <i class="icon-home"></i>
        <router-link to="home">首页</router-link>
      </div>
    </div>
    <div class="tab-item">

      <router-link to="order">订单</router-link>
    </div>
    <div class="tab-item">
      <router-link to="me">我的</router-link>
    </div>
  </div>
</div>
</template>

<script>
  var hash = window.location.hash;
  console.log(hash);
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    position: fixed
    bottom: 0
    width: 100%
    height: 50px
    line-height: 50px
    background-color: #f9f9f9
    .tab-item
      flex: 1
      text-align: center
      padding: 6px 0
      .tab-wrap
        .icon-home
          display: block
          line-height: 24px
          font-size: 24px
          color: #999999
        a
          display: block
          font-size: 14px
          line-height: 14px
          text-decoration: none;
          color: #999999
          &.router-link-active
            color: #ff2d4b

  
</style>