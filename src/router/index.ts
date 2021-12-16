import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ChampionView from "../views/ChampionView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "champion",
    component: ChampionView,
    meta: { title: "Champion's List" },
  },
  {
    path: "/items",
    name: "items",
    component: ChampionView,
    meta: { title: "Items List" },
  },

  {
    path: "/builder",
    name: "builder",
    component: ChampionView,
    meta: { title: "Comp Builder" },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
