<template>
  <div class="collect">
    <div class="header">
      <div class="warpper">
        <i class="icon-arrow_lift"></i>
        <div class="title">我的收藏</div>
      </div>
    </div>
    <div class="collect-content">
      <v-sellerlist></v-sellerlist>
    </div>
  </div>
</template>

<script>
import sellerlist from 'components/sellerlist/sellerlist';
export default{
  components: {
      'v-sellerlist': sellerlist
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .collect
    .header
      box-sizing: border-box 
      padding: 34px 15px 0 15px
      .warpper
        width: 100%
        font-size: 14px
        line-height: 14px
        color: #fff
        .title
          display: inline-block
          font-weight: 700
          text-align: center
        span
          float: right
        i
          float: left



</style>