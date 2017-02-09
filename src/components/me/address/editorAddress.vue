<template>
<div>
  <div class="editorAddress">
    <div class="username editorAddress-group">
      <span class="editorAddress-label" style="display: block;height: 50px;width: 78px;background: white">联系人</span>
      <input class="editorAddress-input" placeholder="您的姓名" v-model="form.username">
    </div>
    <div class="sex editorAddress-group">
      <div class="editorAddress-checkbox">
        <i v-bind:class="checkboxClass('先生')" v-on:click="checked('先生')"></i>
        <span>先生</span>
      </div>
      <div class="editorAddress-checkbox">
        <i v-bind:class="checkboxClass('女士')" v-on:click="checked('女士')"></i>
        <span>女士</span>
      </div>
    </div>
    <div class="phone editorAddress-group">
      <span class="editorAddress-label">手机号</span>
      <input class="editorAddress-input" placeholder="配送人员联系您的电话" v-model.number="form.phone">
    </div>
    <div class="address editorAddress-group">
      <span class="editorAddress-label">配送地址</span>
      <input class="editorAddress-input" placeholder="您的收货地址" v-model="form.address">
    </div>
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
    .editorAddress
      .editorAddress-group
        height: 48px
        line-height: 48px
        padding-left: 78px
        position: relative
        border-bottom: 1px solid #ddd
        .editorAddress-label
          position: absolute
          top: 0
          left: 0
          font-weight: 700
          line-height: 48px
          font-size: 16px
        .editorAddress-input
          width: 100%
          height: 100%
          border: none
          outline: none
        .editorAddress-checkbox
          display: inline-block
          i.icon-check_circle
            color: #d2d2d7
            &.checked
              color: #ff2d4b  

</style>