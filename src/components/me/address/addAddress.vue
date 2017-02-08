<template>
<div>
  <div v-show="showFlag" class="addAddress">
    <div class="header">
      <div class="warpper">
        <i class="icon-arrow_lift" v-on:click="hide"></i>
        <div class="title">新增地址</div>
      </div>
    </div>
    <div class="addAddress-warrper">
      <div class="username addAddress-group">
        <span class="addAddress-label" style="display: block;height: 50px;width: 78px;background: white">联系人</span>
        <input class="addAddress-input" placeholder="您的姓名" v-model="form.username">
      </div>
      <div class="sex addAddress-group">
        <div class="addAddress-checkbox">
          <i v-bind:class="checkboxClass('先生')" v-on:click="checked('先生')"></i>
          <span>先生</span>
        </div>
        <div class="addAddress-checkbox">
          <i v-bind:class="checkboxClass('女士')" v-on:click="checked('女士')"></i>
          <span>女士</span>
        </div>
      </div>
      <div class="phone addAddress-group">
        <span class="addAddress-label">手机号</span>
        <input class="addAddress-input" placeholder="配送人员联系您的电话" v-model.number="form.phone">
      </div>
      <div class="address addAddress-group">
        <span class="addAddress-label">配送地址</span>
        <input class="addAddress-input" placeholder="您的收货地址" v-model="form.address">
      </div>
    </div>
    <button type="button">保存</button>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        showFlag: false,
        form: {
          username: '',
          sex: '',
          phone: undefined,
          address: ''
        }
      };
    },
    methods: {
      show() {
        this.showFlag = true;
      },
      hide() {
        this.showFlag = false;
      },
      checked(sex) {
        this.form.sex = sex;
      },
      checkboxClass(sex) {
        return {
          'icon-check_circle': true,
          'checked': this.form.sex === sex
        };
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../../common/stylus/mixin";
  .addAddress
    background: white
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
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
        i
          float: left
    .addAddress-warrper
      padding: 16px 15px
      .addAddress-group
        height: 48px
        padding-left: 78px
        position: relative
        border-bottom: 1px solid #ddd
        .addAddress-label
          position: absolute
          top: 0
          left: 0
          font-weight: 700
          line-height: 48px
          font-size: 16px
        .addAddress-input
          width: 100%
          height: 100%
          border: none
          outline: none
        .addAddress-checkbox
          display: inline-block
          i.icon-check_circle
            color: #d2d2d7
            &.checked
              color: #ff2d4b

    

</style>