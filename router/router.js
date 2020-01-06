import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/post",
      name: "post"
    },
    {
      path: "/",
      name: ""
    },
    {
      path: "/info",
      name: "info"
    }
  ]
});
