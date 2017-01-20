<template>
<div class="me">
  <div class="header">
    <div class="dse">
      <p class="username">用户名</p>
      <i class="icon-set"></i>
    </div>
    <div class="userimage">
    </div>
  </div>
  <div class="me-content">
    <div class="service-warrper">
      <div class="service" v-for="service in services" :href="service.url">
        <i :class="service.iconClass"></i>
        <p v-text="service.text"></p>
      </div>
    </div>
    <split></split>
  </div>
</div>
</template>

<script>
import split from 'components/split/split';
export default{
  data() {
    return {
      services: [
        {
          iconClass: 'icon-address',
          text: '我的地址',
          url: '#/me'
        },
        {
          iconClass: 'icon-Message',
          text: '我的评价',
          url: '#/me'
        },
        {
          iconClass: 'icon-service',
          text: '在线客服',
          url: '#/me'
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
  .me
    .header
      width:100%
      height: 150px
      background-color: #ff2d4b
      .dse
        height: 90px
        font-size: 0
        line-height: 80px
        position: relative
        .username
          font-size: 14px
          font-weight: 700
          color: #fff
          text-align: center
        .icon-set
          position: absolute
          font-size: 22px
          line-height: 80px
          top: 0
          right: 14px
          color: #fff
      .userimage
          width: 56px
          height: 56px
          border: 3px solid #fff
          border-radius: 25px
          margin: 0 auto
          background-color: #dee2de
     .me-content     
      .service-warrper
        display: flex
        box-sizing: border-box
        padding: 14px 0 
        .service
          flex: 1
          text-align: center
          border-right: 1px solid rgba(7, 17, 27, 0.3)
          &:last-child
            border-right: 0
          i
            font-size: 24px
            line-height: 34px
            color: #878787
          p
            font-size: 12px
            color: #333333




</style>