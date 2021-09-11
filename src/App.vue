<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <el-button type="primary">{{ btn }}</el-button>
    <el-link type="primary">主要链接</el-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      btn: '阿萨德',
    };
  },
});
</script>

<style></style>
