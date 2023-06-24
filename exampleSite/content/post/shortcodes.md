---
title: "自定义短语示例"
description: "将常用的块引用、标签卡、按钮等信息设置成短代码，便于快速引用"
keywords: "shortcode,短代码"

date: 2022-08-06T14:41:50+08:00
lastmod: 2022-08-06T14:41:50+08:00

categories:
  - 示例文章
  - 语法
tags:
  - 短代码
  - 语法
url: "post/shortcodes.html"
---

虽然 `Markdown` 语法已经非常丰富能够满足我们写文章的绝大部分需求，但是为更好的对文章内容进行更友好的排版，为引设计一套自定义的短语，便于在使用时能够快速引用。

<!--more-->

## 块引用

在引用一些经典名言名句时，可以采用此短语，语法参考如下：

```markdown
{{</* quote */>}}
  ### block quote
  写下你想表达的话语！
{{</* /quote */>}}
```

实际效果：

{{< quote >}}

希望是无所谓有，无所谓无的，这正如地上的路。


其实地上本没有路，走的人多了，也便成了路。

**鲁迅**

{{< /quote >}}

## 信息块

支持 `default`，`info`，`success`，`warning`，`danger` 等五种不同效果的展示，语法参考如下：

```markdown
{{</* note [class] [no-icon] */>}}
  书写表达的信息
  支持 Markdown 语法
{{</* /note */>}}
```

实际效果：

{{< note default no-icon >}}
  ### Default Header without icon
  **Welcome** to [Hugo NexT!](https://preview.hugo-next.eu.org)
{{< /note >}}

{{< note default >}}
  ### Default Header
  **Welcome** to [Hugo NexT!](https://preview.hugo-next.eu.org)
{{< /note >}}

{{< note info >}}
  ### Info Header
  **Welcome** to [Hugo NexT!](https://preview.hugo-next.eu.org)
{{< /note >}}

{{< note success >}}
  ### Success Header
  **Welcome** to [Hugo NexT!](https://preview.hugo-next.eu.org)
{{< /note >}}

{{< note warning >}}
  ### Warning Header
  **Welcome** to [Hugo NexT!](https://preview.hugo-next.eu.org)
{{< /note >}}

{{< note danger >}}
  ### Danger Header
  **Welcome** to [Hugo NexT!](https://preview.hugo-next.eu.org)
{{< /note >}}
