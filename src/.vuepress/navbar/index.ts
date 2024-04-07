import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
  "/",
  {
    text: "构建工具",
    prefix: "/cli/",
    children: [
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
  },
  {
    text: "组件",
    prefix: "/components/",
    children: [
      {
        text: "快速开始",
        link: "quick-start",
      },
      {
        text: "基础组件",
        prefix: "base",
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
      {
        text: "业务组件",
        prefix: "/prod",
        children: [
          {
            text: "登录注册 BaseLogin",
            link: "BaseLogin",
          },
          {
            text: "轨迹回放 ReplayHistorical",
            link: "ReplayHistorical",
          },
          {
            text: "点线面绘制 OverlayDraws",
            link: "OverlayDraws",
          },
        ],
      },
    ],
  },
  {
    text: "公共方法",
    prefix: "/utils/",
    children: [
      {
        text: "快速开始",
        link: "quick-start",
      },
      {
        text: "样式 css",
        prefix: "/base",
        children: [
          {
            text: "公有Css Tailwindcss",
            link: "Tailwindcss",
          },
        ],
      },
      {
        text: "方法 ts",
        prefix: "/ts",
        children: [
          {
            text: "打开页面 openPage",
            link: "openPage",
          },
          {
            text: "钉钉",
            link: "dingtalk",
          },
          {
            text: "微信",
            link: "wechat",
          },
        ],
      },
    ],
  },
  {
    text: "解决方案",
    prefix: "/best/",
    children: [
      {
        text: "文档语法",
        link: "markdown",
      },
      {
        text: "大屏自适应方案",
        link: "Tailwindcss",
      },
      {
        text: "路由前缀与部署",
        link: "prod",
      },
      {
        text: "分包的解决方案",
        link: "package",
      },
    ],
  },
]);
