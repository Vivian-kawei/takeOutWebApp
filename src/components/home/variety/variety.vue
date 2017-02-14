<template>
  <div class="variety">
    <div class="variety-warpper">
      <div class="varietyHeader">
        
      </div>
      <div class="varietNat" v-for="variety in varietys">
        <p v-text="variety.text"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        sellers: {},
        varietys: [
          {
            text: '全部',
            type: 0
          },
          {
            text: '小吃快餐',
            type: 1
          },
          {
            text: '粥粉面',
            type: 2
          },
          {
            text: '日韩料理',
            type: 3
          },
          {
            text: '西式快餐',
            type: 4
          }
        ]
      };
    },
    mounted() {
    let self = this;
    if (self.$route.params.type === '0') {
      self.$http.get('/seller/getAll').then((response) => {
        console.log(response.data.sellers);
        self.sellers = response.data.sellers;
      });
    } else {
      self.$http.get('/seller/getSellerByType?seller_type=' + self.$route.params.type).then((response) => {
        console.log(response.data.sellers);
        self.sellers = response.data.sellers;
      });
    }
  }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>