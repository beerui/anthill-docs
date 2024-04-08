import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as l,c as r,b as e,d as n,e as c,f as a}from"./app-BK07oOkr.js";const t={},o=a(`<h2 id="创建一个模板项目" tabindex="-1"><a class="header-anchor" href="#创建一个模板项目" aria-hidden="true">#</a> 创建一个模板项目</h2><p>若已安装Cli工具，输入快捷命令即可创建项目。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>create-ah
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),v={class:"hint-container info"},u=e("p",{class:"hint-container-title"},"Info",-1),p={href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"},m=a(`<h2 id="全局安装cli工具" tabindex="-1"><a class="header-anchor" href="#全局安装cli工具" aria-hidden="true">#</a> 全局安装cli工具</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i create-ah <span class="token parameter variable">-g</span> <span class="token parameter variable">--registry</span> http://192.168.4.202:4873/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>确保你安装了最新版本的 Node.js，并且你的当前工作目录正是打算创建项目的目录。在命令行中运行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> create ah@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这一指令将会安装并执行 create-ah它是 蚁首 的项目脚手架工具。你将会看到一些项目的快捷选项：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>蚂蚁窝 - 项目模板生成工具
1. √ 请输入项目名称： ... anthead-project
2. √ 目标文件夹 &quot;anthead-project&quot; 非空，是否覆盖？ ... 否 / 是
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目被创建后，通过以下步骤安装依赖并启动开发服务器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>your-project-name<span class="token operator">&gt;</span>
<span class="token function">yarn</span> <span class="token function">install</span>
<span class="token function">yarn</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你准备将应用发布到生产环境时，请查看项目下的环境变量：</p><p>通常都会存在 <code>.env.dev</code> 和 <code>.env.prod</code>，注意开发环境和正式环境的区分。</p>`,10);function h(b,g){const s=d("ExternalLinkIcon");return l(),r("div",null,[o,e("div",v,[u,e("p",null,[n("前提条件 是 已安装 18.0 或更高版本的"),e("a",p,[n("Node.js"),c(s)]),n("。")])]),m])}const k=i(t,[["render",h],["__file","quick-start.html.vue"]]);export{k as default};
