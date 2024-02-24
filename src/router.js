import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Register from "./components/Contact.vue";
import Career from "./components/Career.vue";
import Contact from "./components/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/career",
    name: "Career",
    component: Career,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
