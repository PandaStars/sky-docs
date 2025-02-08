import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,e as p,a as n,f as t}from"./app-6o-IiJuU.js";const o={},c=n("p",null,"比较对象是面向对象编程语言的基本特征。",-1),l=n("p",null,"在本教程中，我们将介绍两种紧密结合的方法：.equals()和.hashCode()。我们将专注于他们彼此的关系，如何正确覆盖他们，以及为什么我们应该同时覆盖两者或两者都不覆盖。",-1),u=t(`<h2 id="_1-equals-方法" tabindex="-1"><a class="header-anchor" href="#_1-equals-方法" aria-hidden="true">#</a> 1..equals()方法</h2><p>默认情况下，<strong>顶级父类Object类定义了.equals()和.hashCode()方法。因此，每个Java类都隐式地拥有这两种方法</strong>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Money</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> amount<span class="token punctuation">;</span>
    <span class="token class-name">String</span> currencyCode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Money</span> income <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Money</span><span class="token punctuation">(</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token string">&quot;USD&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Money</span> expenses <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Money</span><span class="token punctuation">(</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token string">&quot;USD&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> balanced <span class="token operator">=</span> income<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>expenses<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们希望 <code>income.equals（expenses）</code> 返回 true，但随着Money类的当前方法，并不会。</p><p>Object类中equals()的默认实现比较了对象的身份。在我们的示例中，货币类的收入和支出实例有两种不同的身份。因此，将它们与.equals()方法进行比较，返回false。</p><p>要改变这种行为，我们必须覆盖此方法。</p><h3 id="_1-1-覆盖-equals" tabindex="-1"><a class="header-anchor" href="#_1-1-覆盖-equals" aria-hidden="true">#</a> 1.1 覆盖 equals()</h3><p>让我们覆盖.equals()方法，这样它不仅会考虑对象身份，还会考虑两个相关属性的值：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">Money</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token class-name">Money</span> other <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Money</span><span class="token punctuation">)</span>o<span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> currencyCodeEquals <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currencyCode <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> other<span class="token punctuation">.</span>currencyCode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currencyCode <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currencyCode<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>other<span class="token punctuation">.</span>currencyCode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>amount <span class="token operator">==</span> other<span class="token punctuation">.</span>amount <span class="token operator">&amp;&amp;</span> currencyCodeEquals<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上文，我们有三个条件来检查Money实例是否与任何其他对象相同。</p><p>首先，如果对象与自身相等，它将返回true。 其次，如果它不是金钱的实例，它将返回false。 最后，我们将它与另一个Money类实例的属性进行比较。详细地说，我们确保比较类的所有属性都与比较类的属性相匹配。</p><h3 id="_1-2-equals方法约定" tabindex="-1"><a class="header-anchor" href="#_1-2-equals方法约定" aria-hidden="true">#</a> 1.2 equals方法约定</h3><p><strong>Java SE定义了我们实现的equals()方法必须履行的约定</strong>。简而言之，大多数标准遵循常识，但我们可以定义equals()方法必须遵循的形式规则。它必须是：</p><ul><li>反射：一个物体必须等于自己</li><li>对称：x.equals(y)必须返回与y.equals(x)相同的结果</li><li>传递：如果x.equals(y)和y.equals(z)，那么也x.equals(z)</li><li>一致：仅当.equals()中包含的属性发生变化时，.equals()的值才应更改（不允许随机性）</li></ul><p>我们可以在Java SE Docs中查找Object类的确切标准。</p><p><br><br><br><br><br><br></p><h3 id="_1-3-继承类可能违反equals方法的对称性" tabindex="-1"><a class="header-anchor" href="#_1-3-继承类可能违反equals方法的对称性" aria-hidden="true">#</a> 1.3 继承类可能违反equals方法的对称性</h3><p>.equals()的标准是常识性的，当我们子类扩展了一个覆盖了.equals()方法的类时，有可能违反.equals()约定。让我们考虑一个扩展我们货币类的凭证类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">WrongVoucher</span> <span class="token keyword">extends</span> <span class="token class-name">Money</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> store<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">WrongVoucher</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token class-name">WrongVoucher</span> other <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">WrongVoucher</span><span class="token punctuation">)</span>o<span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> currencyCodeEquals <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currencyCode <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> other<span class="token punctuation">.</span>currencyCode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
          <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currencyCode <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currencyCode<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>other<span class="token punctuation">.</span>currencyCode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> storeEquals <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>store <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> other<span class="token punctuation">.</span>store <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
          <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>store <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>other<span class="token punctuation">.</span>store<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>amount <span class="token operator">==</span> other<span class="token punctuation">.</span>amount <span class="token operator">&amp;&amp;</span> currencyCodeEquals <span class="token operator">&amp;&amp;</span> storeEquals<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// other methods</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>乍一看，凭证类及其对.equals()的覆盖似乎是正确的。只要我们将金钱与金钱或代金券与代金券进行比较，两种.equals()方法的行为都是正确的。但是，如果我们比较这两个物体，会发生什么：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Money</span> cash <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Money</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">,</span> <span class="token string">&quot;USD&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">WrongVoucher</span> voucher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WrongVoucher</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">,</span> <span class="token string">&quot;USD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Amazon&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

voucher<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>cash<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">false</span> <span class="token comment">// As expected.</span>
cash<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>voucher<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">true</span> <span class="token comment">// That&#39;s wrong.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，我们违反了对称性标准。</p><h3 id="_1-4-固定-equals-与组成对称" tabindex="-1"><a class="header-anchor" href="#_1-4-固定-equals-与组成对称" aria-hidden="true">#</a> 1.4 固定 equals() 与组成对称</h3><p><strong>为了避免犯错，我们应该偏爱将类组成另一个类的一部分而不是继承。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Voucher</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Money</span> value<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> store<span class="token punctuation">;</span>

    <span class="token class-name">Voucher</span><span class="token punctuation">(</span><span class="token keyword">int</span> amount<span class="token punctuation">,</span> <span class="token class-name">String</span> currencyCode<span class="token punctuation">,</span> <span class="token class-name">String</span> store<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Money</span><span class="token punctuation">(</span>amount<span class="token punctuation">,</span> currencyCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>store <span class="token operator">=</span> store<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">Voucher</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token class-name">Voucher</span> other <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Voucher</span><span class="token punctuation">)</span> o<span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> valueEquals <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> other<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
          <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>other<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> storeEquals <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>store <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> other<span class="token punctuation">.</span>store <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
          <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>store <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>other<span class="token punctuation">.</span>store<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> valueEquals <span class="token operator">&amp;&amp;</span> storeEquals<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// other methods</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在.equals()将按照约定要求对称地工作。</p><p><br><br><br><br><br><br></p><h2 id="_2-hashcode-方法" tabindex="-1"><a class="header-anchor" href="#_2-hashcode-方法" aria-hidden="true">#</a> 2..hashCode()方法</h2><p>**Java SE还定义了.hashCode()方法的约定。**仔细研究这份约定会发现.hashCode()和.equals()的相关性有多密切。</p><p>.hashCode()合同中的所有三个标准都以某种方式提到了.equals()方法：</p><ul><li>内部一致性：只有当 <code>equals（）</code>中的属性发生变化时，<code>hashCode（）</code>的值才可能发生变化</li><li>相等一致性：彼此相等的对象必须返回相同的哈希代码</li><li>碰撞：不相等的对象可能具有相同的哈希代码</li></ul><h3 id="_2-1-违反hashcode-和equals-的一致性" tabindex="-1"><a class="header-anchor" href="#_2-1-违反hashcode-和equals-的一致性" aria-hidden="true">#</a> 2.1 违反hashCode()和equals()的一致性</h3><p>.hashCode()合同的第二个标准有一个重要的结果：<strong>如果我们覆盖equals()，我们也必须覆盖hashCode()</strong>。这是迄今为止对equals()和hashCode()方法约定最普遍的违反方式。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Team</span> <span class="token punctuation">{</span>

    <span class="token class-name">String</span> city<span class="token punctuation">;</span>
    <span class="token class-name">String</span> department<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// implementation</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Team类仅覆盖等于（），但它仍然隐式使用Object类中定义的hashCode（）的默认实现。因此，它将为类的每个实例返回不同的hashCode()，并违反第二条规则。</p><p>现在，如果我们创建两个团队对象，都带有城市“纽约”和部门“营销”，它们将是相等的，但它们将返回不同的哈希代码。</p><h3 id="_2-2-带有不一致的hashcode-的hashmap-key" tabindex="-1"><a class="header-anchor" href="#_2-2-带有不一致的hashcode-的hashmap-key" aria-hidden="true">#</a> 2.2 带有不一致的hashCode（）的HashMap key</h3><p>但为什么我们 Team 的约定违规是个问题？好吧，当涉及一些基于哈希的集合时，麻烦就开始了。让我们尝试使用我们的 Team类作为HashMap的key：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Team</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> leaders <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
leaders<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Team</span><span class="token punctuation">(</span><span class="token string">&quot;New York&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Anne&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
leaders<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Team</span><span class="token punctuation">(</span><span class="token string">&quot;Boston&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Brian&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
leaders<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Team</span><span class="token punctuation">(</span><span class="token string">&quot;Boston&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;marketing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Charlie&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Team</span> myTeam <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Team</span><span class="token punctuation">(</span><span class="token string">&quot;New York&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> myTeamLeader <span class="token operator">=</span> leaders<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>myTeam<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们希望myTeamLeader返回“Anne”，但以当前代码，它不会。</p><p>如果我们想将Team类的实例用作HashMap键，我们必须覆盖hashCode()方法，使其遵守合同；相等的对象返回相同的hashCode。</p><p>让我们看一个实现示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>city <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> <span class="token number">31</span> <span class="token operator">*</span> result <span class="token operator">+</span> city<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>department <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> <span class="token number">31</span> <span class="token operator">*</span> result <span class="token operator">+</span> department<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此更改后，leaders.get（myTeam）按预期返回“Anne”。</p><p><br><br><br><br><br><br></p><h2 id="_3-覆盖-equals-和-hashcode" tabindex="-1"><a class="header-anchor" href="#_3-覆盖-equals-和-hashcode" aria-hidden="true">#</a> 3.覆盖.equals()和.hashCode()？</h2><p><strong>一般来说，我们希望同时覆盖.equals()和.hashCode()，或者两者都不覆盖。</strong></p><p>我们刚刚在第2节中看到，如果我们忽视这条规则，会带来不必要的后果。</p><p>对于实体类，对于具有内在标识的对象，默认实现通常是有意义的。</p><p>然而，对于值对象，我们通常更喜欢基于其属性的相等。因此，我们希望覆盖.equals()和.hashCode()。</p><p>记住我们第1节中的货币类：55美元等于55美元，即使它们是两个不同的实例。</p><h2 id="_4-覆盖帮助" tabindex="-1"><a class="header-anchor" href="#_4-覆盖帮助" aria-hidden="true">#</a> 4.覆盖帮助</h2><p>我们通常不会手动编写这些方法的实现。正如我们所看到的，稍不注意就有相当多的陷阱。</p><p><strong>常见的选择是让我们的IDE代码编辑器帮忙生成.equals()和.hashCode()方法。</strong></p><p><code>Apache Commons Lang</code>和<code>Google Guava</code>有辅助类，可以使用这两种方法简化写作。</p><p><code>Lombok</code>项目还提供了 <code>@EqualsAndHashCode</code> 注释。</p><h2 id="_5-验证约定" tabindex="-1"><a class="header-anchor" href="#_5-验证约定" aria-hidden="true">#</a> 5.验证约定</h2><p>如果我们想检查我们的实现是否符合Java SE合同和最佳实践，我们可以使用EqualsVerifier库。</p><p>让我们添加EqualsVerifier Maven测试依赖项：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>nl.jqno.equalsverifier<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>equalsverifier<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.15.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">equalsHashCodeContracts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">EqualsVerifier</span><span class="token punctuation">.</span><span class="token function">forClass</span><span class="token punctuation">(</span><span class="token class-name">Team</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>值得注意的是，EqualsVerifier同时测试equals()和hashCode()方法。</p><p>**EqualsVerifier比Java SE合同严格得多。**例如，它确保我们的方法不能抛出NullPointerException。此外，它强制要求两种方法或类本身都是最终的。</p><p>重要的是要意识到，<strong>EqualsVerifier的默认配置只允许不可变的字段。</strong> 这是比Java SE合同允许的更严格的检查。它坚持域驱动设计的建议，使价值对象不可变。</p><p>如果我们发现一些内置约束是不必要的，我们可以在EqualsVerifier调用中添加一个抑制（Warning.SPECIFIC_WARNING）。</p>`,66);function i(r,k){return a(),e("div",null,[c,l,p(" more "),u])}const m=s(o,[["render",i],["__file","19 java equals and hashcode.html.vue"]]);export{m as default};
