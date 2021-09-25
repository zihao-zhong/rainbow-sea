<template>
  <el-header>
    <div class="rs-header rs-main">
      <nav class="rs-nav">
        <router-link class="rs-nav-list" to="/">首页</router-link>
        <router-link class="rs-nav-list" to="/database">数据库</router-link>
        <router-link class="rs-nav-list" to="/game">游戏</router-link>
        <router-link class="rs-nav-list" to="/word">文档</router-link>
        <!-- <router-link class="rs-nav-list" to="/websocket">WebSocket</router-link> -->
      </nav>
      <div class="rs-user">
        <el-button size="medium" plain>登录</el-button>
      </div>
    </div>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {
    const a = '';
  },
});
</script>

<style lang="scss" scoped>
.el-header {
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
}
.rs-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .rs-nav {
    display: flex;
    line-height: 60px;
    color: $rs-primary-gray;
    .rs-nav-list {
      user-select: none;
      cursor: pointer;
      transition: all .3s ease;
      &:not(:first-child) {
        margin-left: 30px;
      }
      &:hover {
        color: $rs-primary-blue;
      }
    }
  }
  .rs-user {

  }
}
</style>
