import { createRouter, createWebHistory } from "vue-router";
import Home from "./App/Home/Home.vue";
import NothingFound from "./App/NothingFound/NothingFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        layout: "default-layout",
      },
    },
    {
      path: "/:catchAll(.*)",
      name: "notFound",
      component: NothingFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return {
        top: 0,
        behavior: "smooth",
      };
    }
  },
});

export default router;
