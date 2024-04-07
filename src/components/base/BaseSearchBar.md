---
title: 列表查询搜索组件
author: viven
order: 2
category:
  - 基础组件
tag:
  - Markdown
---
## table 列表查询搜索组件
基础搜索栏 常见的table表格上的查询搜索功能。可以按照不同的配置，实现不同的功能，如：搜索框默认值，搜索框类型，搜索框提示文字，搜索框默认值等。
## 示例
config配置`示例可在下方配置修改`
<BaseSearchBarConfigVue />
<details>
  <summary> 查看代码 </summary>

```vue
<template>
  <BaseSearchBar  :config="searchConfig" @reset="onReset" @submit="onSubmit"/>
</template>

<script setup lang="ts">
import {ref} from "vue";
const baseSearchConfig = [
  {
    name: 'deptName',
    value: '',
    type: 'INPUT',
    label: '处理单位',
    attrs: {
      placeholder: '请输入处理单位',
    },
  },
  {
    name: 'times',
    value: [],
    default: [],
    type: 'DATE_RANGE_PICKER',
    label: '创建时间',
    attrs: {
      placeholder: '请输入',
      clearable: true,
      enableTimePicker: true,
      pickMonth: 3,
    },
  },
  {
    name: 'timeLimit',
    value: '',
    type: 'SELECT',
    label: '处理时限',
    attrs: {
      options: [
        { key: -1, label: '已逾期', value: -1 },
        { key: 0, label: '今天到期', value: 0 },
        { key: 3, label: '近3天到期', value: 3 },
        { key: 7, label: '近7天到期', value: 7 },
        { key: 15, label: '近15天到期', value: 15 },
      ],
      clearable: true,
    },
  },
];
const searchConfig = ref(baseSearchConfig)
const onReset = () => {
  console.log('测试reset')
}
const onSubmit = () => {
  const params = {};
  searchConfig.value.forEach(item=> {
    if(item.value) {
      params[item.name] = item.value
    }
  })
  console.log(params)
  console.log('测试submit')
}
</script>
```

</details>

## Api
### BarProps

| 名称                     | 类型                 | 默认值  | 说明                                                                                                                                                    | 必传 |
|------------------------|--------------------|------|-------------------------------------------------------------------------------------------------------------------------------------------------------|----|
| config                 | BaseFormItemType[] | null | 搜索条件整体配置 BaseFormItem 可以根据name，value，type等配置不同的搜索框 <br /> 如：name为'username'，type为'INPUT'，则会生成一个搜索框，name为'username'，type为'SLOT'，则会生成一个slot，可以自定义搜索框内容。 | Y  |
| BaseFormItem.type      | string             | null | Item类型 Types枚举类型                                                                                                                                      | N  |                                                                                                   |    |
| BaseFormItem.name      | string             | ''   | Item查询字段，                                                                                                                                             | Y  |                                                                                                                                                                            | N  |
| BaseFormItem.value     | string \| Array    | ''   | Item默认值                                                                                                                                               | N  |
| BaseFormItem.label     | string             | ''   | Item名称                                                                                                                                                | N  |
| BaseFormItem.default   | string \| Array    | ''   | Item默认基础值                                                                                                                                             | N  |        | true | type类型为TYPE_INPUT时, 标签的宽度                                                                                                                 | N  |
| BaseFormItem.attrs     | any                | ''   | 具体attrs 请查询[TDesign](https://tdesign.tencent.com/vue-next/overview)                                                                                   | N  |        | true | type类型为TYPE_INPUT时, 标签的宽度                                                                                                                 | N  |
| hasBtn                 | boolean            | true | 按钮是否存在                                                                                                                                                | N  |
| btnBoxStyle            | style              | null | 按钮区样式                                                                                                                                                 | N  |
| btnSpan                | number             | null | 按钮区占用span                                                                                                                                             | N  |

type 枚举类型
```ts
enum Types {
'SLOT', // 自定义
'INPUT', // 输入框
'SELECT', // 下拉框
'DATE_PICKER', // 日期选择框
'DATE_RANGE_PICKER', // 日期范围选择框
'CASCADER', // 级联选择框
'ORGANIZE_TREE', // 组织树
'RADIO', // 单选框
'CHECKBOX', // 多选框
'TREE_SELECT', // 树选择框
'DROPDOWN', // 下拉菜单
'TYPE_SELECT', // 筛选器输入框
'TYPE_INPUT', // 输入装饰器
}
```
### BarEvents
| 方法     | 参数   | 描述                                                               |
|--------|------|------------------------------------------------------------------|
| reset  | null | 点击重置按钮触发，会重置默认值为默认基础值或者为null,如果值为数组类型的需要初始化的时候设置默认基础值为[],否则重置会报错 | 
| submit | null | 点击确定按钮触发                                                         |
