<template>
<div class="content-warrper">
  <router-view v-bind:sellers="data.seller"></router-view>
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
</style>