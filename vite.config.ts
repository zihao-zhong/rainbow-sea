import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePluginElementPlus from 'vite-plugin-element-plus';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log('mode:', mode);
  return ({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@types': path.resolve(__dirname, 'src/types'),
      },
    },
    server: {
      port: 4000,   // 设置服务启动端口号
      open: false,  // 设置服务启动时是否自动打开浏览器
      cors: true,   // 允许跨域
      proxy: {
        '/api': {
          // target: mode === 'prod' ? 'http://zihao.work:3333' : 'http://127.0.0.1:3333',
          target: 'http://localhost:3333',
          changeOrigin: true,
          // secure: false,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 预加载全局的scss文件，全局加载scss变量
          additionalData: `
            @import "/normalize.css";
            @import "./src/assets/scss/common.scss";
            @import "./src/assets/scss/variables.scss";
          `
        },
      }
    },
    plugins: [
      vue(),
      VitePluginElementPlus({
        // 如果你需要使用 [component name].scss 源文件，你需要把下面的注释取消掉。
        // 对于所有的 API 你可以参考 https://github.com/element-plus/vite-plugin-element-plus 的文档注释
        // useSource: true
        format: mode === 'dev' ? 'esm' : 'cjs',
      }),
    ],
  })
});
