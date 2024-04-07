---
title: 快速开始 组件文档
order: 2
category:
  - TDesign 组件
tag:
  - TDesign
---

::: warning

公共组件默认以`TDesign`为框架开发，如果需要其他UI框架的组件，请关注组件库文档中的标签。

:::

## 基础组件

### 安装

::: code-tabs#shell
@tab:active yarn
```bash
yarn add @anthead/core --registry http://192.168.4.202:4873/
```

@tab npm
```bash
npm i @anthead/core --registry http://192.168.4.202:4873/
```

:::

### 使用

```typescript
import { BaseSearchBar } from '@anthead/core';
```

## 业务组件

```sh
yarn add @anthead/core-biz --registry http://192.168.4.202:4873/
```

### 使用

```typescript
import { BaseLogin } from '@anthead/core-biz';
```
