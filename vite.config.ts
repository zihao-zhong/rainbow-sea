import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePluginElementPlus from 'vite-plugin-element-plus';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域

    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  },
  plugins: [
    vue(),
    VitePluginElementPlus({
      // 如果你需要使用 [component name].scss 源文件，你需要把下面的注释取消掉。
      // 对于所有的 API 你可以参考 https://github.com/element-plus/vite-plugin-element-plus 的文档注释
      // useSource: true
      format: mode === 'development' ? 'esm' : 'cjs',
    }),
  ],
}));
