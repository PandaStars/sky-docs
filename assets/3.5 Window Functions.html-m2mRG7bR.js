const e=JSON.parse('{"key":"v-67223f2c","path":"/database/pgsql/learning/3.5%20Window%20Functions.html","title":"3.5 窗口函数","lang":"zh-CN","frontmatter":{"title":"3.5 窗口函数","icon":"pen-to-square","order":1,"author":"LiuSongLing","date":"2024-12-25T00:00:00.000Z","category":["pgsql"],"tag":["pgsql"],"sticky":false,"star":false,"description":"窗口函数对一组与当前行以某种方式相关的表行执行计算。 这与可以使用 aggregate 函数完成的计算类型相当。 但是，窗口函数不会像非窗口聚合调用那样导致行分组为单个输出行。 相反，这些行保留其单独的身份。在后台，window 函数能够访问的不仅仅是查询结果的当前行。 以下示例显示了如何将每个员工的薪水与其部门的平均薪水进行比较： SELECT depname, empno, salary, avg(salary) OVER (PARTITION BY depname) FROM empsalary;","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/database/pgsql/learning/3.5%20Window%20Functions.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"3.5 窗口函数"}],["meta",{"property":"og:description","content":"窗口函数对一组与当前行以某种方式相关的表行执行计算。 这与可以使用 aggregate 函数完成的计算类型相当。 但是，窗口函数不会像非窗口聚合调用那样导致行分组为单个输出行。 相反，这些行保留其单独的身份。在后台，window 函数能够访问的不仅仅是查询结果的当前行。 以下示例显示了如何将每个员工的薪水与其部门的平均薪水进行比较： SELECT depname, empno, salary, avg(salary) OVER (PARTITION BY depname) FROM empsalary;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-25T09:24:59.000Z"}],["meta",{"property":"article:author","content":"LiuSongLing"}],["meta",{"property":"article:tag","content":"pgsql"}],["meta",{"property":"article:published_time","content":"2024-12-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-25T09:24:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3.5 窗口函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-25T09:24:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LiuSongLing\\"}]}"]]},"headers":[],"git":{"createdTime":1735118699000,"updatedTime":1735118699000,"contributors":[{"name":"liusongling","email":"15879144378@163.com","commits":1}]},"readingTime":{"minutes":3.14,"words":943},"filePathRelative":"database/pgsql/learning/3.5 Window Functions.md","localizedDate":"2024年12月25日","excerpt":"<p>窗口函数对一组与当前行以某种方式相关的表行执行计算。</p>\\n<p>这与可以使用 aggregate 函数完成的计算类型相当。</p>\\n<p>但是，窗口函数不会像非窗口聚合调用那样导致行分组为单个输出行。</p>\\n<p>相反，这些行保留其单独的身份。在后台，window 函数能够访问的不仅仅是查询结果的当前行。</p>\\n<p>以下示例显示了如何将每个员工的薪水与其部门的平均薪水进行比较：</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">SELECT</span> depname<span class=\\"token punctuation\\">,</span> empno<span class=\\"token punctuation\\">,</span> salary<span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">avg</span><span class=\\"token punctuation\\">(</span>salary<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">OVER</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">PARTITION</span> <span class=\\"token keyword\\">BY</span> depname<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">FROM</span> empsalary<span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
