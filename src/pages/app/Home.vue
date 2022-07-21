<template>
  <div>
    <el-link type="primary">app</el-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getUserList } from '@/api/app';
export default defineComponent({
  setup() {
    getUserList({
      pageNum: 1,
      pageSize: 10,
    });

    return {};
  },
});
</script>
