<template>
  <el-container direction="vertical">
    <Header />
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './Header.vue';

export default defineComponent({
  components: { Header },
  setup() {
    return {};
  },
});
</script>
