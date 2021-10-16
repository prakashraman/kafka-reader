import { createApp } from "vue";
import { createStore } from "vuex";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

const app = createApp(App);

app.use(store);
app.use(ElementPlus);
app.mount("#app");
