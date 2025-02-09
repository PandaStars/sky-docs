const e=JSON.parse('{"key":"v-7670fcd0","path":"/javaer/base/%E4%B8%80%E3%80%81Java%E5%9F%BA%E7%A1%80/8.JavaStream%E6%B5%81/05%20java%20stream%20filter%20and%20lambda.html","title":"05.Stream过滤","lang":"zh-CN","frontmatter":{"title":"05.Stream过滤","icon":"pen-to-square","order":5,"author":"LiuSongLing","date":"2025-01-04T00:00:00.000Z","category":["java"],"tag":["java","stream"],"sticky":false,"star":false,"description":"Java 8 引入的Stream API彻底改变了集合数据处理方式，其中filter()方法凭借**高达83%**的开发使用率成为最常用的操作之一。本文将深入剖析如何通过Lambda表达式高效使用filter()方法，并分享生产环境中的最佳实践。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/javaer/base/%E4%B8%80%E3%80%81Java%E5%9F%BA%E7%A1%80/8.JavaStream%E6%B5%81/05%20java%20stream%20filter%20and%20lambda.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"05.Stream过滤"}],["meta",{"property":"og:description","content":"Java 8 引入的Stream API彻底改变了集合数据处理方式，其中filter()方法凭借**高达83%**的开发使用率成为最常用的操作之一。本文将深入剖析如何通过Lambda表达式高效使用filter()方法，并分享生产环境中的最佳实践。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-09T16:13:35.000Z"}],["meta",{"property":"article:author","content":"LiuSongLing"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"stream"}],["meta",{"property":"article:published_time","content":"2025-01-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-09T16:13:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05.Stream过滤\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-01-04T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-09T16:13:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LiuSongLing\\"}]}"]]},"headers":[{"level":2,"title":"1.filter() 方法基础","slug":"_1-filter-方法基础","link":"#_1-filter-方法基础","children":[{"level":3,"title":"方法定义","slug":"方法定义","link":"#方法定义","children":[]},{"level":3,"title":"基础示例","slug":"基础示例","link":"#基础示例","children":[]}]},{"level":2,"title":"2.多条件过滤策略","slug":"_2-多条件过滤策略","link":"#_2-多条件过滤策略","children":[{"level":3,"title":"1.链式过滤（推荐）","slug":"_1-链式过滤-推荐","link":"#_1-链式过滤-推荐","children":[]},{"level":3,"title":"2.复合条件表达式","slug":"_2-复合条件表达式","link":"#_2-复合条件表达式","children":[]},{"level":3,"title":"3.Predicate组合技","slug":"_3-predicate组合技","link":"#_3-predicate组合技","children":[]}]},{"level":2,"title":"3.生产环境实战技巧","slug":"_3-生产环境实战技巧","link":"#_3-生产环境实战技巧","children":[{"level":3,"title":"1.空值安全处理","slug":"_1-空值安全处理","link":"#_1-空值安全处理","children":[]},{"level":3,"title":"2.性能优化要点","slug":"_2-性能优化要点","link":"#_2-性能优化要点","children":[]},{"level":3,"title":"3.调试技巧","slug":"_3-调试技巧","link":"#_3-调试技巧","children":[]}]},{"level":2,"title":"4.与其他操作结合","slug":"_4-与其他操作结合","link":"#_4-与其他操作结合","children":[{"level":3,"title":"1.与map()配合","slug":"_1-与map-配合","link":"#_1-与map-配合","children":[]},{"level":3,"title":"2.与findFirst()结合","slug":"_2-与findfirst-结合","link":"#_2-与findfirst-结合","children":[]},{"level":3,"title":"3.统计过滤结果","slug":"_3-统计过滤结果","link":"#_3-统计过滤结果","children":[]}]},{"level":2,"title":"5.常见陷阱与解决方案","slug":"_5-常见陷阱与解决方案","link":"#_5-常见陷阱与解决方案","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1739117615000,"updatedTime":1739117615000,"contributors":[{"name":"liusongling","email":"15879144378@163.com","commits":1}]},"readingTime":{"minutes":3.2,"words":961},"filePathRelative":"javaer/base/一、Java基础/8.JavaStream流/05 java stream filter and lambda.md","localizedDate":"2025年1月4日","excerpt":"<p>Java 8 引入的Stream API彻底改变了集合数据处理方式，其中<code>filter()</code>方法凭借**高达83%**的开发使用率成为最常用的操作之一。本文将深入剖析如何通过Lambda表达式高效使用<code>filter()</code>方法，并分享生产环境中的最佳实践。</p>\\n","autoDesc":true}');export{e as data};
