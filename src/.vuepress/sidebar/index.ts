import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
  "/": [
    "",
  ],
  "/cli": [
    {
      text: "快速开始",
      link: "quick-start",
    },
    {
      text: "项目介绍",
      link: "intro",
    },
    {
      text: "页面规范",
      link: "style",
    },
    {
      text: "开发规范",
      link: "dev",
    },
    {
      text: "tsconfig配置",
      link: "tsconfig",
    },
  ],
  "/components": [
    {
      text: "快速开始",
      link: "quick-start",
    },
    {
      text: "基础组件",
      prefix: "/components/base",
      children: [
        {
          text: "搜索框 BaseSearchBar",
          link: "BaseSearchBar",
        },
        {
          text: "面包屑 BaseBreadcrumb",
          link: "BaseBreadcrumb",
        },
        {
          text: "表格 BaseTable",
          link: "BaseTable",
        },
        {
          text: "文件上传 Upload",
          link: "Upload",
        },
        {
          text: "选择颜色 Color",
          link: "Color",
        },
        {
          text: "空占位 Empty",
          link: "Empty",
        },
        {
          text: "富文本 Editor",
          link: "Editor",
        },
      ],
    },
  ]
});
