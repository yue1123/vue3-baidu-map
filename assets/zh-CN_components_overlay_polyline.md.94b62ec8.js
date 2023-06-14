import{_ as d,c as p,G as n,C as c,A as t,S as s,a,H as e,o as r}from"./chunks/framework.ded5427d.js";const N=JSON.parse('{"title":"BPolyline 折线","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/components/overlay/polyline.md","filePath":"zh-CN/components/overlay/polyline.md","lastUpdated":1686719056000}'),C={name:"zh-CN/components/overlay/polyline.md"},i=s('<h1 id="bpolyline-折线" tabindex="-1">BPolyline 折线 <a class="header-anchor" href="#bpolyline-折线" aria-label="Permalink to &quot;BPolyline 折线&quot;">​</a></h1><p>在地图上绘制简单的折线</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BPolyline</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="组件示例" tabindex="-1">组件示例 <a class="header-anchor" href="#组件示例" aria-label="Permalink to &quot;组件示例&quot;">​</a></h2>',4),u=t("p",null,"overlay/polyline",-1),E=t("h2",{id:"静态组件-props",tabindex:"-1"},[a("静态组件 Props "),t("a",{class:"header-anchor",href:"#静态组件-props","aria-label":'Permalink to "静态组件 Props"'},"​")],-1),D=t("thead",null,[t("tr",null,[t("th",null,"属性"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"可选值"),t("th",null,"默认值"),t("th",null,"版本")])],-1),h=t("tr",null,[t("td",null,"enableClicking"),t("td",null,"是否响应点击事件"),t("td",null,[t("code",null,"boolean")]),t("td",null,"-"),t("td",null,[t("code",null,"true")]),t("td")],-1),A=t("tr",null,[t("td",null,"geodesic"),t("td",null,"是否开启大地线模式，true 时，两点连线将以大地线的形式。"),t("td",null,[t("code",null,"boolean")]),t("td",null,"-"),t("td",null,[t("code",null,"false")]),t("td")],-1),F=t("tr",null,[t("td",null,"clip"),t("td",null,"是否进行跨经度 180 度裁剪，绘制跨精度 180 时为了优化效果"),t("td",null,[t("code",null,"boolean")]),t("td",null,"-"),t("td",null,[t("code",null,"true")]),t("td")],-1),k=t("td",null,"linkRight",-1),_=t("td",null,[a("连接右线，配合"),t("code",null,"clip"),a("解决跨 ±180 度经线绘制问题")],-1),m=t("td",null,[t("code",null,"boolean")],-1),g=t("td",null,"-",-1),y=t("td",null,[t("code",null,"true")],-1),b=s('<h2 id="动态组件-props" tabindex="-1">动态组件 Props <a class="header-anchor" href="#动态组件-props" aria-label="Permalink to &quot;动态组件 Props&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>path</td><td>多边形的坐标数组</td><td><code>{ lng: number, lat: number}[]</code></td><td>-</td><td><code>required</code></td></tr><tr><td>strokeColor</td><td>描边的颜色，同 CSS 颜色</td><td><code>string</code></td><td>-</td><td><code>#000000</code></td></tr><tr><td>strokeWeight</td><td>描边的宽度，单位为像素</td><td><code>string</code></td><td>-</td><td><code>2</code></td></tr><tr><td>strokeOpacity</td><td>描边的透明度，范围 <code>0-1</code></td><td><code> number</code></td><td>-</td><td><code> 1</code></td></tr><tr><td>strokeStyle</td><td>描边的样式，为实线、虚线、或者点状线</td><td><code>string</code></td><td><code>solid / dashed / dotted</code></td><td>-</td></tr><tr><td>enableMassClear</td><td>是否在调用 <code>map.clearOverlays</code> 清除此覆盖物</td><td><code>boolean</code></td><td>-</td><td><code>true </code></td></tr><tr><td>enableEditing</td><td>开启可编辑模式</td><td><code>boolean</code></td><td>-</td><td><code>false </code></td></tr></tbody></table><h2 id="组件事件" tabindex="-1">组件事件 <a class="header-anchor" href="#组件事件" aria-label="Permalink to &quot;组件事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>initd</td><td>组件初始化后，调用的方法，返回一个地图实例</td><td><code>{ map, BmapGL, instance }</code></td></tr><tr><td>unload</td><td>组件卸载时会调用此方法</td><td>-</td></tr><tr><td>click</td><td>鼠标左键单击事件的回调函数。 当双击时，产生的事件序列为： click click dblclick</td><td>((e: Event) =&gt; void)</td></tr><tr><td>dblclick</td><td>鼠标左键双击事件的回调函数</td><td>((e: Event) =&gt; void)</td></tr><tr><td>mousedown</td><td>鼠标左键在该覆盖物上按下的回调函数</td><td>((e: Event) =&gt; void)</td></tr><tr><td>mouseup</td><td>鼠标左键在该覆盖物上抬起的回调函数</td><td>((e: Event) =&gt; void)</td></tr><tr><td>mouseout</td><td>鼠标指针移出该覆盖物事件的回调函数</td><td>((e: Event) =&gt; void)</td></tr><tr><td>mouseover</td><td>鼠标指针移入该覆盖物事件的回调函数</td><td>((e: Event) =&gt; void)</td></tr><tr><td>remove</td><td>该覆盖物被移除的回调函数</td><td>((e: Event) =&gt; void)</td></tr><tr><td>lineupdate</td><td>覆盖物被编辑后的回调函数</td><td>((e: Event) =&gt; void)</td></tr></tbody></table>',4);function B(v,P,f,q,T,S){const o=e("Demo"),l=e("Badge");return r(),p("div",null,[i,n(o,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E16%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBPolyline%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Apath%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%5B%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.404%2C%20lat%3A%2039.915%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.404%2C%20lat%3A%2039.92%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.41%2C%20lat%3A%2039.92%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.41%2C%20lat%3A%2039.915%20%7D%0A%20%20%20%20%20%20%5D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Estroke-color%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23000%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Astroke-opacity%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E1%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Astroke-weight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E3%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3EenableEditing%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"overlay/polyline","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%20v-bind%3D%22%24attrs%22%20%3Azoom%3D%2216%22%3E%0A%20%20%20%20%3CBPolyline%0A%20%20%20%20%20%20%3Apath%3D%22%5B%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.404%2C%20lat%3A%2039.915%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.404%2C%20lat%3A%2039.92%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.41%2C%20lat%3A%2039.92%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.41%2C%20lat%3A%2039.915%20%7D%0A%20%20%20%20%20%20%5D%22%0A%20%20%20%20%20%20stroke-color%3D%22%23000%22%0A%20%20%20%20%20%20%3Astroke-opacity%3D%221%22%0A%20%20%20%20%20%20%3Astroke-weight%3D%223%22%0A%20%20%20%20%20%20enableEditing%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3E%E5%9C%A8%E5%9C%B0%E5%9B%BE%E4%B8%8A%E7%BB%98%E5%88%B6%E5%8F%AF%E7%BC%96%E8%BE%91%E7%9A%84%E6%8A%98%E7%BA%BF%3C%2Fp%3E%0A"},{default:c(()=>[u]),_:1}),E,t("table",null,[D,t("tbody",null,[h,A,F,t("tr",null,[k,_,m,g,y,t("td",null,[n(l,{type:"tip",text:"^2.1.0"})])])])]),b])}const V=d(C,[["render",B]]);export{N as __pageData,V as default};
