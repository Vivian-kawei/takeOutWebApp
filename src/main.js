// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import home from 'components/home/home';
import me from 'components/me/me';
import order from 'components/order/order';
import goods from 'components/seller/goods/goods';
import ratings from 'components/seller/ratings/ratings';
import sellerdsc from 'components/seller/sellers/sellerdsc';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

// vue使用路由配置
Vue.use(VueRouter);
// vue-resource
Vue.use(VueResource);

let router = new VueRouter({
  routes: [
    { path: '/home', name: 'home', component: home },
    { path: '/me', name: 'me', component: me },
    { path: '/order', name: 'order', component: order },
    {
      path: '/seller/:id',
      name: 'seller',
      component: seller,
      children: [
        { path: 'goods', name: 'goods', component: goods },
        { path: 'ratings', name: 'ratings', component: ratings },
        { path: 'sellerdsc', name: 'sellerdsc', component: sellerdsc }
      ]
    },
    { path: '/*', name: 'default', component: home }
  ]
});
new Vue({
  router, // 注册路由
  components: {App},
  render: h => h(App)// 渲染入口组件
}).$mount('#app');
