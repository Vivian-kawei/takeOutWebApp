<template>
<div class="content">
  <router-view v-bind:sellers="data.seller"></router-view>
  <div class="tab">
    <div class="tab-item">
      <div class="tab-wrap">
        <router-link to="home">首页</router-link>
        <i class="icon-home"></i>
      </div>
    </div>
    <div class="tab-item">
      <div class="tab-wrap">
        <router-link to="order">订单</router-link>
        <i class="icon-order"></i>
      </div>
    </div>
    <div class="tab-item">
      <div class="tab-wrap">
        <router-link to="me">我的</router-link>
        <i class="icon-mine"></i>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default{
    data() {
        return {
          data: {
          }
        };
    },
    created() {
      const self = this;
      this.$http.get('static/data.json').then((response) => {
        self.data = response.data;
        console.log(111, response.data);
      });
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    position: fixed
    bottom: 0
    width: 100%
    height: 50px
    line-height: 50px
    background-color: #f9f9f9
    border-top: 1px solid rgba(7, 17, 27, 0.1)
    .tab-item
      flex: 1
      height: 100%
      box-sizing: border-box
      text-align: center
      padding: 6px 0
      .tab-wrap
        width: 100%
        height: 100%
        position: relative
        i
          width: 100%
          display: block
          line-height: 24px
          font-size: 24px
          color: #999999
          position: absolute
          left: 0
          top: 0
        a
          width: 100%
          display: block
          font-size: 14px
          line-height: 14px
          text-decoration: none;
          color: #999999
          position: absolute
          left: 0
          bottom: 0
          &.router-link-active
            color: #ff2d4b
            &+i
              color: #ff2d4b


  
</style>