<template>
  <div class="search" v-show="showFlag">
    <div class="search-wrapper">
      <div class="search-header">
        <div class="header-wrapper">
          <i class="icon-arrow_lift" v-on:click="hide"></i>
          <div class="search-input">
            <i class="icon-search"></i>
            <input placeholder="输入商家、商品名称" v-model="query" @keydown.enter="search">
          </div>
        </div>
      </div>
      <div class="search-content">
        <div class="hot-search" v-if="!query">
          <span class="title">热门搜索</span>
          <div class="hotsearch-list">
            <ul>
              <li v-for="word in hotwords" class="hotsearch-name" v-text="word" @click="selectWord(word)"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          showFlag: false,
          query: null,
          hotwords: ['三及第', '奶茶', '披萨', '蛋糕']
        };
      },
      methods: {
        show() {
          this.showFlag = true;
        },
        hide() {
          this.showFlag = false;
        },
        selectWord(word) {
          this.query = word;
          this.search();
        },
        search() {
          if (this.query) {
            console.log('搜索词为：' + this.query);
          }
        }
      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search
    position: fixed
    top: 0
    left: 0
    bottom: 0
    width: 100%
    font-size: 0
    background: #eeeeee
    .search-header
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 64px
      box-sizing: border-box
      padding-top: 28px
      background: #ff2d4b
      .header-wrapper
        .icon-arrow_lift
          padding-left: 10px
          font-size: 24px
          color: #fff
        .search-input
          position: absolute
          left: 45px
          right: 8px
          display: inline-block
          box-sizing: border-box
          padding: 0 10px
          border-radius: 12px
          vertical-align: top
          font-size: 14px
          line-height: 26px
          background: #fff
          input
            width: 80%
            outline: none
            padding: 0 5px
    .search-content
      width: 100%
      position: absolute
      left: 0
      top: 64px
      bottom: 0
      .hot-search
        font-size: 14px
        .title
          padding-left: 15px
          font-weight: 600
          line-height: 38px
          color: #666
        .hotsearch-list
          width: 100%
          background: #fff
          overflow: hidden
          padding: 7.5px
          .hotsearch-name
            float: left
            padding: 5px 10px
            background: #fff
            border: 1px solid #ccc
            border-radius: 4px
            margin: 7.5px


</style>
