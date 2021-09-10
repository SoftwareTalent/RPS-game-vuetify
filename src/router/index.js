import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Select",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Select.vue"),
    props: true,
  },
  {
    path: "/game",
    name: "Game",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Game.vue"),
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
