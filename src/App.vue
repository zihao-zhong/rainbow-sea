<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <el-button type="primary" @click="handleClick">{{ btnText }}</el-button>
    <el-link type="primary">主要链接</el-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const handleClick = (): string => {
      return 'hello';
    };
    return {
      btnText: '测试按钮',
      handleClick,
    };
  },
});
</script>

<style></style>
