import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";

Vue.use(VueRouter);

//解决导航重复
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.replace;
// 修改原型对象中的push方法
VueRouter.prototype.replace = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bgChange",
    name: "bgChange",
    component: () => import("@/views/BgChange/index.vue"),
  },
  {
    path: "/broderChange",
    name: "broderChange",
    component: () => import("@/views/BroderChange/index.vue"),
  },
  {
    path: "/clickOnTheAnimation",
    name: "clickOnTheAnimation",
    component: () => import("@/views/ClickOnTheAnimation/index.vue"),
  },
  {
    path: "/other",
    name: "other",
    component: () => import("@/views/Other/index.vue"),
    children: [
      {
        path: "cordelle",
        component: () => import("@/components/Other/pulling.vue"),
      },
      {
        path: "bgbulles",
        component: () => import("@/components/Other/bgbulles.vue"),
      },
      {
        path: "headlles",
        component: () => import("@/components/Other/headlles.vue"),
      },
    ],
  },
  {
    path: "/text",
    name: "text",
    component: () => import("@/views/Text/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
