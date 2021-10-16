import { createStore } from "vuex";

interface Store {
  messages: string[];
}

export default createStore<Store>({
  state() {
    return {
      messages: [],
    };
  },

  mutations: {
    newMessage(state, message) {
      state.messages = [message, ...state.messages];
    },
  },
});
