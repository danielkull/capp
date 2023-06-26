import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import StefansView from "@/views/StefansView.vue";
import CalenderView from "@/views/CalenderView.vue";

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
  {
    path: "/calendar",
    name: "calendar",
    component: CalenderView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
