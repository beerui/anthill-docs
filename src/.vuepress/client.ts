import { defineClientConfig } from '@vuepress/client'
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import anthill from '@brewer/anthill-core';
/**
 * 配置文件
 */
export default defineClientConfig({
  enhance({ app, siteData }) {
    app.use(TDesign);
    app.use(anthill);
  },
  setup() {},
  rootComponents: [],
})
