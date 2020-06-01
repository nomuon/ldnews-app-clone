import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/article/:id",
    name: "Article",
    component: () => import("../views/Article.vue")
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue")
  },
  {
    path: "/search/:keyword",
    name: "SearchResult",
    component: () => import("../views/SearchResult.vue")
  },
  {
    path: "/category/:name",
    name: "Category",
    component: () => import("../views/Category.vue")
  },
  {
    path: "/notification",
    name: "Notification",
    component: () => import("../views/Notification.vue")
  },
  {
    path: "/notification/earthquake",
    name: "Earthquake",
    component: () => import("../views/Earthquake.vue")
  },
  {
    path: "/notification/information",
    name: "Information",
    component: () => import("../views/Information.vue")
  },
  {
    path: "/library",
    name: "Library",
    component: () => import("../views/Library.vue")
  },
  {
    path: "/library/history",
    name: "History",
    component: () => import("../views/History.vue")
  },
  {
    path: "/library/favorite",
    name: "Favorite",
    component: () => import("../views/Favorite.vue")
  },
  {
    path: "/library/read-later",
    name: "ReadLater",
    component: () => import("../views/ReadLater.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,

  // 画面遷移時にスクロール位置をリセット
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
