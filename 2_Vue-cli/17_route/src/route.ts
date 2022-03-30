import * as VueRouter from 'vue-router';
import HomeComponent from './components/Home.vue';
import AboutComponent from './components/About.vue';
import DashboardComponent from './components/Dashboard.vue';
import UserComponent from './components/User.vue';
import NotFoundComponent from './components/NotFound.vue';
import TrainingComponent from './components/Training.vue';

import TrainingVue from './components/TrainingVue.vue';
import TrainingReact from './components/TrainingReact.vue';
import TrainingAngular from './components/TrainingAngular.vue';

const routes = [
  { path: '/', component: HomeComponent },
  {
    path: '/about',
    component: AboutComponent,
  },
  {
    path: '/dashboard',
    component: DashboardComponent,
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserComponent,
  }, // dynamic
  {
    path: '/training',
    component: TrainingComponent,
    children: [
      {
        path: 'vuejs',
        component: TrainingVue,
      },
      {
        path: 'reactjs',
        component: TrainingReact,
      },
      {
        path: 'angularjs',
        component: TrainingAngular,
      },
    ],
  }, // child
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundComponent,
  }, // 404
];

const router = VueRouter.createRouter({
  // history: VueRouter.createWebHashHistory(),
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehavior (to, from, savedPosition) {
    // return desired position
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
  }
});

export default router;
