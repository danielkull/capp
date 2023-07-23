import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import StefansView from "@/views/StefansView.vue";
import LogView from "@/views/LogView.vue";
import CalenderView from "@/views/CalenderView.vue";
import DanielsView from "@/views/DanielsView.vue";
import MainPageView from "@/views/MainPageView.vue";
import UserProfileView from "@/views/UserProfileView.vue";
import KirstensView from "@/views/KirstensView.vue";
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
    path: "/user-sign-in-question-form",
    name: "userQuestionView",
    // component: () => import("@/views/CalenderView.vue"),
    component: () => import("@/views/UserQuestionView.vue"),
    meta: {
      // Wird bei der Finalen Version auf true gesetzt damit Route mit Auth funktioniert
      // Bei entwicklung ist es erstmal hinterlich, daher false
      needsAuth: false,
    },
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
      // Wird bei der Finalen Version auf true gesetzt damit Route mit Auth funktioniert
      // Bei entwicklung ist es erstmal hinterlich, daher false
      needsAuth: true,
    },
  },
  {
    path: "/car-profile/:id",
    name: "carProfile",
    component: UserProfileView,
    meta: {
      // Wird bei der Finalen Version auf true gesetzt damit Route mit Auth funktioniert
      // Bei entwicklung ist es erstmal hinterlich, daher false
      needsAuth: false,
    },
  },
  {
    path: "/KirstensView",
    name: "kirstensView",
    component: KirstensView,
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
      // Benötige diesen Consoel.log später für die entwicklung
      console.log("True", authenticationStore.session.value);
      next();
    } else {
      // Benötige diesen Consoel.log später für die entwicklung
      console.log("False", authenticationStore.session.value);
      next("/logView");
    }
  } else {
    next();
  }
});

export default router;
