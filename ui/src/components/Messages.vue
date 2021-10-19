<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "vuex";
import _ from "lodash";

const store = useStore();

const messages = computed(() => {
  return _.map(store.state.messages, (item) => ({
    date: new Date(),
    name: item,
  }));
});
</script>

<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>Topic</el-breadcrumb-item>
      <el-breadcrumb-item>cluster.messages.0</el-breadcrumb-item>
    </el-breadcrumb>

    <el-divider></el-divider>

    <el-table :data="messages" border>
      <el-table-column prop="date" label="Time" width="200" />
      <el-table-column prop="name" label="Partition" width="100" />
      <el-table-column prop="name" label="Message" />
      <el-table-column prop="name" label="Offset" width="100" />
    </el-table>
  </div>
</template>

<style lang="sass"></style>
