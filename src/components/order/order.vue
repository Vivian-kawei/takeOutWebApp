<template>
<div class="order">
  <div class="header">
    <h1>订单</h1>
  </div>
  <split></split>
  <div class="order-content">
  </div>
</div>
</template>

<script>
import split from 'components/split/split';
export default{
  components: {
    split
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