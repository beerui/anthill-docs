import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as d,c,b as e,d as n,e as s,f as i}from"./app-DubbjjMF.js";const t={},o=e("h1",{id:"蚂蚁窝lerna项目-配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#蚂蚁窝lerna项目-配置","aria-hidden":"true"},"#"),n(" 蚂蚁窝lerna项目 配置")],-1),p={href:"http://gitlab.anthead.net/framework/fecc/frontend/anthill-lerna-packages",target:"_blank",rel:"noopener noreferrer"},v=i(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>anthill-lerna-packages 项目名
├── packages
    |── core 基础组件包
        |──lib  // 打包组件存放地址。
        |──src
            |──packages // 组件文件夹
            |──index.ts // 主入口
    |── utils 基础方法包
    |── core-biz 业务组件包
    |── style 基础样式包
├── lerna.json
├── package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目共提供4个包，每个包都是一个vue项目文件，在src目录下的packages文件夹下为组件。 可以通过npm run build 进行打包。打包入口是/src/index.ts, 出口为/lib</p><div class="hint-container info"><p class="hint-container-title">注意</p><p>打包命令 需要安装 pnpm</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token function">pnpm</span> <span class="token parameter variable">-g</span>
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><p>打包好的包，将会发布到npm仓库，可以使用lerna publish命令进行发布。 npm 发布之前 需要进行以下步骤</p><ol><li>第一步：npm 切换 私有库源</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry http://192.168.4.202:4873/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>第二步：npm 注册</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> adduser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入以上命令后，会提示输入用户名和密码和邮箱，注册成功后，即可登录</p><ol start="3"><li>第三步：npm 登录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>登录成功后即可发布</p><div class="hint-container warning"><p class="hint-container-title">提醒</p><p>发布之前首先需要将打包好的代码提交git，不然不会生效。</p></div><ol start="4"><li>第四步 发布</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lerna publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">提醒</p><p>发布包的时候会提醒输入版本号，一般会自动生成小版本，直接一路回车 next<br> 如果已经切换私有库并处于登录状态，可以忽略123步骤，直接打包好后提交git 执行4.</p></div><h2 id="lerna-介绍" tabindex="-1"><a class="header-anchor" href="#lerna-介绍" aria-hidden="true">#</a> lerna 介绍</h2><p>Lerna 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目。</p><p>简单来理解：就是通过lerna 进行分包处理，并可以处理多包之间的关联关系。</p>`,19),u={href:"https://lerna.js.org/",target:"_blank",rel:"noopener noreferrer"},m=i(`<h3 id="lerna-快速起步" tabindex="-1"><a class="header-anchor" href="#lerna-快速起步" aria-hidden="true">#</a> lerna 快速起步</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token comment"># 新建lerna项目文件夹</span>
<span class="token function">mkdir</span> lerna-demo
 <span class="token comment"># 进入目录</span>
<span class="token builtin class-name">cd</span> lerna-demo
 <span class="token comment"># 全局安装</span>
<span class="token function">npm</span> init lerna <span class="token parameter variable">-g</span> 
 <span class="token comment"># 设置当前目录为lerna项目</span>
lerna init 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以上命令会生成目录结构如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>lerna-demo
├── lerna.json
├── package.json
├── packages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lerna-常用命令" tabindex="-1"><a class="header-anchor" href="#lerna-常用命令" aria-hidden="true">#</a> lerna 常用命令</h3><h4 id="lerna-create-创建包" tabindex="-1"><a class="header-anchor" href="#lerna-create-创建包" aria-hidden="true">#</a> lerna create 创建包</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lerna create core
lerna create utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以上命令会生成目录结构如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>lerna-demo
├── lerna.json
├── package.json
├── packages
    ├── core
        ├── package.json // 发布的版本信息
        ├── lib  // 包的实际代码
        ├── Readme.md // npm包 对外显示信息 可以写使用方法
    ├── utils
    ....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lerna-add-添加包-废弃" tabindex="-1"><a class="header-anchor" href="#lerna-add-添加包-废弃" aria-hidden="true">#</a> <s>lerna add 添加包</s> (废弃)</h4><p>这个命令已经被v7版本以上的lerna命令废弃了，可以使用npm install代替 or yarn。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token comment"># 将core包 引入package.json，以供其他包引用  </span>
<span class="token function">npm</span> <span class="token function">install</span> ./packages/core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container caution"><p class="hint-container-title">注意：</p><p>如果core包使用了utils包，那么在实际使用过程中需要同时安装utils包和core包,否则会报错。</p></div><h4 id="lerna-publish-发布包" tabindex="-1"><a class="header-anchor" href="#lerna-publish-发布包" aria-hidden="true">#</a> lerna publish 发布包</h4><p>发布时候注意修改npm的指向地址并登录。</p><div class="hint-container info"><p class="hint-container-title">小技巧</p><p>lerna publish 有时发布不成功会卡住，重新执行会报错版本已存在。 这时候只要去修改子包或者总的版本号，然后重新发布就好 或者将生成版本号的文件进行回滚操作后 重新发布。。</p></div><p>lerna publish 选择Patch会更新的子包中的package.json的version更改为指定版本</p><p>lerna会自动生成git tag(版本标签)上传github上, 和自动上传npm的版本号(对应更新的子包)</p><h4 id="lerna-diff-查看包的差异" tabindex="-1"><a class="header-anchor" href="#lerna-diff-查看包的差异" aria-hidden="true">#</a> lerna diff 查看包的差异</h4>`,19),h={href:"https://lerna.js.org/",target:"_blank",rel:"noopener noreferrer"};function b(g,f){const a=r("ExternalLinkIcon");return d(),c("div",null,[o,e("p",null,[e("a",p,[n("项目git地址 http://gitlab.anthead.net/framework/fecc/frontend/anthill-lerna-packages"),s(a)])]),v,e("p",null,[n("具体想要了解更多可以通过"),e("a",u,[n("lerna官网"),s(a)]),n("进行查看。")]),m,e("ul",null,[e("li",null,[n("还有一些其他的命令可自行查找"),e("a",h,[n("lerna官网"),s(a)])])])])}const x=l(t,[["render",b],["__file","package.html.vue"]]);export{x as default};
