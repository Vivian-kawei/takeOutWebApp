<template>
  <div>
    <v-header v-bind:seller="seller"></v-header>
    <div class="seller-tab">
      <div class="seller-tab-item">
        <router-link :to="{path: '/goods'}">商品</router-link>
      </div>
      <div class="seller-tab-item">
        <router-link :to="{path: '/ratings'}">评论</router-link>
      </div>
      <div class="seller-tab-item">
        <router-link :to="{path: '/sellerdsc'}">商家</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import header from 'components/seller/header/header.vue';
export default{
  data() {
      return {
        seller: {}
      };
  },
  mounted() {
    console.log(this.$route.params.data);
    /* eslint-disable no-undef */
    this.seller = this.$route.params.data;
    /* eslint-disable no-undef */
    console.log(this.$route.params.data);
  },
  components: {
    'v-header': header
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"

    .seller-tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7, 17, 27, 0.1))
      .seller-tab-item
        flex: 1
        text-align:center
        & > a
          display:block
          font-size:14px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 20, 20)

</style>