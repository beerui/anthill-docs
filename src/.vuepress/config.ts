import { defineUserConfig } from "vuepress";
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { viteBundler } from '@vuepress/bundler-vite'
import requireTransform from 'vite-plugin-require-transform';
import commonjs from "@rollup/plugin-commonjs";
import theme from "./theme.js";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import path from 'node:path'

export default defineUserConfig({
  base: "/",

  title: '蚂蚁窝设计前端委员会',

  theme,
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],

  bundler: viteBundler({
    viteOptions: {
      build: {
        rollupOptions: {
          plugins: [commonjs(), requireTransform({})]
        }, // we use this to inject input for MPA build below
      }
    },
  }),

  // Enable it with pwa
  // shouldPrefetch: false,
});
