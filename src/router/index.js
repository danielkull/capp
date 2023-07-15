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
import AddNewCarView from "@/views/AddNewCarView.vue";
import TestUserManagementView from "@/views/TestUserManagementView.vue";

import { useAuthenticationStore } from "@/stores/useAuthenticationStore";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
    meta: {
      needsAuth: true,
    },
  },
  {
    path: "/UserProfileView",
    name: "userProfile",
    component: UserProfileView,
  },
  {
    path: "/UserProfileView/:id",
    name: "singleUserProfile",
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
    path: "/addNewCarView",
    name: "addNewCarView",
    component: AddNewCarView,
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

router.beforeEach((to, from, next) => {
  const authenticationStore = useAuthenticationStore();
  if (to.meta.needsAuth) {
    if (authenticationStore.session.value) {
      console.log(authenticationStore.session.value);
      console.log("drin");
      next();
    } else {
      console.log(authenticationStore.session.value);
      console.log("Oheh");
      next("/logView");
    }
  } else {
    next();
  }
});

export default router;
