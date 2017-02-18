<template>
<div class="addorder">
  <div class="addorder-header">
    <div class="header-wrapper">
      <i class="icon-arrow_lift" v-on:click="hide">
      <div class="title">提交订单</div>
    </div>
  </div>
  <div class="addorder-content">
    <div class="addorder-group">
      <div class="addorder-item">
        <i class="icon-left icon-address"></i>
        <div class="addorder-wrapper">
          <div class="addorder-title">深圳市南山区深圳职业技术学院北校区A523</div>
          <div class="addorder-description">
            <span>李</span>
            <span>女士</span> 
            <span>13760173057</span>
          </div>
        </div>
        <i class="icon-right icon-keyboard_arrow_right"></i>
      </div>
      <div class="addorder-item">
        <i class="icon-left icon-shopping_cart"></i>
        <div class="addorder-wrapper">
          <div class="addorder-text">商家配送</div>
        </div>
        <i class="icon-right icon-keyboard_arrow_right"></i>
      </div>
      <div class="addorder-item">
        <i class="icon-left icon-order"></i>
        <div class="addorder-wrapper">
          <div class="addorder-text">现金支付</div>
        </div>
        <i class="icon-right icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="orderdsc">
      <div class="orderdsc-item">
        <i class="icon-left icon-home"></i>
        <div class="orderdsc-wrapper">
          <div class="orderdsc-title">店名</div>
          <div class="orderdsc-description">
            <ul>
              <li>
                <div class="foods">
                  <span class="foodname">foodname</span>
                  <span class="number">X2</span> 
                  <span class="price">￥20</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="orderPay">共需支付￥30元</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default{
  dprops: {
    currentFoods: {
      type: Array
      },
    seller: {}
  },
  methods: {
    hide() {
      this.$parent.currentFoods = null;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .addorder
    position: fixed
    top: 0
    left: 0
    background: #f5f5f5
    width: 100%
    height: 100%
    font-size: 0
    z-index: 10000
    .addorder-header
      box-sizing: border-box 
      padding: 34px 15px 0 15px
      width: 100%
      height: 70px
      .header-wrapper
        width: 100%
        font-size: 18px
        line-height: 18px
        .title
          position: absolute
          top: 34px
          left: 45px
          right: 45px
          display: inline-block
          font-weight: 700
          text-align: center
          color: #636363
        i
          color: #636363
    .addorder-content
      width: 100%
      box-sizing: border-box
      padding: 0 10px 20px 10px
      .addorder-group
        background: #fff
        border-radius: 8px
        padding-left: 44px
        .addorder-item
          position: relative
          border-bottom: 1px solid #ccc
          padding-right: 20px
          &:last-child
            border-bottom: none
          .icon-left
            position: absolute
            top: 22px
            left: -30px
            font-size: 16px
            color: #999
          .addorder-wrapper
            padding: 20px 0 10px 0
            .addorder-title
              font-size: 16px
              color: #333
              overflow: hidden
              text-overflow: ellipsis
              white-space: nowrap
            .addorder-text
              font-size: 16px
              color: #333
              margin-bottom: 8px
            .addorder-description
              line-height: 28px
              font-size: 14px
              color: #999
          .icon-right
            position: absolute
            top: 50%
            right: 5px
            margin-top: -8px
            font-size: 16px
            color: #999
      .orderdsc
        background: #fff
        border-radius: 8px
        padding-left: 44px
        .orderdsc-item
          position: relative
          border-bottom: 1px solid #ccc
          margin-top: 10px
          &:last-child
            border-bottom: none
          .icon-left
            position: absolute
            top: 20px
            left: -30px
            font-size: 16px
            color: #999
          .orderdsc-wrapper
            padding: 20px 0 10px 0
            .orderdsc-title
              font-size: 16px
              padding-bottom: 10px
              color: #333
              border-bottom: 1px solid #ccc
            .orderdsc-description
              line-height: 28px
              font-size: 14px
              color: #999
            .foods
              padding-right: 10px
              display: flex
              .foodname
                flex: 1
              .number, .price
                flex: 0 0 50px
                text-align: center
            .orderPay
              font-size: 20px


            






</style>