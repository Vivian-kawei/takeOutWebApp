<template>
<div class="home">
  <div class="swipe-warrper">
    <div class="tool">
      <div class="address">
        <span>送至：</span>
        <span class="adde">深圳职业技术学院北校区A座</span>
        <i class="icon-drop_down"></i>
      </div>
      <div class="search">
        <i class="icon-search"></i>
        <span>搜索</span>
      </div>
    </div>  
  </div>
  <div class="species">
    <div class="species-warrper" v-for="specie in species" :href="specie.url">
      <i :class="specie.iconClass"></i>
      <p v-text="specie.text"></p>
    </div>
  </div>
  <split></split>
  <div class="seller-warrper">
    <div class="title border-1px">全部商户</div>
    <div class="seller">
      <ul v-if="sellers">
        <li class="seller-list border-1px" v-for="(seller, id) in sellers">
          <div class="avatar">
            <img width="76" height="56" v-bind:src="seller.avatar">
          </div>
          <div class="seller-content">
            <div class="seller-name">
              <span class="name">{{seller.name}}</span>
            </div>
            <div class="sale">
              <span class="text">月售{{seller.sellCount}}单</span>
              <span class="time">{{seller.deliveryTime}}分钟</span>
            </div>
            <div class="dilivery">
              <span class="text">起送￥{{seller.minPrice}}</span>
              <span class="text">配送￥{{seller.deliveryPrice}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import split from 'components/split/split';
export default{
    props: {
      sellers: {
        type: Object
      }
    },
    created: function() {
      console.log(222, this.sellers);
    },
    data() {
        return {
            species: [
              {
                iconClass: 'icon-brand',
                text: '品牌馆',
                url: '#/home'
              },
              {
                iconClass: 'icon-coffee',
                text: '下午茶',
                url: '#/home'
              },
              {
                iconClass: 'icon-cake',
                text: '鲜花蛋糕',
                url: '#/home'
              },
              {
                iconClass: 'icon-fresh',
                text: '冰冻新鲜',
                url: '#/home'
              },
              {
                iconClass: 'icon-hamburg',
                text: '美味快餐',
                url: '#/home'
              }
            ]
        };
    },
    components: {
      split
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixin";
  .swipe-warrper
    width: 100%
    height: 160px
    background-color: red

    .tool
      position: absolute
      top: 32px
      left: 90px
      right: 10px
      height: 24px
      font-weight: 700

      .address
        position: absolute
        left: 0
        right: 82px
        font-size: 14px
        overflow: hidden
        text-overflow:ellipsis
        white-space: nowrap
        border-radius: 25px
        background-color: rgba(7, 17, 27, 0.3)
        line-height: 24px
        color: #fff
        padding: 0 10px 0 16px

        .icon-drop_down
          width: 24px
          text-align: center
          display: block
          line-height: 24px
          position: absolute
          top: 0
          right: 0
          font-size: 10px
          color: #fff

      .search
        width: 74px
        height: 24px
        border-radius: 25px
        background-color: rgba(7, 17, 27, 0.3)
        line-height: 24px
        color: #fff
        font-size: 14px
        text-align: center
        position: absolute
        top: 0
        right: 0

  .species
    display: flex
    box-sizing: border-box
    width: 100%
    padding: 22px 14px
    height: 108px
    .species-warrper
      flex: 1
      display: inline-block
      text-align: center
      i
        font-size: 44px
        line-height: 44px
        color: #ff5656
      p
        padding-top: 10px
        font-size: 12px
        line-height: 12x

  .seller-warrper
    .title
      box-sizing: border-box
      width: 100%
      height: 42px
      padding-left: 10px
      font-size: 13px
      line-height: 42px
      color: #a9a9a9
      border-1px(rgba(7, 17, 27, 0.1))
    .seller
      .seller-list
        display: flex
        box-sizing: border-box
        padding: 20px 10px
        font-size: 0
        border-1px(rgba(7, 17, 27, 0.1))
        .seller-content
          margin:0px 0 0 10px
          .seller-name
            .name
              font-size: 16px
              line-height: 24px
              font-weight: 700
              color: #333333
          .sale
            .text
              font-size: 10px
              line-height: 16px
            .time 
              display: inline-block
              position: absolute
              font-size: 10px
              line-height: 16px
              right: 10px
          .dilivery
            .text
              font-size: 10px
              line-height: 16px
              border-right: 1px solid rgba(7, 17, 27, 0.1)
              padding-right: 7px
              &:last-child
                border-right: 0
                padding-left: 7px




</style>