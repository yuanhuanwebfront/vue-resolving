import Vue from "vue";
import VueRouter from "vue-router";

import optimizationRouteArr from './module/optimization';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../Layout/index.vue'),
    children: [
      ...optimizationRouteArr
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
