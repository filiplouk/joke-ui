import { createApp } from "vue";
import { createPinia } from "pinia";
import registerLayouts from "@/App/@layouts";
import App from "./App/App.vue";
import router from "./router.ts";
import "./@plugins/tailwind.css";

const app = createApp(App);

registerLayouts(app);

app.use(createPinia());
app.use(router);

app.mount("#app");
