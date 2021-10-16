<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import socketclient from "socket.io-client";
import Messages from "./components/Messages.vue";
import Menu from "./components/Menu.vue";

const store = useStore();

const socket = socketclient("ws://localhost:8080");

socket.on("connect", () => {
  console.log("socket connected", socket.id);
});

socket.on("message:new", (message) => {
  console.log({ message });
  store.commit("newMessage", message);
});
</script>

<template>
  <el-container>
    <el-aside>
      <Menu></Menu>
    </el-aside>
    <el-main><Messages /></el-main>
  </el-container>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;

  .el-container {
    height: 100%;
  }

  .el-aside {
    height: 100%;
    border-right: 1px solid #eee;
  }
}
</style>
