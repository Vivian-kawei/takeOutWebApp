<template>
<div class="variety-sellers" ref="varsellers" :style="{top: $route.params.type === '0' ? '76px' : '50px'}">
    <ul v-if="sellers">
      <li class="seller-list border-1px" v-for="seller in sellers">
        <v-sellerlist v-bind:seller="seller"></v-sellerlist>
      </li>
    </ul>
</div>
</template>

<script>
  import BScroll from 'better-scroll';
  import sellerlist from 'components/sellerlist/sellerlist';
  export default{
    props: {
      sellers: {}
    },
    mounted() {
      console.log(12345678910, this.sellers);
      let self = this;
      setTimeout(function() {
        self.scroll = new BScroll(self.$refs.varsellers, {
          click: true
        });
      }, 100);
    },
    components: {
      'v-sellerlist': sellerlist
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .variety-sellers
    position: absolute
    top: 76px
    left: 0
    bottom: 0
    width: 100%
    overflow: hidden

</style>