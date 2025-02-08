import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,f as e}from"./app-6o-IiJuU.js";const t={},p=e(`<p>INSERT 语句用于填充表的行数据：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> weather <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;San Francisco&#39;</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token string">&#39;1994-11-27&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请注意，所有数据类型都使用相当明显的 input 格式。<strong>不是简单数值的常量通常必须用单引号 （&#39;） 括起来</strong></p><p>点类型需要坐标对作为输入，如下所示：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> cities <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;San Francisco&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;(-194.0, 53.0)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以下这种写法，可以自由选择要填充数据的列：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> weather <span class="token punctuation">(</span>city<span class="token punctuation">,</span> temp_lo<span class="token punctuation">,</span> temp_hi<span class="token punctuation">,</span> prcp<span class="token punctuation">,</span> <span class="token keyword">date</span><span class="token punctuation">)</span>
    <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;San Francisco&#39;</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">57</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token string">&#39;1994-11-29&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>PGSQL 还可以使用 COPY 从纯文本文件加载大量数据。这通常更快，因为 COPY 命令针对此应用程序进行了优化，但灵活性低于 INSERT：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>COPY weather <span class="token keyword">FROM</span> <span class="token string">&#39;/home/user/weather.txt&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，源文件的文件名必须在运行后端进程的机器上可用，而不是在客户端上可用，因为后端进程直接读取文件。</p>`,10),o=[p];function c(l,i){return n(),a("div",null,o)}const d=s(t,[["render",c],["__file","2.4 Populating a Table With Rows.html.vue"]]);export{d as default};
