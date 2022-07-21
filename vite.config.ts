import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteImagemin from 'vite-plugin-imagemin';
import Components from 'unplugin-vue-components/vite';
import viteCompression from 'vite-plugin-compression';
import VitePluginElementPlus from 'vite-plugin-element-plus';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log('mode:', mode, path.resolve(__dirname, 'src'));
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@types': path.resolve(__dirname, 'src/types'),
      },
    },
    server: {
      port: 4000, // 设置服务启动端口号
      open: false, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域
      proxy: {
        '/api': {
          target: mode === 'prod' ? 'http://zihao.work:3333' : 'http://localhost:3333',
          changeOrigin: true,
          // secure: false,
          rewrite: (p) => p.replace(/^\/api/, ''),
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 预加载全局的scss文件，全局加载scss变量
          additionalData: `
            @import "/normalize.css";
            @import "./src/assets/scss/common.scss";
            @import "./src/assets/scss/variables.scss";
          `,
        },
      },
    },
    plugins: [
      vue(),
      VitePluginElementPlus({
        // 如果你需要使用 [component name].scss 源文件，你需要把下面的注释取消掉。
        // 对于所有的 API 你可以参考 https://github.com/element-plus/vite-plugin-element-plus 的文档注释
        // useSource: true
        format: mode === 'dev' ? 'esm' : 'cjs',
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      viteCompression({
        //生成压缩包gz
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 50,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
    ],
    build: {
      target: 'es2015',
      terserOptions: {
        compress: {
          drop_console: false, // 生产环境时移除 console
          drop_debugger: true, // 生产环境时移除 debugger
        },
      },
      reportCompressedSize: false, // 取消计算文件大小，加快打包速度
      sourcemap: false,
      rollupOptions: {
        output: {
          entryFileNames: 'js/[name]-[hash].js',
          chunkFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
        },
      },
    },
  };
});
