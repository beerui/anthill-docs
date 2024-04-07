import { defineClientConfig } from '@vuepress/client'
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import anthead from '@anthead/core';
/**
 * 配置文件
 */
export default defineClientConfig({
  enhance({ app, siteData }) {
    app.use(TDesign);
    app.use(anthead);
  },
  setup() {},
  rootComponents: [],
})
