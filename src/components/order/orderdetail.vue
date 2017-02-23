<template>
<div class="orderdetail">
  <div class="orderdetail-header">
    <div class="header-wrapper">
      <i class="icon-arrow_lift" v-on:click="hide">
      <div class="title">sellname</div>
    </div>
  </div>
  <div class="orderdetail-content" ref="orderdetail">
    <div class="orderdetailCcontent-wrapper">
      <div class="orderstatus">
        <div class="status">订单状态</div>
        <div class="buttom">
          <span class="addorder">再来一单</span>
          <span class="checkratings">查看评论</span>
        </div>
      </div>
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
                  <i class="icon-keyboard_arrow_right"></i>
                </router-link>
              </div>
            </div>
            <div class="orderdsc-description">
              <div class="foodlist">
                <ul v-for="food in currentFoods">
                  <li>
                    <div class="foods">
                      <span class="foodname">{{food.name}}</span>
                      <span class="number">X{{food.count}}</span>
                      <span class="price">￥{{(food.price*food.count).toFixed(2)}}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="delivery">
                <span class="deliveryname">配送费</span>
                <span class="deliveryprice">￥{{seller.deliveryPrice}}元</span>
              </div>
              <div class="orderPay">共支付￥{{(totalPrice + deliveryPrice).toFixed(2)}}元</div>
            </div>
          </div>
        </div>
      </div>
      <div class="other">
        <div class="title">其他信息</div>
        <div class="detail-group">
          <div class="detail-item">
            <span>配送方</span>
          </div>
          <div class="detail-item">
            <span>配送时间</span>
          </div>
          <div class="detail-item">
            <span>收货信息</span>
          </div>
          <div class="detail-item">
            <span>支付方式</span>
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
    font-size: 0
    z-index: 10000
    .orderdetail-header
      box-sizing: border-box
      padding: 34px 15px 0 15px
      width: 100%
      height: 70px
      background: #f5f5f5
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
    .orderdetail-content
      position: absolute
      top: 70px
      bottom: 50px
      width: 100%
      box-sizing: border-box
      padding: 0 10px 20px 10px
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







</style>
