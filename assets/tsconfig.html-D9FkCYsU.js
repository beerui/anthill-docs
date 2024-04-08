import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-DubbjjMF.js";const e={},o=t(`<h3 id="顶层配置项" tabindex="-1"><a class="header-anchor" href="#顶层配置项" aria-hidden="true">#</a> 顶层配置项：</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>						<span class="token comment">// 继承配置</span>
  <span class="token property">&quot;compileOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>		<span class="token comment">// 可以让IDE在保存文件的时候根据tsconfig.json重新生成文件。要想支持这个特性需要Visual Studio 2015， TypeScript1.8.4以上并且安装atom-typescript插件。</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>		<span class="token comment">// 编译选项，详见：[compilerOptions编译选项](https://www.tslang.cn/docs/handbook/compiler-options.html)</span>
  <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>							<span class="token comment">// 指定一个包含相对或绝对文件路径的列表</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>						<span class="token comment">// 指定一个文件glob匹配模式列表</span>
  <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>						<span class="token comment">// 指定一个文件glob匹配模式列表</span>
  <span class="token property">&quot;references&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>					<span class="token comment">// 一个对象的数组，指明要引用的工程。每个引用的path属性都可以指向到包含tsconfig.json文件的目录，或者直接指向到配置文件本身</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="compileroptions-编译选项" tabindex="-1"><a class="header-anchor" href="#compileroptions-编译选项" aria-hidden="true">#</a> compilerOptions 编译选项:</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token comment">/* 基本选项 */</span>
    <span class="token comment">// 生成代码的 ECMAScript 目标版本</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 生成代码的模块标准</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 编译过程中需要引入的库文件的列表</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dom&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否编译 JS 文件</span>
    <span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否在 JS 文件中报告错误</span>
    <span class="token property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 在 .tsx 文件里支持 JSX: &#39;preserve&#39;, &#39;react-native&#39;, or &#39;react&#39;</span>
    <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否生成 .d.ts 类型定义文件</span>
    <span class="token property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 只生成类型声明文件，不生成js</span>
    <span class="token property">&quot;emitDeclarationOnly&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 为每个 .d.ts 文件生成 sourcemap</span>
    <span class="token property">&quot;declarationMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否生成 .map 文件</span>
    <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 将输出文件合并为一个文件</span>
    <span class="token property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/main.js&quot;</span><span class="token punctuation">,</span> 
	  <span class="token comment">// 输出文件夹</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist&quot;</span><span class="token punctuation">,</span>
	  <span class="token comment">// 输入文件 folder 路径</span>
    <span class="token property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>
	  <span class="token comment">// 是否编译构建引用项目</span>
    <span class="token property">&quot;composite&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 删除注释</span>
    <span class="token property">&quot;removeComments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 不输出文件</span>
    <span class="token property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 通过 tslib 引入辅助工具函数</span>
    <span class="token property">&quot;importHelpers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 降级遍历器实现的支持</span>
    <span class="token property">&quot;downlevelIteration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 是否使用 Object.defineProperty 定义类实例属性</span>
    <span class="token property">&quot;useDefineForClassFields&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">/* 严格的类型检查 */</span>
	  <span class="token comment">// 启用所有严格类型检查</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 不允许隐式的 any 类型</span>
    <span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 不允许把 null、undefined 赋值给其他类型变量</span>
    <span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 严格检查函数的类型</span>
    <span class="token property">&quot;strictFunctionTypes&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 严格检查 bind、call 和 apply 的参数规则</span>
    <span class="token property">&quot;strictBindCallApply&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 类的实例属性必须初始化</span>
    <span class="token property">&quot;strictPropertyInitialization&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 不允许 this 有隐式的 any类型</span>
    <span class="token property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">/* 额外检查 */</span>
	  <span class="token comment">// 检查未使用的局部变量</span>
    <span class="token property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 检查未使用的参数</span>
    <span class="token property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 每个分支都会有返回值</span>
    <span class="token property">&quot;noImplicitReturns&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 检查 switch 语句包含正确的 break</span>
    <span class="token property">&quot;noFallthroughCasesInSwitch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">/* 模块解析 */</span>
	  <span class="token comment">// 控制是否将每个文件作为单独的模块处理。</span>
    <span class="token property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 模块解析策略</span>
    <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
	  <span class="token comment">// 允许从没有默认导出的模块中导入类型定义(.d.ts)文件</span>
    <span class="token property">&quot;allowImportingTsExtensions&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 解析非相对模块的基地址</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>
	  <span class="token comment">// 模块名称到基于 baseUrl 的路径映射表</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	  <span class="token comment">// 将多个文件夹放在一个虚拟目录下</span>
    <span class="token property">&quot;rootDirs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	  <span class="token comment">// 声明文件目录列表</span>
    <span class="token property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	  <span class="token comment">// 需要包含的类型声明文件名列表</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	  <span class="token comment">// 允许从没有默认导出的模块默认导入</span>
    <span class="token property">&quot;allowSyntheticDefaultImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 通过创建命名空间实现 CommonJS 兼容性</span>
    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 自动解析JSON文件</span>
    <span class="token property">&quot;resolveJsonModule&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">/* Source Map */</span>
	  <span class="token comment">// TypeScript 源代码所在的目录</span>
    <span class="token property">&quot;sourceRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	  <span class="token comment">// 指定 map 文件的路径</span>
    <span class="token property">&quot;mapRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	  <span class="token comment">// 生成单个 sourcemaps 文件,而不是将 sourcemaps 生成不同的文件</span>
    <span class="token property">&quot;inlineSourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token comment">// 将代码与 sourcemaps 生成到一个文件中</span>
    <span class="token property">&quot;inlineSources&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">/* 实验性 */</span>
	  <span class="token comment">// 启用实验性的装饰器特性</span>
    <span class="token property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;emitDecoratorMetadata&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 为装饰器提供元数据支持</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token comment">// files可以配置一个数组列表,里面包含指定文件的相对或绝对路径,编译器在编译的时候只会编译包含在files中列出的文件,如果不指定,则取决于有没有设置include选项,如果没有include选项,则默认会编译根目录以及所有子目录中的文件。这里列出的路径必须是指定文件,而不是某个文件夹,而且不能使用* ? **/ 等通配符 </span>
  <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token comment">// include也可以指定要编译的路径列表,但是和files的区别在于,这里的路径可以是文件夹,也可以是文件,可以使用相对和绝对路径,而且可以使用通配符,比如&quot;./src&quot;即表示要编译src文件夹下的所有文件以及子文件夹的文件 </span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token comment">// exclude表示要排除的、不编译的文件,它也可以指定一个列表,规则和include一样,可以是文件或文件夹,可以是相对路径或绝对路径,可以使用通配符 </span>
  <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token comment">// extends可以通过指定一个其他的tsconfig.json文件路径,来继承这个配置文件里的配置,继承来的文件的配置会覆盖当前文件定义的配置。TS在3.2版本开始,支持继承一个来自Node.js包的tsconfig.json配置文件 </span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token comment">// compileOnSave的值是true或false,如果设为true,在我们编辑了项目中的文件保存的时候,编辑器会根据tsconfig.json中的配置重新生成文件,不过这个要编辑器支持 </span>
  <span class="token property">&quot;compileOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token comment">// 一个对象数组,指定要引用的项目</span>
  <span class="token property">&quot;references&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[o];function l(c,i){return s(),a("div",null,p)}const d=n(e,[["render",l],["__file","tsconfig.html.vue"]]);export{d as default};
