import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar/index.js";
import { Sidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://docs.anthead.net/",

  author: {
    name: "anthill",
    url: "https://docs.anthead.net/",
  },

  // iconAssets: "fontawesome-with-brands",

  logo: "/logo-white.png",
  logoDark: "/logo.png",

  darkmode: 'toggle',

  repo: "http://gitlab.anthead.net/framework/fecc/frontend/anthead-docs",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
  // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitLab",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,
  docsDir: "src",

  navbar: Navbar,

  sidebar: Sidebar,
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    searchPro: true,
    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "fecc/frontend/anthead-docs.git",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      playground: {
        presets: ["ts", "vue"],
      },

      // install reveal.js before enabling it
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },

      // install @vue/repl before enabling it
      vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // install vuepress-plugin-pwa2 and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
