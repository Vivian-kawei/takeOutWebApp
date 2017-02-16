<template>
<div>
  <div class="address">
    <div class="header">
      <div class="wrapper">
        <router-link :to="{path: '/me'}" class="icon-arrow_lift"></router-link>
        <div class="title">我的收货地址</div>
        <span v-on:click="addAddress">新增</span>
      </div>
    </div>
    <div class="address-warrper">
      <ul>
        <li class="address-list border-1px">
          <div class="des">广东省深圳市南山区留仙大道7098号A座544</div>
          <div class="contact">
            <span class="name">李</span>
            <span class="sex">女士</span>
            <span class="phone">12345678911</span>
          </div>
          <i class="icon-keyboard_arrow_right" v-on:click="changeAddress"></i>
        </li>
      </ul>
    </div>
  </div>
  <v-addAddress ref="add"></v-addAddress>
  <v-changeAddress ref="change"></v-changeAddress>
</div>
</template>

<script>
import addAddress from 'components/me/address/addAddress';
import changeAddress from 'components/me/address/changeAddress';

export default{
  methods: {
    addAddress(event) {
      this.$refs.add.show();
    },
    changeAddress(event) {
      this.$refs.change.show();
    }
  },
  components: {
      'v-addAddress': addAddress,
      'v-changeAddress': changeAddress
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../../common/stylus/mixin";
  .address
    .header
      box-sizing: border-box 
      padding: 34px 15px 0 15px
      .wrapper
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
        a
          float: left
          color: #fff
    .address-list
      position: relative
      width: 100%
      height: 92px
      box-sizing: border-box
      padding: 33px 15px 19px 15px
      border-1px(rgba(7, 17, 27, 0.2))
      .des
        width: 80%
        font-size: 16px
        font-weight: 700
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        color: #333
      .contact
        padding-top: 10px
        font-size: 0
        span
          font-size: 14px
          color: #919191
        .name
          padding-right: 5px
        .sex
          padding-right: 12px
      i
        position: absolute
        right: 21px
        top: 40px
        font-size: 30px
        color: #bababa

</style>