---
title: 快速开始 create-ah
order: 2
category:
  - 项目模板
tag:
  - Markdown
---

## 创建一个模板项目

若已安装Cli工具，输入快捷命令即可创建项目。
```sh
create-ah
```

::: info

前提条件 是 已安装 18.0 或更高版本的[Node.js](https://nodejs.org/en)。

:::

## 全局安装cli工具

```sh
npm i create-ah -g --registry http://192.168.4.202:4873/
```

确保你安装了最新版本的 Node.js，并且你的当前工作目录正是打算创建项目的目录。在命令行中运行以下命令：
```sh
npm create ah@latest
```
这一指令将会安装并执行 create-ah它是 蚁首 的项目脚手架工具。你将会看到一些项目的快捷选项：

```
蚂蚁窝 - 项目模板生成工具
1. √ 请输入项目名称： ... anthead-project
2. √ 目标文件夹 "anthead-project" 非空，是否覆盖？ ... 否 / 是
3. √ 选择新建的项目模板
   - pc-vue3-tdesign-admin
   - pc-vue3-tdesign-screen
   - pc-vue2-element-admin
   - uni-vue3-uview
   - uni-vue3-vant
   - uni-vue2-uview
   
项目构建完成，可执行以下命令：

  cd anthill-project
  yarn
  yarn run dev
```

在项目被创建后，通过以下步骤安装依赖并启动开发服务器：
```sh
cd <your-project-name>
yarn install
yarn run dev
```
当你准备将应用发布到生产环境时，请查看项目下的环境变量：

通常都会存在 `.env.dev` 和 `.env.prod`，注意开发环境和正式环境的区分。
