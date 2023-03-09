import{_ as p,c as o,b as a,a as s,f as e,h as n,o as t,i as c}from"./app.5d0b5904.js";const v=JSON.parse('{"title":"快速开始","description":"","frontmatter":{"title":"快速开始","lang":"zh-CN"},"headers":[{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[{"level":3,"title":"完整引入","slug":"完整引入","link":"#完整引入","children":[{"level":4,"title":"Volar 支持","slug":"volar-支持","link":"#volar-支持","children":[]}]},{"level":3,"title":"按需导入","slug":"按需导入","link":"#按需导入","children":[]}]},{"level":2,"title":"申请 ak 密钥","slug":"申请-ak-密钥","link":"#申请-ak-密钥","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"开始使用","slug":"开始使用","link":"#开始使用","children":[]}],"relativePath":"zh-CN/guide/quick-start.md","lastUpdated":1671192003000}'),r={name:"zh-CN/guide/quick-start.md"},i=n(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-hidden="true">#</a></h1><p>本节将介绍如何在项目中使用 Vue3 BaiduMap GL。</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-hidden="true">#</a></h2><h3 id="完整引入" tabindex="-1">完整引入 <a class="header-anchor" href="#完整引入" aria-hidden="true">#</a></h3><p>失去 Tree Shaking 的功能，打包有冗余代码。如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Vue3BaiduMapGL </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(Vue3BaiduMapGL)</span></span>
<span class="line"></span></code></pre></div>`,6),D={id:"volar-支持",tabindex:"-1"},y=a("a",{class:"header-anchor",href:"#volar-支持","aria-hidden":"true"},"#",-1),F=n(`<p>如果你在使用 <code>Volar</code>，那么可以在 <code>tsconfig.json</code> 中配置 <code>compilerOptions.types</code> 来指定全局组件类型，从而获得更好的类型提示。如下图：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// tsconfig.json</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue3-baidu-map-gl/volar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,2),d={id:"按需导入",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#按需导入","aria-hidden":"true"},"#",-1),C=n(`<p>Vue3 BaiduMap GL 提供了基于 ES Module 开箱即用的 Tree Shaking 功能。你可以直接导入组件并使用它。这种情况下，只有导入的组件才会被打包。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Zoom</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Map</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Zoom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="申请-ak-密钥" tabindex="-1">申请 ak 密钥 <a class="header-anchor" href="#申请-ak-密钥" aria-hidden="true">#</a></h2><p>在开始使用前，您还需在百度地图开发者后台申请百度地图 ak 密钥，然后在项目中<a href="./config">配置 ak 密钥</a>后，才能正确的渲染地图。详细请阅读下面两个链接的内容：</p><blockquote><p><a href="https://lbs.baidu.com/index.php?title=jspopularGL/guide/getkey" target="_blank" rel="noreferrer">官方密钥 ak 申请指引</a></p><p><a href="https://lbsyun.baidu.com/apiconsole/key?application=key" target="_blank" rel="noreferrer">申请开发者密钥 ak</a></p></blockquote><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h2><p>参考<a href="./config">配置</a></p><h2 id="开始使用" tabindex="-1">开始使用 <a class="header-anchor" href="#开始使用" aria-hidden="true">#</a></h2><p>您可以从现在起启动您的项目。 对于每个组件或 hooks 的用法，请参考对应的文档。</p>`,9);function A(u,_,g,f,k,m){const l=c("Badge");return t(),o("div",null,[i,a("h4",D,[s("Volar 支持 "),e(l,{type:"tip",text:"^0.0.21"}),s(),y]),F,a("h3",d,[s("按需导入 "),e(l,{type:"tip",text:"推荐"}),s(),h]),C])}const T=p(r,[["render",A]]);export{v as __pageData,T as default};
