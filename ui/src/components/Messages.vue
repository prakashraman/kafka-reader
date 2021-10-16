<script setup lang="ts">
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>

<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>Topic</el-breadcrumb-item>
      <el-breadcrumb-item>cluster.messages.0</el-breadcrumb-item>
    </el-breadcrumb>

    <el-divider></el-divider>

    <el-table :data="tableData" border>
      <el-table-column prop="date" label="Time" width="200" />
      <el-table-column prop="name" label="Partition" width="100" />
      <el-table-column prop="name" label="Message" />
      <el-table-column prop="name" label="Offset" width="100" />
    </el-table>
  </div>
</template>

<style lang="sass"></style>
