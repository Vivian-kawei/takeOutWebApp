<template>
<div class="content">
  <div class="order">
    <div class="header">
      <h1>订单</h1>
    </div>
    <split></split>
    <div class="order-content">
    </div>
  </div>
  <v-navigation></v-navigation>
</div>
</template>

<script>
import split from 'components/split/split';
import navigation from 'components/navigation/navigation';
export default{
  components: {
    split,
    'v-navigation': navigation
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
</style>