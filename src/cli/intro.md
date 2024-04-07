---
# 这是文章的标题
title: 项目介绍
# 这是侧边栏的顺序
order: 2
# 设置作者
author: MoTou
# 设置写作时间
date: 2024-01-19
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - 使用指南
---

以下以`pc-vue3-tdesign-admin`项目为例子：

# 项目结构
正如初始化项目后可以看到，整个项目的目录结构大致如下：
```bazaar
└─ pc-vue3-tdesign-admin
    ├─ public
    │  ├─ static            // 静态资源
    │  └─ favicon.ico
    ├─ src
    │  ├─ api               // 接口请求
    │  ├─ assets            // 被打包的资源
    │  ├─ components        // 公共组件
    │  ├─ config            // 路由代理配置
    │  ├─ constants         // 常量
    │  ├─ hooks             // 自定义hooks
    │  ├─ layouts           // 布局
    │  ├─ pages             // 页面视图
    │  ├─ router            // 路由
    │  ├─ store             // vuex
    │  ├─ style             // 全局样式
    │  ├─ types             // 类型文件
    │  ├─ utils             // 工具函数
    │  ├─ App.vue           // 根组件
    │  ├─ main.ys           // 入口
    │  └─ permission.ts     // 权限控制
    ├─ .env.dev             // 开发 - 环境变量
    ├─ .env.prod            // 生产 - 环境变量
    ├─ .gitignore
    ├─ index.html
    ├─ package.json
    ├─ tsconfig.json
    └─ vite.config.js
```
## 页面代码结构
如上图所示，src目录下是页面代码，大部分情况下，只需要增删src目录下的代码即可。

src内的结构大致如下所示，在使用的过程中，遵守既有的目录结构，以规范项目代码的组织结构。

```bazaar
src
├── App.vue
├── components                        # 公共组件层
├── config                            # 配置层
│     ├── global.ts                     # 全局常量配置
│     ├── color.ts                      # 全局主题色彩配置
│     └── style.ts                      # 布局样式配置
├── constants                         # 常量层
│     └── index.ts
├── layouts                           # 布局层 可动态调整
│     ├── components                    # 布局组件
│     │     ├── ...
│     │     └── SideNav.vue               # 侧边栏组件
│     ├── frame                         # 嵌入式组件
│     │     └── index.vue
│     ├── setting.vue                   # 配置生成组件
│     ├── blank.vue                     # 空白路由
│     └── index.vue
├── pages                             # 业务模块层
│     ├── dashboard                     # 一个页面组件
│     │     └── base
│     │           ├── components          # 该页面组件用到的子组件
│     │           ├── constants.ts        # 该页面组件用到的常量
│     │           ├── index.ts
│     │           └── index.vue
│     ├── ...
│     └── user
│           ├── constants.ts
│           ├── index.less
│           ├── index.ts
│           └── index.vue
├── router                            # 路由层
├── store                             # Pinia 数据层
│     ├── index.ts
│     └── modules
│           ├── notification.ts
│           ├── ...
│           ├── setting.ts
│           └── user.ts
├── style                             # 样式目录
│     ├── font-family.less              # 字体文件（腾讯体W7）
│     ├── layout.less                   # 全局样式布局
│     ├── reset.less                    # 对默认样式的重置
│     └── variables.less                # 模板样式 token
└── utils                             # 工具层
│     ├── route                         # 路由工具封装
│     ├── charts.ts                     # 图表工具封装
│     ├── color.ts                      # 色彩工具封装
│     └── request                       # 请求工具封装
└── main.ts                           # 入口逻辑文件
```

## 环境变量

在项目的根目录，有 `.env` 配置文件，项目会根据启动的命令中的 `mode` 参数，加载指定的配置文件的配置来运行， 如本地环境执行 `npm run dev`，因为对于命令中的`mode` 参数为`dev`，项目运行会加载`.env.dev`的配置来运行。 

项目初始化内置了 `.env.dev`、`.env.prod` 和 `.env` 分别对应本地开发环境、测试环境 和 生产（正式）环境，也可以根据实际需求继续扩展。

## 内置的环境变量

- VITE_BASE_URL：项目启动运行默认的 URL
- VITE_IS_REQUEST_PROXY： 项目是否启动请求代理
- VITE_API_URL: 项目默认请求的 URL
- VITE_API_URL_PREFIX：项目默认请求的前缀


## 开始开发
Composition API 示例

### 列表页 `index.vue`
```vue
<template>
  <div>
    <base-breadcrumb :max-item-width="'150'" class="mb-16" :config="">
      <t-breadcrumbItem>基础信息管理</t-breadcrumbItem>
      <t-breadcrumbItem>涵洞隧道管理</t-breadcrumbItem>
    </base-breadcrumb>
    <t-space direction="vertical" style="width: 100%">
      <t-card :bordered="false">
        <base-search-bar :config="searchConfig" @reset="onReset" @submit="onSubmit">
          <template #process="slotProps">
            <t-select v-model="groupValue" class="mr-16" :options="groupOptions"></t-select>
            <t-input v-model="inputValue"></t-input>
          </template>
        </base-search-bar>
      </t-card>
      <t-card :bordered="false">
        <t-space direction="vertical" style="width: 100%">
          <base-table-head :config="TableHeadConfig" @click="onClickTableHead"></base-table-head>
          <base-table
            :columns="tableColumns"
            :data="tableData"
            :data-loading="tableLoading"
            :pagination="pagination"
            row-key="index"
            @page-change="onPageChange"
          ></base-table>
        </t-space>
      </t-card>
    </t-space>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { MessagePlugin, PageInfo, TableRowData } from 'tdesign-vue-next';
import BaseSearchBar from '@/components/form/BaseSearchBarConfigVue.vue';
import { BaseFormItemType } from '@/types/components';
import { baseSearchConfig, TableHeadConfig, TableColumns } from './constants';
import BaseTableHead from '@/components/table/BaseTableHead.vue';
import BaseTable from '@/components/table/BaseTable.vue';
import { culvertList } from '@/api/base';

const router = useRouter();
const searchConfig = ref<BaseFormItemType[]>(baseSearchConfig);

const baseBread = [
  { title: '基础信息管理', name: 'Base'},
  { title: '涵洞隧道管理', name: 'BaseList'},
]
const tableData = ref([]);
const groupValue = ref('displayName');
const inputValue = ref('');
const groupOptions = [
  { label: '涵洞名称', value: 'displayName' },
  { label: '产权单位', value: 'propertyUnit' },
  { label: '养护单位', value: 'maintenanceUnit' },
  { label: '安全管理员', value: 'securityManager' },
  { label: '网格员', value: 'gridMember' },
  { label: '统一地址编码', value: 'gridCode' },
  { label: '统一地址名称', value: 'sourceaddress' },
];
const tableLoading = ref(false);
const pagination = ref({
  total: 0,
  current: 1,
  pageSize: 10,
});
const onOpenPage = (row, name) => {
  router.push({ name, query: { id: row.oid } });
};

const tableColumns = TableColumns(onOpenPage);

onMounted(() => {
  getList();
});

// 查询
const onSubmit = () => {
  pagination.value.current = 1;
  getList();
};

// 重置
const onReset = () => {
  inputValue.value = '';
  groupValue.value = 'displayName';
  pagination.value.current = 1;
  searchConfig.value.forEach((el) => {
    el.value = el.default;
  });
  getList();
};

// 获取列表
const getList = async () => {
  tableLoading.value = true;
  try {
    const { content, total } = await culvertList({
      pageSize: pagination.value.pageSize,
      pageNum: pagination.value.current,
      [groupValue.value]: inputValue.value,
    });
    tableData.value = content ?? [];
    pagination.value.total = total;
  } catch (error) {
  } finally {
    tableLoading.value = false;
  }
};

const btnMethods = {
  onExportLine: async () => {
    try {
      MessagePlugin.success('导出成功');
    } catch (error) {}
  },
  onExportSection: async () => {
    try {
      MessagePlugin.success('导出成功');
    } catch (error) {}
  },
};

// 新增路线/导出数据
const onClickTableHead = (params) => {
  const { type, url, method } = params.event ?? params;
  if (type === 'OPEN_PAGE') {
    router.push(url);
  } else if (type === 'METHOD') {
    btnMethods[method]();
  }
};

const onPageChange = (pageInfo: PageInfo, newDataSource: TableRowData[]) => {
  pagination.value.current = pageInfo.current;
  pagination.value.pageSize = pageInfo.pageSize;
  getList();
};
</script>
<style lang="less" scoped></style>
```

### 参数页 `constants.tsx`

```tsx
import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';
import { BTN_LIST_TYPE, BaseFormItemType } from '@/types/components';
import renderOperator, { OperatorConfigItem } from '@/components/table/BaseOperator';

export const baseSearchConfig: BaseFormItemType[] = [
  {
    type: 'SLOT',
    label: '选择类型',
    value: '',
    default: '',
    name: 'process',
  },
  {
    name: '',
    value: 'G',
    default: 'G',
    type: 'SELECT',
    label: '类型',
    attrs: {
      options: [
        { key: 'G', label: '涵洞', value: 'G' },
        { key: 'S', label: '隧道', value: 'S' },
      ],
      clearable: true,
    },
  },
];

export const TableHeadConfig: BTN_LIST_TYPE = {
  title: '涵洞隧道列表',
};

export const TableColumns = (onOpenPage): PrimaryTableCol<TableRowData>[] => {
  return [
    {
      title: '名称',
      colKey: 'displayName',
    },
    {
      title: '属地',
      colKey: 'town',
    },
    {
      title: '类型',
      colKey: 'typeName',
      cell: (h, { row }) => {
        return '涵洞';
      },
    },
    {
      title: '操作',
      colKey: 'op',
      fixed: 'right',
      cell: (h, { row }) => {
        const configs: OperatorConfigItem[] = [
          { name: '详情', attrs: { onClick: () => onOpenPage(row, 'BaseInfoCulvertDetail') } },
          { name: '编辑', attrs: { onClick: () => onOpenPage(row, 'BaseInfoCulvertEdit') } },
          { name: '配置', attrs: { onClick: () => onOpenPage(row, 'BaseInfoCulvertConfig') } },
        ];
        return renderOperator(configs);
      },
    },
  ];
};
```
配置写法
```js
const configs: OperatorConfigItem[] = [{ name: '详情', attrs: { onClick: () => onCheck(row) } }];
if (onEdit) {
  configs.push({ name: '编辑', attrs: { onClick: () => onEdit(row) } });
}
if (onDelete) {
  configs.push({ name: '编辑', attrs: { onClick: () => onDelete(row) } });
}
return renderOperator(configs);
```

::: info

当前项目需要 Node.js 16.0 或更高版本的[Node.js](https://nodejs.org/en)。

其它模板文件目录结构基本一致，Node版本会略有不同。

:::

## 项目常用组件

### 在项目中播放视频监控

```shell
yarn add video.js @videojs/http-streaming
```

`main.ts`中引入css
```javascript
import 'video.js/dist/video-js.css';
```
新建组件`components/video-player.vue`
```vue
<template>
  <div class="m-video-player">
    <video id="my_video" class="video-js vjs-default-skin" autoplay width="1134" height="638"></video>
  </div>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import videojs from 'video.js';
import '@videojs/http-streaming';
import { getRealMonitorById } from '@/api/base';

const props = defineProps({
  channelCode: String,
});
let player = null;
onMounted(() => {
  player = videojs('my_video');
  getRealMonitorById(props.channelCode).then((res) => {
    if (res.url) {
      console.log(res.url);
      player.src({
        src: res.url,
        type: 'application/x-mpegURL',
        withCredentials: false,
      });
    }
  });
});
onBeforeUnmount(() => {
  player.dispose();
});
</script>

<style lang="less" scoped>
.m-video-player {
  width: 1200px;
}
</style>

```
