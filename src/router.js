import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Overview from "./components/home-child-routes/Overview.vue";
import Blessors from "./components/home-child-routes/Blessors.vue";
import Rewards from "./components/home-child-routes/Rewards.vue";
import Comments from "./components/home-child-routes/Comments.vue";
import More from "./pages/ViewMore.vue";
let router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      component: Home,
      children: [
        { path: "", redirect: "/home/overview" },
        { path: "/home/overview", component: Overview },
        { path: "/home/blessors", component: Blessors },
        { path: "/home/rewards", component: Rewards },
        { path: "/home/comments", component: Comments },
      ],
    },
    { path: "/more", component: More },
  ],
});

export default router;
