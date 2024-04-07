---
title: 页面面包屑组件
author: jcf
order: 2
category:
  - 基础组件
tag:
  - Markdown
---
## 基础面包屑
面包屑 常用于页面顶部，系统拥有超过两级以上的层级结构时使用。用于切换向上任意层级的内容。
## 示例
config配置`可在此修改配置 以更改下方示例`
<br />
<t-textarea  v-model="testJson"></t-textarea>
<br />
<t-button theme="default" @click="showBack = true">添加返回</t-button>
<t-button theme="default" @click="showBack = false" style="margin-left:15px">移除返回</t-button>
<br />
<BaseBreadcrumb :list="breadList" :is-back="showBack" style="margin-top:20px"></BaseBreadcrumb>
<br />

<script setup lang="ts">
import { ref, watch } from "vue";
const baserBreadList = [
  {
    title: '首页',
    path: '/'
  },
  {
    title: '面包屑',
  },
];
const showBack = ref(false);
const testJson = ref(JSON.stringify(baserBreadList, null, '\t'));
const breadList = ref(baserBreadList);
watch(testJson, ()=>{
  try {
    breadList.value = JSON.parse(testJson.value);
  } catch (e) {
    testJson.value = JSON.stringify(breadList.value, null, '\t');
  }
});
</script>

<details>
  <summary> 查看代码 </summary>

```vue
<template>
  <BaseBreadcrumb  :list="breadList" :is-back="showBack"/>
</template>

<script setup lang="ts">
import { ref } from "vue";
const baserBreadList = [
  {
    title: '首页',
    path: '/'
  },
  {
    title: '面包屑',
  },
];
const showBack = ref(false);
const breadList = ref(baserBreadList);
</script>
```

</details>

## Api
### BaseBreadcrumbProps

| 名称                     | 类型                 | 默认值  | 说明                                                                                                                                                    | 必传 |
|------------------------|--------------------|------|-------------------------------------------------------------------------------------------------------------------------------------------------------|----|
| list                 | Array | null | 面包屑配置列表，包含title标题字段、path跳转路径 | Y  |
| isBack      | boolean             | false | 是否展示返回按钮| N  |
| mb      | number             | 20   | 距离下方相邻元素距离  | N  |
| maxItemWidth     | string    | '150'   | 单个最大宽度 | N  |
| right| slot | null | 右侧自定义展示内容| N |
