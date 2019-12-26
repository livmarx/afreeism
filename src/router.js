import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Afreeist_Handbook from '@/views/Explore.vue';
import Newsletter from '@/views/Newsletter.vue';
import Blog from '@/views/Blog.vue';
import JoinUs from '@/views/JoinUs.vue';
import Who_Are_We from '@/views/Who_Are_We.vue';
import Contents from '@/views/WebTutorial/Contents';
import Illusion from '@/views/WebTutorial/Illusion';
import Contents2 from '@/views/WebTutorial/Contents2';
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Explore',
      name: 'Explore',
      component: Afreeist_Handbook,
    },
    {
      path: '/Newsletter',
      name: 'Newsletter',
      component: Newsletter,
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/JoinUs',
      name: 'JoinUs',
      component: JoinUs,
    },
    {
      path: '/Who_Are_We',
      name: 'Who_Are_We',
      component: Who_Are_We,
    },
    {
      path: '/WebTutorial/Contents',
      name: 'Contents',
      component: Contents,
    },
    {
      path: '/WebTutorial/Illusion',
      name: 'Illusion',
      component: Illusion,
    },
    {
      path: '/WebTutorial/Contents2',
      name: 'Contents2',
      component: Contents2,
    },
  ],
});
