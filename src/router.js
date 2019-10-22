import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Faq from '@/views/Faq.vue';
import C00A_Contents from '@/views/Handbook/C00A_Contents.vue';
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq,
    },
    {
      path: '/Handbook/C00A_Contents',
      name: 'C00A_Contents',
      component: C00A_Contents,
    },
  ],
});
