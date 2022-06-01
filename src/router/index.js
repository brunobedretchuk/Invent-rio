import { createRouter, createWebHashHistory } from "vue-router";

import Login from "./../components/views/TheLogin.vue";
import ColabRegistration from "./../components/views/ColabRegistration.vue";
import Sidebar from "./../components/partials/TheSidebar.vue";
import Inventory from "./../components/views/TheInventory.vue";
import UsersList from "./../components/views/UsersList.vue";
import ListBorrows from "./../components/views/ListBorrows.vue";
import ItemRegistration from "./../components/views/ItemRegistration.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    beforeEnter: (_, _2, next) => {
      const auth = localStorage.getItem("autenticado");
      if (auth === "true") {
        next("/dashboard");
      } else {
        next("/login");
      }
    },
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    beforeEnter: (_, _2, next) => {
      const auth = localStorage.getItem("autenticado");
      if (auth === "true") {
        next("/dashboard");
      } else {
        next();
      }
    },
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    redirect: "/dashboard/inventory",
    component: Sidebar,
    beforeEnter: (_, _2, next) => {
      const auth = localStorage.getItem("autenticado");
      if (auth === "true") {
        next();
      } else {
        next("/login");
      }
    },
    children: [
      { name: "Inventory", path: "inventory", component: Inventory },
      { name: "ItemReg", path: "registeritem", component: ItemRegistration },
      { name: "Actions", path: "actions", component: ListBorrows },
      {
        name: "ColaboratorReg",
        path: "registercolab",
        component: ColabRegistration,
      },
      { name: "Colaborators", path: "colaborators", component: UsersList },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
