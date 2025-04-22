import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import registerLayouts from "@/App/@layouts";
import App from "./App/App.vue";
import router from "./router.ts";
import "./@plugins/tailwind.css";

const app = createApp(App);

registerLayouts(app);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);

app.mount("#app");
