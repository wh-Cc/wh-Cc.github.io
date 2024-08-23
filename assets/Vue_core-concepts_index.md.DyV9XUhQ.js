import{_ as e,c as a,o,a4 as t}from"./chunks/framework.ZkTbufXI.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Vue/core-concepts/index.md","filePath":"Vue/core-concepts/index.md"}'),r={name:"Vue/core-concepts/index.md"},l=t('<p>Vue 3 的响应式系统是其核心特性之一，它允许开发者声明性地描述数据，并自动追踪这些数据的变化，从而更新 DOM。以下是对 Vue 3 响应式系统的几个关键点理解：</p><h2 id="_1-基于-proxy-的响应式系统" tabindex="-1">1. 基于 Proxy 的响应式系统 <a class="header-anchor" href="#_1-基于-proxy-的响应式系统" aria-label="Permalink to &quot;1. 基于 Proxy 的响应式系统&quot;">​</a></h2><ul><li>Vue 3 响应式系统的核心是 <code>Proxy</code>，这是一个 ES6 特性，允许 Vue 创建一个对象的代理，拦截对象属性的访问和修改操作。</li></ul><h2 id="_2-响应式状态的创建" tabindex="-1">2. 响应式状态的创建 <a class="header-anchor" href="#_2-响应式状态的创建" aria-label="Permalink to &quot;2. 响应式状态的创建&quot;">​</a></h2><ul><li><strong><code>reactive</code></strong>: 创建一个响应式对象，其内部属性都是响应式的。</li><li><strong><code>ref</code></strong>: 创建一个响应式的引用，通常用于基本数据类型，如字符串、数字等。</li></ul><h2 id="_3-响应式数据的使用" tabindex="-1">3. 响应式数据的使用 <a class="header-anchor" href="#_3-响应式数据的使用" aria-label="Permalink to &quot;3. 响应式数据的使用&quot;">​</a></h2><ul><li>响应式数据可以在模板中直接使用，Vue 会自动追踪其依赖，并在数据变化时更新 DOM。</li></ul><h2 id="_4-计算属性-computed-properties" tabindex="-1">4. 计算属性（Computed Properties） <a class="header-anchor" href="#_4-计算属性-computed-properties" aria-label="Permalink to &quot;4. 计算属性（Computed Properties）&quot;">​</a></h2><ul><li>使用 <code>computed</code> 创建的属性是基于它们的响应式依赖进行缓存的。只有当依赖项发生变化时，计算属性才会重新计算。</li></ul><h2 id="_5-侦听器-watchers" tabindex="-1">5. 侦听器（Watchers） <a class="header-anchor" href="#_5-侦听器-watchers" aria-label="Permalink to &quot;5. 侦听器（Watchers）&quot;">​</a></h2><ul><li>使用 <code>watch</code> 可以观察和响应 Vue 响应式状态的变化。当被观察的数据变化时，可以执行回调函数。</li></ul><h2 id="_6-副作用-side-effects" tabindex="-1">6. 副作用（Side Effects） <a class="header-anchor" href="#_6-副作用-side-effects" aria-label="Permalink to &quot;6. 副作用（Side Effects）&quot;">​</a></h2><ul><li><code>effect</code> 函数是 Vue 3 中用于执行副作用的基础，它会追踪副作用中使用的响应式状态，并在状态变化时重新执行副作用。</li></ul><h2 id="_7-响应式系统的自动依赖收集" tabindex="-1">7. 响应式系统的自动依赖收集 <a class="header-anchor" href="#_7-响应式系统的自动依赖收集" aria-label="Permalink to &quot;7. 响应式系统的自动依赖收集&quot;">​</a></h2><ul><li>Vue 3 的响应式系统会在组件初始化时自动收集依赖，当响应式状态被访问时，Vue 会记录这个访问操作。</li></ul><h2 id="_8-批量异步更新队列" tabindex="-1">8. 批量异步更新队列 <a class="header-anchor" href="#_8-批量异步更新队列" aria-label="Permalink to &quot;8. 批量异步更新队列&quot;">​</a></h2><ul><li>Vue 3 使用异步队列来处理数据变化和 DOM 更新，这可以避免不必要的重复渲染，并提高性能。</li></ul><h2 id="_9-细粒度的依赖追踪" tabindex="-1">9. 细粒度的依赖追踪 <a class="header-anchor" href="#_9-细粒度的依赖追踪" aria-label="Permalink to &quot;9. 细粒度的依赖追踪&quot;">​</a></h2><ul><li>Vue 3 的响应式系统可以精确地追踪每个响应式状态的依赖关系，这意味着只有真正依赖于变化数据的组件或计算属性会被更新。</li></ul><h2 id="_10-组件的响应式状态" tabindex="-1">10. 组件的响应式状态 <a class="header-anchor" href="#_10-组件的响应式状态" aria-label="Permalink to &quot;10. 组件的响应式状态&quot;">​</a></h2><ul><li>在组件的 <code>setup</code> 函数中定义的响应式状态，如使用 <code>reactive</code> 和 <code>ref</code> 创建的状态，可以在模板、计算属性和侦听器中使用。</li></ul><h2 id="_11-避免使用-this" tabindex="-1">11. 避免使用 <code>this</code> <a class="header-anchor" href="#_11-避免使用-this" aria-label="Permalink to &quot;11. 避免使用 `this`&quot;">​</a></h2><ul><li>在 <code>setup</code> 函数中，Vue 实例的 <code>this</code> 上下文不是直接可用的。需要通过参数或 <code>getCurrentInstance</code> 来访问组件实例。</li></ul><h2 id="_12-响应式系统的局限性" tabindex="-1">12. 响应式系统的局限性 <a class="header-anchor" href="#_12-响应式系统的局限性" aria-label="Permalink to &quot;12. 响应式系统的局限性&quot;">​</a></h2><ul><li>响应式系统不追踪对象属性的添加或删除，也不追踪数组索引的添加、删除或替换。</li></ul><p>理解 Vue 3 的响应式系统对于高效地使用 Vue 进行开发至关重要。它使得状态管理更加直观和声明性，同时提供了强大的性能优化能力。</p>',26),i=[l];function c(d,u,h,s,n,_){return o(),a("div",null,i)}const m=e(r,[["render",c]]);export{f as __pageData,m as default};
