<template>
  <el-header>Header</el-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {},
});
</script>

<style lang="scss" scoped>
.el-header {
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
}
</style>
