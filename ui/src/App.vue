<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import Messages from "./components/Messages.vue";
import Menu from "./components/Menu.vue";

const store = useStore();

const counter = store.state.count;
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
