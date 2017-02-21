<template>
<div class="checkRatings" v-show="showFlag">
  <div class="myRatings">
    <div class="header">
      <h1>我的评论</h1>
    </div>
    <div class="ratings-wrapper" ref="ratings">
      <div class="detalis">
        <ul v-for="rating in ratings">
          <li class="ratings-list">
            <div class="title">
              <div class="avatar">
                <img width="30" height="30" :src="rating.seller_id.avatar">
              </div>
              <div class="seller">
                <router-link :to="{path: '/seller/' + rating.seller_id._id + '/goods'}">
                  <span class="name">{{rating.seller_id.name}}</span>
                  <i class="icon-keyboard_arrow_right"></i>
                </router-link>
              </div>
            </div>
            <div class="ratings-content">
              <div class="star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="delivery">{{rating.deliveryTime}}分钟</span>
                <span class="ratingTime">{{rating.rateTime}}</span>
              </div>
              <div class="recommend" v-show="rating.recommend && rating.recommend.length">
                <i class="icon-thumb_up"></i>
                <span class="foodname" v-for="item in rating.recommend">{{item}}</span>
              </div>
              <div class="rating" v-show="rating.text && rating.text.text">{{rating.text}}</div>
            </div>
            <split></split>
          </li>
        </ul>
      </div>
      <!--<div class="data-loader-order" ></div>-->
    </div>
  </div>
</div>
</template>

<script>
  // import BScroll from 'better-scroll';
  import split from 'components/split/split';
  import star from 'components/star/star';
  import {formatDate} from 'common/js/date';
  export default{
    data() {
      return {
        showFlag: false,
        ratings: {
          type: Object
        }
      };
    },
    mounted() {
      this.$http.get('/ratings/getUserRatingByUserID').then((response) => {
        console.log(12345678909, response.data.ratings);
        this.ratings = response.data.ratings;
      });
    },
    methods: {
      show() {
        this.showFlag = true;
      },
      hide() {
        this.showFlag = false;
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
      star
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .checkRatings
    position: fixed
    top: 0
    left: 0
    background: #fff
    width: 100%
    height: 100%
    .ratings-wrapper
      .detalis
        .ratings-list
          .title
            width: 100%
            height: 50px
            display: flex
            box-sizing: border-box
            border-bottom: 1px solid #ccc
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
          .ratings-content
            padding: 10px
            .star-wrapper
              display: flex
              star
                flex: 0 0 50px
              .delivery
                flex: 0 0 70px
                font-size: 10px
                text-align: center
              .orderTime
                flex: 1
                font-size: 10px
                text-align: right
            .recommend
              padding-top: 10px
              font-size: 14px
              .icon-thumb_up, .foodname
                margin: 0 8px 4px 0
              .icon-thumb_up
                color: rgb(0, 160, 220)
              .foodname
                padding: 0 6px
                border: 1px solid rgba(7, 17, 27, 0.1)
                border-radius: 1px
                color: rgb(147, 153, 159)
                background: #fff
            .rating
              padding-top: 10px
              font-size: 14px

</style>