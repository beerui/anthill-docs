---
title: 快速开始 组件文档
order: 2
category:
  - TypeScript 
tag:
  - 方法
---

## 基础样式包安装

```sh
yarn add @anthead/style --registry http://192.168.4.202:4873/
```

### 使用

在项目的main.js中引用。
```typescript
import '@anthead/style/tailwind-pc.css';
import '@anthead/style/tailwind-h5.css';
import '@anthead/style/reset.css';
```

### 公共方法安装

```sh
yarn add @anthead/utils --registry http://192.168.4.202:4873/
```

### 使用

```typescript
import { DingTalk, openPage } from '@anthead/utils';

// 钉钉自动登录
DingTalk.AutoLogin({ redirectUrl: '', response: true });

// 防抖的点击事件
// 打开页面
openPage({ type: 'OPEN_PAGE', url: '/a' });
const confirmHandle = () => { console.log('click'); };
// 触发事件
openPage({ type: 'METHOD', method: confirmHandle });
```

::: info

公共方法默认以`TypeScript`编写，如需其他语言，请查看对应组件库的文档。

:::

