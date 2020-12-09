import Vue from "vue";
import VueRouter from "vue-router";

import Pay from "@views/Pay";
import PaySuccess from "@views/PaySuccess";
import Trade from "@views/Trade";
import Center from "@views/Center";
import Detail from "@views/Detail";
import store from "@store";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";
import ShopCart from "../views/ShopCart";
import AddCartSuccess from "../views/AddCartSuccess";

const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }

  return push.call(this, location, onComplete, () => {});
};

VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort);
  }

  return replace.call(this, location, onComplete, () => {});
};

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      name: "login",
      path: "/login",
      component: Login,
      meta: {
        isFooterHide: true
      }
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isFooterHide: true
      }
    },
    {
      name: "search",
      path: "/search/:searchText?",
      component: Search
    },
    {
      path: "/detail/:id",
      component: Detail
    },
    {
      name: "shopcart",
      path: "/shopcart",
      component: ShopCart
    },
    {
      name: "addcartsuccess",
      path: "/addcartsuccess",
      component: AddCartSuccess
    },
    {
      name: "trade",
      path: "/trade",
      component: Trade
    },
    {
      name: "pay",
      path: "/pay",
      component: Pay
    },
    {
      name: "paysuccess",
      path: "/paysuccess",
      component: PaySuccess
    },
    {
      name: "center",
      path: "/center/myorder",
      component: Center
    }
  ],

  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

const permissionPaths = ["/trade", "/pay", "/center"];
router.beforeEach((to, from, next) => {
  if (permissionPaths.indexOf(to.path) > -1 && !store.state.user.token) return next("/login");
  next();
});
export default router;
