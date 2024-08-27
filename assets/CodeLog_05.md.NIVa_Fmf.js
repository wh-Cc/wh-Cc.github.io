import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.ZkTbufXI.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"CodeLog/05.md","filePath":"CodeLog/05.md"}'),t={name:"CodeLog/05.md"},e=n(`<p>java 实现 23 种设计模式是一个庞大的话题，因为每种设计模式都有其特定的用途和实现方式。设计模式通常用于解决在软件设计中反复出现的问题。以下是一些常见的设计模式以及它们在 java 中的基本实现：</p><h2 id="_1-单例模式-singleton" tabindex="-1">1. <strong>单例模式（Singleton）</strong>： <a class="header-anchor" href="#_1-单例模式-singleton" aria-label="Permalink to &quot;1. **单例模式（Singleton）**：&quot;">​</a></h2><p>确保一个类只有一个实例，并提供一个全局访问点。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> instance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  static</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.instance) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.instance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.instance;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 私有化构造函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_2-工厂模式-factory" tabindex="-1">2. <strong>工厂模式（Factory）</strong>： <a class="header-anchor" href="#_2-工厂模式-factory" aria-label="Permalink to &quot;2. **工厂模式（Factory）**：&quot;">​</a></h2><p>定义一个用于创建对象的接口，让子类决定实例化哪一个类。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Rectangle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Square</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ShapeFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  static</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createShape</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;rectangle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Rectangle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;square&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Square</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_3-抽象工厂模式-abstract-factory" tabindex="-1">3. <strong>抽象工厂模式（Abstract Factory）</strong>： <a class="header-anchor" href="#_3-抽象工厂模式-abstract-factory" aria-label="Permalink to &quot;3. **抽象工厂模式（Abstract Factory）**：&quot;">​</a></h2><p>创建相关或依赖对象的家族，而不需明确指定具体类。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 抽象产品和具体产品...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 抽象工厂实现</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AbstractFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ConcreteFactory</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AbstractFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><h2 id="_4-建造者模式-builder" tabindex="-1">4. <strong>建造者模式（Builder）</strong>： <a class="header-anchor" href="#_4-建造者模式-builder" aria-label="Permalink to &quot;4. **建造者模式（Builder）**：&quot;">​</a></h2><p>构建一个复杂的对象，并允许按步骤构造。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setPart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">part</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Builder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.product </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setPart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">part</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.product.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setPart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(part);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.product;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_5-原型模式-prototype" tabindex="-1">5. <strong>原型模式（Prototype）</strong>： <a class="header-anchor" href="#_5-原型模式-prototype" aria-label="Permalink to &quot;5. **原型模式（Prototype）**：&quot;">​</a></h2><p>通过拷贝现有的实例创建新的实例，而不是通过新建。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.clone </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_6-适配器模式-adapter" tabindex="-1">6. <strong>适配器模式（Adapter）</strong>： <a class="header-anchor" href="#_6-适配器模式-adapter" aria-label="Permalink to &quot;6. **适配器模式（Adapter）**：&quot;">​</a></h2><p>允许对象间的接口不兼容问题通过一个“适配器”解决。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Adaptee</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  specificRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Adapter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">adaptee</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    super</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.adaptee </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> adaptee;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.adaptee.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">specificRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_7-桥接模式-bridge" tabindex="-1">7. <strong>桥接模式（Bridge）</strong>： <a class="header-anchor" href="#_7-桥接模式-bridge" aria-label="Permalink to &quot;7. **桥接模式（Bridge）**：&quot;">​</a></h2><p>将抽象部分与其实现部分分离，使它们可以独立地变化。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Implementor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  operation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ConcreteImplementorA</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Implementor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ConcreteImplementorB</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Implementor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Abstraction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">implementor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.implementor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> implementor;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  operation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.implementor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">operation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_8-组合模式-composite" tabindex="-1">8. <strong>组合模式（Composite）</strong>： <a class="header-anchor" href="#_8-组合模式-composite" aria-label="Permalink to &quot;8. **组合模式（Composite）**：&quot;">​</a></h2><p>允许将对象组合成树形结构以表示“部分-整体”的层次结构。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  operation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Leaf</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Composite</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  remove</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  operation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_9-装饰器模式-decorator" tabindex="-1">9. <strong>装饰器模式（Decorator）</strong>： <a class="header-anchor" href="#_9-装饰器模式-decorator" aria-label="Permalink to &quot;9. **装饰器模式（Decorator）**：&quot;">​</a></h2><p>动态地给一个对象添加额外的职责。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  operation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Decorator</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    super</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.component </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> component;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  operation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.component.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">operation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 额外的职责</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_10-外观模式-facade" tabindex="-1">10. <strong>外观模式（Facade）</strong>： <a class="header-anchor" href="#_10-外观模式-facade" aria-label="Permalink to &quot;10. **外观模式（Facade）**：&quot;">​</a></h2><pre><code>提供一个统一的接口，用来访问子系统中的一群接口。

\`\`\`java
class SubsystemOne { /* ... */ }
class SubsystemTwo { /* ... */ }

class Facade {
  operation() {
    new SubsystemOne().operation();
    new SubsystemTwo().operation();
  }
}
\`\`\`
</code></pre><h2 id="_11-享元模式-flyweight" tabindex="-1">11. <strong>享元模式（Flyweight）</strong>： <a class="header-anchor" href="#_11-享元模式-flyweight" aria-label="Permalink to &quot;11. **享元模式（Flyweight）**：&quot;">​</a></h2><pre><code>通过共享来高效地支持大量细粒度的对象。

\`\`\`java
class Flyweight {
  operation(state) { /* ... */ }
}
\`\`\`
</code></pre><h2 id="_12-代理模式-proxy" tabindex="-1">12. <strong>代理模式（Proxy）</strong>： <a class="header-anchor" href="#_12-代理模式-proxy" aria-label="Permalink to &quot;12. **代理模式（Proxy）**：&quot;">​</a></h2><pre><code>为另一个对象提供一个代替或占位符，以控制对它的访问。

\`\`\`java
class Subject {
  request() { /* ... */ }
}

class Proxy {
  constructor(realSubject) {
    this.realSubject = realSubject;
  }

  request() {
    this.realSubject.request();
    // 额外的逻辑
  }
}
\`\`\`
</code></pre><h2 id="_13-链模式-chain-of-responsibility" tabindex="-1">13. <strong>链模式（Chain of Responsibility）</strong>： <a class="header-anchor" href="#_13-链模式-chain-of-responsibility" aria-label="Permalink to &quot;13. **链模式（Chain of Responsibility）**：&quot;">​</a></h2><pre><code>使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系。

\`\`\`java
class Handler {
  constructor(next) {
    this.next = next;
  }

  handleRequest(request) {
    if (this.next) {
      this.next.handleRequest(request);
    }
  }
}
\`\`\`
</code></pre><h2 id="_14-命令模式-command" tabindex="-1">14. <strong>命令模式（Command）</strong>： <a class="header-anchor" href="#_14-命令模式-command" aria-label="Permalink to &quot;14. **命令模式（Command）**：&quot;">​</a></h2><pre><code>将请求封装为一个对象，从而可以使用不同的请求、队列或日志请求。

\`\`\`java
class Command {
  execute() { /* ... */ }
}

class Invoker {
  constructor() {
    this.commands = [];
  }

  addCommand(command) {
    this.commands.push(command);
  }

  executeCommands() {
    this.commands.forEach(command =&gt; command.execute());
  }
}
\`\`\`
</code></pre><h2 id="_15-解释器模式-interpreter" tabindex="-1">15. <strong>解释器模式（Interpreter）</strong>： <a class="header-anchor" href="#_15-解释器模式-interpreter" aria-label="Permalink to &quot;15. **解释器模式（Interpreter）**：&quot;">​</a></h2><pre><code>定义一个语言的文法，并且建立一个解释器，这个解释器可以解释该语言中的句子。

\`\`\`java
// 抽象表达式和具体表达式...
// 环境和解释器实现
class AbstractExpression { /* ... */ }
class ConcreteExpression extends AbstractExpression { /* ... */ }
class Interpreter { /* ... */ }
\`\`\`
</code></pre><h2 id="_16-迭代器模式-iterator" tabindex="-1">16. <strong>迭代器模式（Iterator）</strong>： <a class="header-anchor" href="#_16-迭代器模式-iterator" aria-label="Permalink to &quot;16. **迭代器模式（Iterator）**：&quot;">​</a></h2><pre><code>顺序访问一个聚合对象中的各个元素，不暴露其内部的表示。

\`\`\`java
class Aggregate {
  [Symbol.iterator]() {
    let index = 0;
    const items = this.getItems();
    return {
      next() {
        if (index &lt; items.length) {
          return { value: items[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }

  getItems() {
    // 返回聚合中的所有项
  }
}
\`\`\`
</code></pre><h2 id="_17-中介者模式-mediator" tabindex="-1">17. <strong>中介者模式（Mediator）</strong>： <a class="header-anchor" href="#_17-中介者模式-mediator" aria-label="Permalink to &quot;17. **中介者模式（Mediator）**：&quot;">​</a></h2><pre><code>用一个中介对象来封装一系列的对象交互。

\`\`\`java
class Mediator {
  constructor() {
    this.colleagues = [];
  }

  addColleague(colleague) {
    this.colleagues.push(colleague);
  }

  notify(colleague, event) {
    this.colleagues.forEach(c =&gt; {
      if (c !== colleague) {
        c.update(event);
      }
    });
  }
}
\`\`\`
</code></pre><h2 id="_18-备忘录模式-memento" tabindex="-1">18. <strong>备忘录模式（Memento）</strong>： <a class="header-anchor" href="#_18-备忘录模式-memento" aria-label="Permalink to &quot;18. **备忘录模式（Memento）**：&quot;">​</a></h2><pre><code>在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。

\`\`\`java
class Memento {
  constructor(state) {
    this.state = state;
  }
}

class Originator {
  constructor(state) {
    this.state = state;
  }

  saveState() {
    return new Memento(this.state);
  }

  getState(memento) {
    this.state = memento.state;
  }
}
\`\`\`
</code></pre><h2 id="_19-观察者模式-observer" tabindex="-1">19. <strong>观察者模式（Observer）</strong>： <a class="header-anchor" href="#_19-观察者模式-observer" aria-label="Permalink to &quot;19. **观察者模式（Observer）**：&quot;">​</a></h2><pre><code>定义对象间的一种一对多的依赖关系，当一个对象改变状态时，所有依赖于它的对象都得到通知并自动更新。

\`\`\`java
class Subject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    this.observers.push(observer);
  }

  notify(message) {
    this.observers.forEach(observer =&gt; observer.update(message));
  }
}

class Observer {
  update(message) {
    // 更新逻辑
  }
}
\`\`\`
</code></pre><h2 id="_20-状态模式-state" tabindex="-1">20. <strong>状态模式（State）</strong>： <a class="header-anchor" href="#_20-状态模式-state" aria-label="Permalink to &quot;20. **状态模式（State）**：&quot;">​</a></h2><pre><code>允许一个对象在其内部状态发生改变时改变其行为。

\`\`\`java
class State {
  handle() { /* ... */ }
}

class ConcreteStateA extends State { /* ... */ }
class ConcreteStateB extends State { /* ... */ }

class Context {
  constructor(state) {
    this.state = state;
  }

  setState(state) {
    this.state = state;
  }

  request() {
    this.state.handle();
  }
}
\`\`\`
</code></pre><h2 id="_21-策略模式-strategy" tabindex="-1">21. <strong>策略模式（Strategy）</strong>： <a class="header-anchor" href="#_21-策略模式-strategy" aria-label="Permalink to &quot;21. **策略模式（Strategy）**：&quot;">​</a></h2><pre><code>定义一系列算法，把它们一个个封装起来，并使它们可以相互替换。

\`\`\`java
class Strategy {
  execute() { /* ... */ }
}

class ConcreteStrategyA extends Strategy { /* ... */ }
class ConcreteStrategyB extends Strategy { /* ... */ }

class Context {
 
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy() {
        this.strategy.execute();
    }
}
\`\`\`
</code></pre><h2 id="_22-模板方法模式-template-method" tabindex="-1">22. <strong>模板方法模式（Template Method）</strong>： <a class="header-anchor" href="#_22-模板方法模式-template-method" aria-label="Permalink to &quot;22. **模板方法模式（Template Method）**：&quot;">​</a></h2><pre><code>定义一个操作中的算法的框架，而将一些步骤的执行延迟到子类中。

\`\`\`java
class AbstractClass {
  templateMethod() {
    this.baseStep();
    this.hook();
    this.finalStep();
  }

  baseStep() { /* ... */ }
  finalStep() { /* ... */ }
  hook() { }
}

class ConcreteClass extends AbstractClass {
  baseStep() { /* ... */ }
  finalStep() { /* ... */ }
  hook() { /* ... */ }
}
\`\`\`
</code></pre><h2 id="_23-访问者模式-visitor" tabindex="-1">23. <strong>访问者模式（Visitor）</strong>： <a class="header-anchor" href="#_23-访问者模式-visitor" aria-label="Permalink to &quot;23. **访问者模式（Visitor）**：&quot;">​</a></h2><pre><code>为一个对象结构（如组合结构）增加新能力。

\`\`\`java
class Element {
  accept(visitor) {
    visitor.visit(this);
  }
}

class ConcreteElementA extends Element { /* ... */ }
class ConcreteElementB extends Element { /* ... */ }

class Visitor {
  visit(element) {
    // 访问逻辑
  }
}

class ConcreteVisitor extends Visitor {
  visitConcreteElementA(element) {
    // 访问逻辑
  }

  visitConcreteElementB(element) {
    // 访问逻辑
  }
}
\`\`\`
</code></pre><p>请注意，这些只是每种设计模式的基本实现示例。在实际应用中，你可能需要根据具体需求调整和扩展这些模式。每种模式都有其适用场景和优缺点，合理运用可以提高代码的灵活性和可维护性。</p>`,57),h=[e];function l(p,k,r,d,E,o){return a(),i("div",null,h)}const y=s(t,[["render",l]]);export{g as __pageData,y as default};
