import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,f as t}from"./app-BK07oOkr.js";const e="/assets/img_8-CglqB92e.png",o="/assets/img-CABFqrtP.png",p="/assets/img_1-CNjlcxxP.png",i="/assets/img_2-BUMeISts.png",c="/assets/img_3-8xpWrOl6.png",l="/assets/img_4-Cko5pwIR.png",r="/assets/img_5-DEVaYbg7.png",u="/assets/img_6-BdBUQtxD.png",d="/assets/img_7-Y1DxeFqy.png",g={},k=t('<h2 id="现状" tabindex="-1"><a class="header-anchor" href="#现状" aria-hidden="true">#</a> 现状</h2><p>不同的前端同学开发时，对于组件的使用，没有统一的规范，导致页面组件样式不统一。</p><p>为此我们制定了统一规范，保证同一个系统组件使用一致，提高开发效率、还原设计稿。</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>特别备注：开发同学在做的时候希望能仔细查看设计稿，尽量还原设计稿，如果有组件上的问题，及时沟通。</p></div><h2 id="页面布局" tabindex="-1"><a class="header-anchor" href="#页面布局" aria-hidden="true">#</a> 页面布局</h2><h3 id="规则说明" tabindex="-1"><a class="header-anchor" href="#规则说明" aria-hidden="true">#</a> 规则说明</h3><p>以交投中的页面为例子：</p><ol><li>【间隔】页面中块与块之前的区域间隔，保持<code>24px</code>, 模块与模块之间的间距基本为8的倍数。</li><li>【搜索栏】查询条件栏，规定一行展示3个条件，输入框/选择框宽度保持自适应，2个条件间距24px。 统一使用封装方法<a href="/components/base/BaseSearchBar"><code>BaseSearchBar</code></a>来渲染列表查询条件。</li><li>【表格】表格中列的宽度，如果没有强烈要求全部展示，一行超过规定字数，就用<code>...</code>表示，鼠标移入可以看到完整字段。</li><li>【表格】表格中<code>操作</code>一栏，列命名<code>op</code>。非特殊情况，不允许自定义内容，统一使用封装方法<code>renderOperator</code>来渲染操作按钮。</li><li>【表格】表格中，内容空白情况，请用<code>-</code>展示，如果有特殊情况及时和产品经理沟通</li><li>【表格】表格中，“开关”组件，使用<code>small</code>尺寸高度<code>24px</code></li><li>【弹窗样式】基本弹窗：宽度<code>600px</code>，大弹框：宽度<code>1200px</code>。</li><li>【抽屉样式】基本抽屉：宽度<code>520px</code>，大抽屉：宽度<code>1000px</code>。</li></ol><h3 id="图片示例" tabindex="-1"><a class="header-anchor" href="#图片示例" aria-hidden="true">#</a> 图片示例</h3><figure><img src="'+e+'" alt="列表页布局示意" tabindex="0" loading="lazy"><figcaption>列表页布局示意</figcaption></figure><figure><img src="'+o+'" alt="不规范示意" tabindex="0" loading="lazy"><figcaption>不规范示意</figcaption></figure><figure><img src="'+p+'" alt="不规范示意" tabindex="0" loading="lazy"><figcaption>不规范示意</figcaption></figure><h3 id="修改前后示意" tabindex="-1"><a class="header-anchor" href="#修改前后示意" aria-hidden="true">#</a> 修改前后示意</h3><figure><img src="'+i+'" alt="弹框修改前" tabindex="0" loading="lazy"><figcaption>弹框修改前</figcaption></figure><figure><img src="'+c+'" alt="弹框修改后" tabindex="0" loading="lazy"><figcaption>弹框修改后</figcaption></figure><figure><img src="'+l+'" alt="表单修改前" tabindex="0" loading="lazy"><figcaption>表单修改前</figcaption></figure><figure><img src="'+r+'" alt="表单修改后" tabindex="0" loading="lazy"><figcaption>表单修改后</figcaption></figure><figure><img src="'+u+'" alt="抽屉修改前" tabindex="0" loading="lazy"><figcaption>抽屉修改前</figcaption></figure><figure><img src="'+d+`" alt="抽屉修改后" tabindex="0" loading="lazy"><figcaption>抽屉修改后</figcaption></figure><p>这里要放到公共方法的功能文档中</p><h3 id="操作按钮renderoperator使用方法" tabindex="-1"><a class="header-anchor" href="#操作按钮renderoperator使用方法" aria-hidden="true">#</a> 操作按钮<code>renderOperator</code>使用方法</h3><ul><li>删除按钮：<code>theme：warning</code> 其它默认: <code>theme: primary</code></li><li>确认框：<code>pop.show</code> 默认：false, 传入true则为展示确认框</li></ul><p>示例：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;操作&#39;</span><span class="token punctuation">,</span>
  colKey<span class="token operator">:</span> <span class="token string">&#39;op&#39;</span><span class="token punctuation">,</span>
  fixed<span class="token operator">:</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">const</span> configs<span class="token operator">:</span> OperatorConfigItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;详情&#39;</span><span class="token punctuation">,</span> attrs<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">onOpenPage</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> <span class="token string">&#39;BaseInfoCulvertDetail&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;删除&#39;</span><span class="token punctuation">,</span>
      attrs<span class="token operator">:</span> <span class="token punctuation">{</span> theme<span class="token operator">:</span> <span class="token string">&#39;danger&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      pop<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        content<span class="token operator">:</span> <span class="token string">&#39;是否删除&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">onConfirm</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">onHandle</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>row<span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">&#39;DELETE&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">renderOperator</span><span class="token punctuation">(</span>configs<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),f=[k];function m(h,v){return a(),s("div",null,f)}const x=n(g,[["render",m],["__file","style.html.vue"]]);export{x as default};