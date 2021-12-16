import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ChampionView from "../views/ChampionView.vue";
import ItemsView from "../views/ItemsView.vue";
import BuilderView from "../views/BuilderView.vue";
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
    component: ItemsView,
    meta: { title: "Items List" },
  },

  {
    path: "/builder",
    name: "builder",
    component: BuilderView,
    meta: { title: "Comp Builder" },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BuilderView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
