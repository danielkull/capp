import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import StefansView from "@/views/StefansView.vue";
import LogView from "@/views/LogView.vue";
import CalenderView from "@/views/CalenderView.vue";
import DanielsView from "@/views/DanielsView.vue";
import MainPageView from "@/views/MainPageView.vue";
import UserProfileView from "@/views/UserProfileView.vue";
import KirstensView from "@/views/KirstensView.vue";
import CarsView from "@/views/CarsView.vue";
import CarView from "@/views/CarView.vue";
import TestUserManagementView from "@/views/TestUserManagementView.vue";

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
  {
    path: "/mainView",
    name: "mainView",
    component: MainPageView,
  },
  {
    path: "/UserProfileView",
    name: "userProfile",
    component: UserProfileView,
  },
  {
    path: "/KirstensView",
    name: "kirstensView",
    component: KirstensView,
  },
  {
    path: "/carsView",
    name: "carsView",
    component: CarsView,
  },
  {
    path: "/carView/:id",
    name: "carView",
    component: CarView,
  },
  {
    path: "/testUserManagementView",
    name: "testUserManagementView",
    component: TestUserManagementView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
