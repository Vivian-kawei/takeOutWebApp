<template>
<div>
  <div v-show="showFlag" class="changeAddress">
    <div class="header">
      <div class="warpper">
        <i class="icon-arrow_lift" v-on:click="hide"></i>
        <div class="title">编辑地址</div>
      </div>
    </div>
    <div class="changeAddress-warrper">
      <v-editorAddress></v-editorAddress>
      <button type="button" class="save">保存</button>
      <button type="button" class="change">删除该地址</button>
    </div>
  </div>
</div>
</template>

<script>
  import editorAddress from 'components/me/address/editorAddress';

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
    },
    components: {
      'v-editorAddress': editorAddress
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../../common/stylus/mixin";
  .changeAddress
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
    .changeAddress-warrper
      padding: 16px 15px
      .save
        margin: 16px 0
        width: 100%
        height: 38px
        text-align: center
        color: #fff
        background: #ff2b4d
        border: 0
        border-radius: 5px
      .change
        width: 100%
        height: 38px
        text-align: center
        color: #ff2b4d
        background: #fff
        border: 1px solid #ff2b4d
        border-radius: 5px


    

</style>