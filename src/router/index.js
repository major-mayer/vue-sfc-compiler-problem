import Vue from "vue";
import VueRouter from "vue-router";
// import Editor from "../views/Editor.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "editor",
  //   component: Editor,
  // },
  // {
  //   path: "/imprint",
  //   name: "imprint",
  //   component: () => import(/* webpackChunkName: "disclaimer" */ "@/views/Imprint.vue"),
  // },
  // {
  //   path: "/privacy",
  //   name: "privacyPolicy",
  //   component: () => import(/* webpackChunkName: "disclaimer" */ "@/views/PrivacyPolicy.vue"),
  // },
  // {
  //   path: "/terms",
  //   name: "termsOfUse",
  //   component: () => import(/* webpackChunkName: "disclaimer" */ "@/views/TermsOfUse.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
