<template>
<div class="orderdetail">
  <div class="orderdetail-header">
    <div class="header-wrapper">
      <i class="icon-arrow_lift">
      <div class="title">sellname</div>
    </div>
  </div>
  <div class="orderdetail-content" ref="orderdetail">
    <div class="orderdetailCcontent-wrapper">
      <div class="orderstatus">
        <div class="status">订单已完成</div>
        <div class="buttom">
          <span class="add">再来一单</span>
          <span class="checkratings">查看评论</span>
        </div>
      </div>
      <span class="orderdsc-title">订单明细</span>
      <div class="orderdsc">
        <div class="orderdsc-item">
          <div class="orderdsc-wrapper">
            <div class="orderdsc-title">
              <div class="avatar">
                <img width="30" height="30">
              </div>
              <div class="seller">
                <router-link :to="{path: '/seller'}">
                  <span class="name">seller_id.name</span>
                </router-link>
              </div>
            </div>
            <div class="orderdsc-description">
              <div class="foodlist">
                <ul>
                  <li>
                    <div class="foods">
                      <span class="foodname">name</span>
                      <span class="number">Xcount</span>
                      <span class="price">￥</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="delivery">
                <span class="deliveryname">配送费</span>
                <span class="deliveryprice">￥deliveryPrice元</span>
              </div>
              <div class="orderPay">共支付￥元</div>
            </div>
          </div>
        </div>
      </div>
      <div class="other">
        <div class="title">其他信息</div>
        <div class="detail-group">
          <div class="detail-item">
            <span class="item-left">配送方式</span>
            <span class="item-middle">:</span>
            <span class="item-right">配送方式</span>
          </div>
          <div class="detail-item">
            <span class="item-left">配送时间</span>
            <span class="item-middle">:</span>
            <span class="item-right"></span>
          </div>
          <div class="detail-item">
            <span class="item-left">收货信息</span>
            <span class="item-middle">:</span>
            <span class="item-right"></span>
          </div>
          <div class="detail-item">
            <span class="item-left">支付方式</span>
            <span class="item-middle">:</span>
            <span class="item-right"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  // import BScroll from 'better-scroll';
  export default{
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .orderdetail
    position: fixed
    top: 0
    left: 0
    background: #f5f5f5
    width: 100%
    height: 100%
    z-index: 10000
    .orderdetail-header
      box-sizing: border-box
      padding: 34px 15px 0 15px
      width: 100%
      height: 70px
      background: #fff
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
          color: #474747
        i
          color: #474747
    .orderdetail-content
      position: absolute
      top: 70px
      bottom: 50px
      width: 100%
      .orderstatus
        width: 100%
        margin-top: 10px
        background: #fff
        .status
          width: 100%
          box-sizing: border-box
          padding: 10px
          font-size: 18px
          font-weight: 700
          line-height: 70px
          color: #000
        .buttom
          display: flex
          .add, .checkratings
            flex: 1
            font-size: 14px
            line-height: 44px
            text-align: center
            border: 1px solid rgba(7, 17, 27, 0.1)
            color: #6e6e6e
          .add
            border-left: 0px
          .checkratings
            border-right: 0px
      .orderdsc-title
        padding-left: 10px
        font-size: 16px
        font-weight: 500
        line-height: 36px
        color: #808080
      .orderdsc
        background: #fff
        padding-left: 16px
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        .orderdsc-item
          position: relative
          border-bottom: 1px solid #ccc
          &:last-child
            border-bottom: none
          .orderdsc-wrapper
            padding: 20px 0 10px 0
            .orderdsc-title
              padding-bottom: 10px
              .avatar
                display: inline-block
                img
                  border-radius: 50%
              .name
                display: inline-block
                position: absolute
                left: 56px
                top: 24px
                font-size: 16px
                color: #4d4d4d
            .orderdsc-description
              padding-left: 20px
              line-height: 28px
              font-size: 14px
              color: #393939
              .foodlist
                border-bottom: 1px dashed #ccc
                .foods
                  padding-right: 10px
                  display: flex
                  .foodname
                    flex: 1
                  .number, .price
                    flex: 0 0 50px
                    text-align: center
              .delivery
                display: flex
                border-bottom: 1px dashed #ccc
                padding: 10px 10px 10px 0
                .deliveryname
                  flex: 1
                .deliveryprice
                  flex: 0 0 50px
                  text-align: center
              .orderPay
                padding: 10px
                font-size: 14px
                text-align: right
                color: #333
      .other
        width: 100%
        .title
          padding-left: 10px
          font-size: 16px
          font-weight: 500
          line-height: 36px
          color: #808080
        .detail-group
          padding: 0 16px
          background: #fff
          .detail-item
            display: flex
            border-bottom: 1px solid rgba(7, 17, 27, 0.1)
            font-size: 14px
            line-height: 44px
            .item-left
              display: inline-block
              flex: 0 0 60px
              width: 64px
              text-align: left
              font-weight: 600
              color: #333
            .item-middle
              flex: 0 0 14px
              font-weight: 600
              text-align: center
              color: #333
            .item-right
              flex: 1
              color: #808080










</style>
