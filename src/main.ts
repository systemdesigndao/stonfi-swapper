import { createApp } from "vue";
import "./style.css";
// import Home from "./Home.vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import Notifications from "@kyvg/vue3-notification";
import { Buffer } from "buffer";
import "flowbite";
import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import("./Home.vue");

window.Buffer = Buffer;

const pinia = createPinia();

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(pinia);
app.use(Notifications, { name: "alert" });
app.use(router);

app.mount("#app");
