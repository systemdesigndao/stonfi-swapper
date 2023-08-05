import { createApp, defineAsyncComponent } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import Notifications from "@kyvg/vue3-notification";
import { Buffer } from "buffer";
import "flowbite";
import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("./Home.vue");

window.Buffer = Buffer;

const pinia = createPinia();

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(pinia);
app.use(Notifications, { name: "alert" });
app.use(router);

const AppConnectWallet = defineAsyncComponent(
  () => import("./components/AppConnectWallet.vue"),
);
const AppExtraButton = defineAsyncComponent(
  () => import("./components/AppExtraButton.vue"),
);
const AppSwapForm = defineAsyncComponent(
  () => import("./components/AppSwapForm.vue"),
);
const AppModal = defineAsyncComponent(
  () => import("./components/AppModal.vue"),
);

app.component("AppConnectWallet", AppConnectWallet);
app.component("AppExtraButton", AppExtraButton);
app.component("AppSwapForm", AppSwapForm);
app.component("AppModal", AppModal);

app.mount("#app");
