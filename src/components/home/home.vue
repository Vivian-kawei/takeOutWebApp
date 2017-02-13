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
            <li class="seller-list border-1px" v-for="seller in sellers">
              <v-sellerlist v-bind:seller="seller"></v-sellerlist>
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
import sellerlist from 'components/sellerlist/sellerlist';
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
                src: 'https://fuss10.elemecdn.com/4/34/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg',
                text: '蔬果新鲜',
                url: '#/home'
              },
              {
                src: 'https://fuss10.elemecdn.com/1/c6/8edcaeb8cd35845946db6673660fcjpeg.jpeg',
                text: '商店超市',
                url: '#/home'
              }
            ]
        };
    },
    components: {
      split,
      'star': star,
      'v-swiper': swiper,
      'v-navigation': navigation,
      'v-sellerlist': sellerlist
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
        



</style>
