import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import StefansView from "@/views/StefansView.vue";
import LogView from "@/views/LogView.vue";
import CalenderView from "@/views/CalenderView.vue";
import DanielsView from "@/views/DanielsView.vue";

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
    path: "/logView",
    name: "logView",
    component: LogView,
 },
  {
    path: "/calendar",
    name: "calendar",
    component: CalenderView,
  },
  {
    path: "/danielView",
    name: "danielView",
    component: DanielsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
