<template>
  <el-container direction="vertical">
    <Header />
    <el-main>
      <el-config-provider :locale="locale">
        <router-view />
      </el-config-provider>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './Header.vue';
import { ElConfigProvider } from 'element-plus';

import zhCn from 'element-plus/lib/locale/lang/zh-cn';

export default defineComponent({
  components: {
    Header,
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    };
  },
});
</script>
