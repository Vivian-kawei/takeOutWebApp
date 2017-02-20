<template>
<div class="content">
  <div class="order">
    <div class="header">
      <h1>订单</h1>
    </div>
    <split></split>
    <div class="order-wrapper" ref="order">
      <div class="detalis" v-if="orders.length > 0">
        <ul v-for="order in orders">
          <li class="order-list">
            <div class="title">
              <div class="avatar">
                <img width="30" height="30" :src="order.seller_id.avatar">
              </div>
              <div class="seller">
                <router-link :to="{path: '/seller/' + order.seller_id._id + '/goods'}">
                  <span class="name">{{order.seller_id.name}}</span>
                  <i class="icon-keyboard_arrow_right"></i>
                </router-link>
              </div>
            </div>
            <div class="order-content">
              <div class="content1">
                <span class="food-name">{{order.foods[0].name}}</span>
                <span class="price">￥{{order.sumPrice}}</span>
              </div>
              <div class="content2">
                <span class="time">{{order.orderTime  | formatDate}}</span>
                <span class="state">已完成</span>
              </div>
            </div>
            <div class="buttom">
              <span>再来一单</span>
              <span v-on:click="AddRating(order)">评价</span>
            </div>
            <split></split>
          </li>
        </ul>
      </div>
      <div class="data-loader-order" v-else></div>
    </div>
  </div>
  <v-navigation></v-navigation>
  <v-addrating ref="add" v-bind:orderdes="orderdes" v-if="orderdes"></v-addrating>
</div>
</template>

<script>
  import BScroll from 'better-scroll';
  import split from 'components/split/split';
  import navigation from 'components/navigation/navigation';
  import addrating from 'components/order/addrating';
  import {formatDate} from 'common/js/date';
  export default{
    data() {
      return {
        orders: [],
        orderdes: null
      };
    },
    mounted() {
      console.log(2000001, window.user);
      let self = this;
      let userid = window.user._id;
      self.$http.post('/order/getUserOrderAndSeller', {userid: userid}).then(function(response) {
        console.log(2000002, response);
        setTimeout(function() {
          self.orders = response.data.order;
          setTimeout(function() {
            self.scroll = new BScroll(self.$refs.order, {
              click: true
            });
          }, 100);
        }, 500);
        console.log(200003, self.orders);
      });
    },
    methods: {
      AddRating(order) {
        this.orderdes = order;
        console.log('orderdes1', this.orderdes);
      }
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    },
    components: {
      split,
      'v-navigation': navigation,
      'v-addrating': addrating
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
  .order-wrapper
    position: absolute
    top: 87px
    bottom: 50px
    width: 100%
    overflow: hidden
    .detalis
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
  .data-loader-order
    width: 100%
    height: 100%
    background: url('../../common/loading.gif') center no-repeat
    position: absolute
    top: 0
    left: 0

</style>