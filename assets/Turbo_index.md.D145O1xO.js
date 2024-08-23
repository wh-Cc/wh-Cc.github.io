import{_ as a,c as s,o as n,a4 as p}from"./chunks/framework.ZkTbufXI.js";const m=JSON.parse('{"title":"turbo","description":"","frontmatter":{},"headers":[],"relativePath":"Turbo/index.md","filePath":"Turbo/index.md"}'),e={name:"Turbo/index.md"},t=p(`<h1 id="turbo" tabindex="-1">turbo <a class="header-anchor" href="#turbo" aria-label="Permalink to &quot;turbo&quot;">​</a></h1><p>Turborepo 是一个用于 JavaScript 和 TypeScript 代码库的高性能构建系统。它专为扩展 monorepos 而设计，并且还可以更快地处理单包工作区中的工作流程。</p><h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npx create-turbo@latest</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>| package.json</span></span>
<span class="line"><span>| pnpm-lock.yaml</span></span>
<span class="line"><span>| turbo.json</span></span>
<span class="line"><span>| apps</span></span>
<span class="line"><span>    |-docs</span></span>
<span class="line"><span>        |-package.json</span></span>
<span class="line"><span>    |-web</span></span>
<span class="line"><span>|packages</span></span></code></pre></div><h1 id="_1-为包声明目录-指定pnpm工作区" tabindex="-1">1.为包声明目录 指定pnpm工作区 <a class="header-anchor" href="#_1-为包声明目录-指定pnpm工作区" aria-label="Permalink to &quot;1.为包声明目录 指定pnpm工作区&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>packages:</span></span>
<span class="line"><span>  - &quot;apps/*&quot;</span></span>
<span class="line"><span>  - &quot;packages/*&quot;</span></span></code></pre></div><p>使用此配置，或目录中具有package.json的每个目录都将被视为一个包。appspackages</p><h1 id="在turborepo管理的monorepo项目中-每个包-package-的目录下必须包含一个package-json文件。这个文件对于包管理器来说是很重要的-因为它定义了包的元数据、依赖关系、脚本和其他配置" tabindex="-1">在Turborepo管理的Monorepo项目中，每个包（package）的目录下必须包含一个<code>package.json</code>文件。这个文件对于包管理器来说是很重要的，因为它定义了包的元数据、依赖关系、脚本和其他配置 <a class="header-anchor" href="#在turborepo管理的monorepo项目中-每个包-package-的目录下必须包含一个package-json文件。这个文件对于包管理器来说是很重要的-因为它定义了包的元数据、依赖关系、脚本和其他配置" aria-label="Permalink to &quot;在Turborepo管理的Monorepo项目中，每个包（package）的目录下必须包含一个\`package.json\`文件。这个文件对于包管理器来说是很重要的，因为它定义了包的元数据、依赖关系、脚本和其他配置&quot;">​</a></h1><h1 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h1><h2 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h2><p>用于标识包。它应该在您的工作空间中是唯一的</p><h2 id="script" tabindex="-1">script <a class="header-anchor" href="#script" aria-label="Permalink to &quot;script&quot;">​</a></h2><p>该字段用于定义可以在包的上下文中运行的脚本。Turborepo 将使用这些脚本的名称来标识要在包中运行的脚本</p><h2 id="export" tabindex="-1">export <a class="header-anchor" href="#export" aria-label="Permalink to &quot;export&quot;">​</a></h2><p>用于指定想要使用该包的其他包的入口点。当您想要在另一个包中使用一个包中的代码时，您将从该入口点导入。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>./packages/math/package.json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;exports&quot;: {</span></span>
<span class="line"><span>    &quot;.&quot;: &quot;./dist/constants.ts&quot;,</span></span>
<span class="line"><span>    &quot;./add&quot;: &quot;./dist/add.ts&quot;,</span></span>
<span class="line"><span>    &quot;./subtract&quot;: &quot;./dist/subtract.ts&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这将允许您从包中导入和函数，如下所示：addsubtract@repo/mat</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>./apps/my-app/src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { GRAVITATIONAL_CONSTANT, SPEED_OF_LIGHT } from &#39;@repo/math&#39;;</span></span>
<span class="line"><span>import { add } from &#39;@repo/math/add&#39;;</span></span>
<span class="line"><span>import { subtract } from &#39;@repo/math/subtract&#39;;</span></span></code></pre></div><p>使用这种方式提供的导出具有以下三个主要优势： 避免使用桶文件（Barrel Files）：桶文件是在同一包中重新导出其他文件的文件，为整个包创建了一个入口点。虽然它们看起来可能很方便，但对于编译器和打包器来说处理起来困难，并且可能导致性能问题。 更强大的功能：与 <code>main</code> 字段相比，<code>exports</code> 还具有其他强大的功能，比如条件导出（Conditional Exports）。总的来说，我们建议尽可能使用 <code>exports</code> 而不是 <code>main</code>，因为 <code>exports</code> 是一个更现代的选择。 IDE自动补全：通过使用 <code>exports</code> 指定包的入口点，你可以确保代码编辑器能够为包的导出提供自动补全功能。</p><h2 id="imports" tabindex="-1">imports <a class="header-anchor" href="#imports" aria-label="Permalink to &quot;imports&quot;">​</a></h2><p>提供了一种创建到包中其他模块的子路径的方法。您可以将这些视为访问包中其他模块的“快捷方式”。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>./packages/ui/package.json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;imports&quot;: {</span></span>
<span class="line"><span>    &quot;#*&quot;: &quot;./*&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>./packages/math/src/add.ts</span></span>
<span class="line"><span>export const add = (a: number, b: number) =&gt; a + b;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>./packages/math/src/multiply.ts</span></span>
<span class="line"><span>import { add } from &quot;#add&quot;;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>export const multiply = (a: number, b: number) =&gt; {</span></span>
<span class="line"><span>    let result = 0;</span></span>
<span class="line"><span>    for (let i = 0; i &lt; b; i++) {</span></span>
<span class="line"><span>        result = add(result, a);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return result;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,23),o=[t];function l(i,c,r,d,u,h){return n(),s("div",null,o)}const g=a(e,[["render",l]]);export{m as __pageData,g as default};
