import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

//  All CSS Import files
import "./styles/reset.css";
import "./styles/global.css";
import "./styles/color-properties.css";

import router from "./router";

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
