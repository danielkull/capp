import { createRouter, createWebHistory } from "vue-router";
import LogView from "@/views/LogView.vue";
import MainPageView from "@/views/MainPageView.vue";
import UserProfileView from "@/views/UserProfileView.vue";

import { useAuthenticationStore } from "@/stores/useAuthenticationStore";

const routes = [
  {
    path: "/",
    redirect: { name: "logView" },
  },
  {
    path: "/index.html",
    redirect: { name: "logView" },
  },
  {
    path: "/logView",
    name: "logView",
    component: LogView,
  },
  {
    path: "/user-sign-in-question-form",
    name: "userQuestionView",
    component: () => import("@/views/UserQuestionView.vue"),
    meta: {
      needsAuth: true,
    },
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
    path: "/car-profile/:id",
    name: "carProfile",
    component: UserProfileView,
    meta: {
      needsAuth: true,
    },
  },
  /*   {
    path: "/:catchAll",
    name: "ErrorPage",
    component: () => import("@/views/ErrorPageView.vue"),
  }, */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authenticationStore = useAuthenticationStore();
  if (to.meta.needsAuth) {
    if (authenticationStore.session.value) {
      next();
    } else {
      next("/logView");
    }
  } else {
    next();
  }
});

export default router;
