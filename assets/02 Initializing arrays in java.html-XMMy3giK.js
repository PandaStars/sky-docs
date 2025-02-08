import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as p,c as t,e,a as n,b as a,f as o}from"./app-6o-IiJuU.js";const c={},u=n("p",null,[a("数组是一种数据结构，它允许我们"),n("strong",null,"存储和作相同数据类型的元素集合。数组具有固定大小，在初始化期间确定，在运行时无法更改"),a("。")],-1),l=o(`<h2 id="_1-什么是数组" tabindex="-1"><a class="header-anchor" href="#_1-什么是数组" aria-hidden="true">#</a> 1.什么是数组</h2><p>在 Java 中，数组是可以存储相同数据类型的多个元素的对象。我们可以通过索引访问数组中的所有元素，索引是从零开始的数字位置。此外，数组的长度表示它可以容纳的元素总数：</p><p><strong>如果我们尝试访问数组有效索引范围之外的元素，它会引发 ArrayIndexOutOfBoundsException。</strong></p><h2 id="_2-声明和初始化一维数组" tabindex="-1"><a class="header-anchor" href="#_2-声明和初始化一维数组" aria-hidden="true">#</a> 2.声明和初始化一维数组</h2><p>我们可以通过指定数组的数据类型，后跟方括号和数组名称来轻松声明数组：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> anArray<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此外，我们<strong>必须初始化一个数组才能使用它</strong>。初始化涉及使用 new 关键字分配内存并指定数组长度：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化后，我们可以使用索引为各个元素赋值，也可以使用元素的索引来检索元素值：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>numbers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> numbers<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>值得注意的是，数组的长度始终是固定的，并且在初始化后无法扩展。 <br><br><br><br></p><h3 id="_2-声明未知大小的数组" tabindex="-1"><a class="header-anchor" href="#_2-声明未知大小的数组" aria-hidden="true">#</a> 2.声明未知大小的数组</h3><p>当我们声明一个数组时，不必要知道大小。我们可以将数组赋值为 null 或空数组</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> numbers <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> numbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是我们在初始化它时需要知道它的大小，因为 Java 虚拟机必须为其保留连续的内存块。 如果我们想调整数组的大小，我们可以通过创建一个更大大小的数组并将之前的数组元素复制到新数组来实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> newSize <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// New desired size</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>newSize<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Copy elements from the old array to the new array</span>
<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>numbers<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> newArray<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> numbers<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

numbers <span class="token operator">=</span> newArray <span class="token comment">// reference to new array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ArrayList 在内部使用数组和 System.arrayCopy（） 来支持动态调整大小。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// we can add elements dynamically without specifying the size</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> numbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-数组元素的默认值" tabindex="-1"><a class="header-anchor" href="#_3-数组元素的默认值" aria-hidden="true">#</a> 3.数组元素的默认值</h3><p>初始化后，将根据数组的数据类型自动为数组的元素分配默认值。这些值表示数组元素在我们显式分配任何值之前的初始状态。</p><p>默认情况下，int、short、long、float 和 double 数据类型的数组将所有元素设置为零：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">assertArrayEquals</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> array<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，对于布尔数组，所有元素的默认值为 false：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">assertArrayEquals</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> array<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，对于对象类型的数组（如 String），所有元素的默认值都设置为 null：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">assertArrayEquals</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> array<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br><br><br></p><h2 id="_3-数组的初始化" tabindex="-1"><a class="header-anchor" href="#_3-数组的初始化" aria-hidden="true">#</a> 3.数组的初始化</h2><p>让我们看几组数组初始化的示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> brand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;Toyota&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Mercedes&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;BMW&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Volkswagen&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Skoda&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-向数组添加值" tabindex="-1"><a class="header-anchor" href="#_4-向数组添加值" aria-hidden="true">#</a> 4.向数组添加值</h2><p>java.util.Arrays 类有几个名为 fill（） 的方法，它们接受不同类型的参数并使用相同的值填充整个数组：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">long</span> array<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">long</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法还有几种选择，可将数组的给定范围设置为特定值：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>fill（） 方法分别接受初始化的数组、开始填充的索引、结束填充的索引（不包括）和值本身作为参数。</p><p>还有一种方法是 Arrays.setAll（）使用生成器函数设置数组的所有元素。当我们需要将遵循特定模式或逻辑的值添加到数组中时，此方法非常有用。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> numbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">setAll</span><span class="token punctuation">(</span>numbers<span class="token punctuation">,</span> i <span class="token operator">-&gt;</span> i <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">assertArrayEquals</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">,</span> numbers<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-复制数组" tabindex="-1"><a class="header-anchor" href="#_5-复制数组" aria-hidden="true">#</a> 5.复制数组</h2><p>方法 Arrays.copyOf（） 通过从现有数组中复制元素来创建新数组。该方法具有许多重载，这些重载接受不同类型的参数。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> copy <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意：</p><ul><li>该方法接受两个参数，源数组和要创建的新数组的所需长度。</li><li>如果长度大于要复制的数组的长度，则额外的元素将使用其类型的默认值进行初始化。</li><li>如果源数组尚未初始化，则引发 NullPointerException。</li></ul><p>Apache Commons Lang 3 中的 ArrayUtils.clone（） API，它通过创建另一个数组的直接副本来初始化一个数组：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> copy <span class="token operator">=</span> <span class="token class-name">ArrayUtils</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-声明和初始化二维数组" tabindex="-1"><a class="header-anchor" href="#_6-声明和初始化二维数组" aria-hidden="true">#</a> 6.声明和初始化二维数组</h2><p>通过指定两组方括号来声明一个 int 数据类型的二维数组。让我们初始化数组并指定行数和列数：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> matrix <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>
matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
matrix<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">;</span>
matrix<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">70</span><span class="token punctuation">;</span>
matrix<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">;</span>
matrix<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">90</span><span class="token punctuation">;</span>
matrix<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以将其视为具有 2 行和 5 列的数组。</p><h2 id="_7-使用stream-api初始化数组" tabindex="-1"><a class="header-anchor" href="#_7-使用stream-api初始化数组" aria-hidden="true">#</a> 7,使用Stream API初始化数组</h2><p>Stream API 提供了从元素流创建数组的便捷方法，包括 Arrays.stream（）、IntStream.of（）、DoubleStream.of（） 等方法。这些方法允许我们使用指定值初始化数组。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> values <span class="token operator">=</span> <span class="token class-name">IntStream</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同样，我们可以使用 Stream API 初始化一个更高维的数组。让我们使用这种方法来初始化一个二维数组：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> matrix <span class="token operator">=</span> <span class="token class-name">IntStream</span><span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">mapToObj</span><span class="token punctuation">(</span>i <span class="token operator">-&gt;</span> <span class="token class-name">IntStream</span><span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>j <span class="token operator">-&gt;</span> i <span class="token operator">*</span> <span class="token number">4</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,54);function i(r,k){return p(),t("div",null,[u,e(" more "),l])}const v=s(c,[["render",i],["__file","02 Initializing arrays in java.html.vue"]]);export{v as default};
