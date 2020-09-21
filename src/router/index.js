import Vue from "vue";
import VueRouter from "vue-router";

import optimizationRouteArr from './module/optimization';
import questionRouteArr from './module/question';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../Layout/index.vue'),
    children: [
      ...optimizationRouteArr,
      ...questionRouteArr
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
