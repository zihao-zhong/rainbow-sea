<template>
  <el-header>
    <div class="rs-main">
      <nav class="rs-nav">
        <div class="rs-nav-list">首页</div>
        <div class="rs-nav-list">数据库</div>
        <div class="rs-nav-list">游戏</div>
      </nav>
    </div>
  </el-header>
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
.rs-nav {
  display: flex;
  line-height: 60px;
  color: $rs-primary-gray;
  .rs-nav-list {
    &:not(:first-child) {
      margin-left: 30px;
    }
  }
}
</style>
