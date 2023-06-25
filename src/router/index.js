import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StefansView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/stefansView",
    name: "stefansView",
    component: StefansView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
