---
title: 富文本编辑组件
author: jcf
order: 2
category:
  - 基础组件
tag:
  - Markdown
---
## AHEditor 富文本编辑组件
常用富文本编辑 支持工具栏配置、自定义上传等。
## 示例
<iframe src="/editor2.html" height="300px" width="100%"></iframe>

<details>
  <summary> 查看代码 </summary>

```vue
<template>
  <AHEditor ref="EditorRef" :value="htmlValue" :contentHeight="contentHeight" uploadPath="/upload" />
</template>

<script setup lang="ts">
import {ref} from "vue";
const htmlValue = ref('');
const contentHeight = ref(300);
const EditorRef = ref(null);

</script>
```

</details>

## Api
### EditorProps

| 名称                     | 类型                 | 默认值  | 说明                                                                                                                                                    | 必传 |
|------------------------|--------------------|------|-------------------------------------------------------------------------------------------------------------------------------------------------------|----|
| value                 | string | null | 初始富文本默认展示内容 | N  |
| contentHeight    | number  | 300 | 富文本编辑框高度   | N  |                                                                                                   |    |
| uploadPath      | string  | null  | 图片视频服务器上传路径, 需要接口在response中data字段直接为图片或者视频url路径，如不满足使用自定义上传 | Y/N  |
| autoFocus     | boolean    | flase   | 编辑器是否默认获取焦点   | N  |
| placeholder    | string | 请输入内容...   | 输入框提示    |N  |
| customUpload   | Function(file, insertFn)    | null   | 自定义上传方法返回file文件流及insertFn回调。图片时insertFn(url, alt, href), 视频 insertFn(url, coverimage)url必填其他可为空 | N  |
| excludeKeys     | array  | ['']   | 工具栏不需要展示内容具体参数参照下文  | N  |
| base64LimitSize | number| 10 | 图片或者视频最大上传限制Mb  | N  |
| maxFileSizeImage | number| null | 图片最大上传限制Mb  | N  |
| maxFileSizeVideo | number| null | 视频最大上传限制Mb  | N  |


excludeKeys类型
```ts
enum Keys {
'headerSelect', // 标题
'blockquote', // 引用
'bold', // 粗体
'underline', // 下划线
'italic', // 斜体
'group-more-style', // 更多操作
'color', // 文字颜色
'bgColor', // 背景色
'fontSize', // 字号
'fontFamily', // 字体
'lineHeight', // 行高
'bulletedList', // 无序列表
'numberedList', // 有序列表
'todo', // 待办
'group-justify', // 对齐方式
'group-indent', // 缩进方式
'emotion', // 表情
'insertLink', // 链接
'group-image', // 图片
'group-video', // 视频
'insertTable', // 表格
'codeBlock', // 代码块
'divider', // 分割线
'undo', // 撤销
'redo', // 重做
'fullScreen', // 全屏
'|', // 工具栏分割线
}
```
### EditorEvents
| 方法     | 参数   | 描述                                                               |
|--------|------|------------------------------------------------------------------|
| updateValue(content)  | null | 编辑器内容更新回调 | 
| uploadSuccess(url) | null | uploadPath成功回调 |
| uploadFail(error) | null | uploadPath失败回调|

### AHEditor 实例方法
| 方法     | 参数   | 返回值| 描述                                                               |
|--------|------|----------|--------------------------------------------------------|
| getToolConfig  | null | keys| 返回工具栏key值可用于excludeKeys | 
