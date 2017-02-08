<template>
<div class="content">
  <div class="home" ref="home">
    <div class="home-warrper">
      <div class="swipe-warrper">
        <v-swiper></v-swiper>
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
          <img style="width: 44px;" :src="specie.src"></i>
          <p v-text="specie.text"></p>
        </div>
      </div>
      <split></split>
      <div class="seller-warrper" >
      <div class="title border-1px">全部商户</div>
        <div class="seller">
          <ul v-if="sellers">
            <li class="seller-list border-1px" v-for="(seller, index) in sellers">
              <router-link :to="{path: '/seller/' + seller.id + '/goods'}">
                <div class="avatar">
                  <img width="76" height="56" v-bind:src="seller.avatar">
                </div>
                <div class="seller-content">
                  <div class="seller-name">
                    <span class="name">{{seller.name}}</span>
                  </div>
                  <div class="sale">
                    <star :size="24" :score="seller.score"></star>
                    <span class="text">月售{{seller.sellCount}}单</span>
                    <span class="time">{{seller.deliveryTime}}分钟</span>
                  </div>
                  <div class="dilivery">
                    <span class="text">起送￥{{seller.minPrice}}</span>
                    <span class="text">配送￥{{seller.deliveryPrice}}</span>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <v-navigation></v-navigation>
</div>
</template>

<script>
import BScroll from 'better-scroll';
import split from 'components/split/split';
import swiper from 'components/home/swiper/swiper';
import navigation from 'components/navigation/navigation';
import star from 'components/star/star';
export default{
    props: {
      sellers: {
        type: Object
      }
    },
    mounted() {
      console.dir(this.$refs.home);
      let self = this;
      setTimeout(function() {
        console.dir(self.$refs.home);
        self.scroll = new BScroll(self.$refs.home, {
          click: true
        });
      }, 100);
    },
    data() {
        return {
            species: [
              {
                src: 'https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg',
                text: '美食',
                url: '#/home'
              },
              {
                src: 'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',
                text: '甜品饮品',
                url: '#/home'
              },
              {
                src: 'https://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg',
                text: '鲜花蛋糕',
                url: '#/home'
              },
              {
                src: 'https://fuss10.elemecdn.com/6/1a/1e0f448be0624c62db416e864d2afjpeg.jpeg',
                text: '日韩料理',
                url: '#/home'
              },
              {
                src: 'https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg',
                text: '披萨意面',
                url: '#/home'
              }
            ]
        };
    },
    components: {
      split,
      'star': star,
      'v-swiper': swiper,
      'v-navigation': navigation
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixin";
  .home
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    .swipe-warrper
      font-size: 0
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
          line-height: 12px

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
        padding-bottom: 50px
        .seller-list
          display: flex
          box-sizing: border-box
          padding: 20px 10px
          font-size: 0
          border-1px(rgba(7, 17, 27, 0.1))
          a
            width: 100%
            height: 100%
            display: block
            .avatar
              display: inline-block
              width: 76px
              height: 56px
            .seller-content
              display: inline-block
              vertical-align: top
              margin:0px 0 0 10px
              .seller-name
                .name
                  font-size: 16px
                  line-height: 24px
                  font-weight: 700
                  color: #333333
              .sale
                .star
                  display: inline-block
                  margin-right: 8px
                  vertical-align: top
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
