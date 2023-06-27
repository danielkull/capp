import { createApp } from "vue";
import App from "./App.vue";

//  All CSS Import files
import "./styles/reset.css";
import "./styles/global.css";
import "./styles/color-properties.css";

import router from "./router";

createApp(App).use(router).mount("#app");
