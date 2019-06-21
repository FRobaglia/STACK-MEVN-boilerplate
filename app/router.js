import Vue from 'vue';
import Router from 'vue-router';

import Slider from './components/Slider.vue';
import Home from './components/Home.vue';
import Profile from './components/Profile.vue';

// CRUD
import Create from './components/Create.vue';
import Edit from './components/Edit.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit,
    },
    {
      path: '*',
      redirect: { name: 'profile' },
    },
  ],
});

export default router;
