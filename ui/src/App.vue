<script setup>
import { onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { close, connect } from "./lib/socket";

import Menu from "./components/Menu.vue";
import Messages from "./components/Messages.vue";

const store = useStore();

onMounted(() => {
  console.log("mounted");
  connect(store);
});

onUnmounted(() => {
  console.log("unmounted");
  close();
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
