---
title: "Markdown 语法支持"
description: "描述下 NexT 主题所支持的各种 markdown 语法及效果展示。"
isCJKLanguage: false

lastmod: 2022-06-03T11:52:18+08:00
publishDate: 2022-06-03T11:52:18+08:00

author: Mainroad
originLink: https://mainroad-demo.netlify.app/post/basic-elements/

categories:
 - 示例
tags:
 - Markdown
 - 语法

toc: false
draft: false
url: post/markdown-syntax.html
---

仅以此篇文章来测试下在 `NexT` 主题中在通过 `Hugo` 引擎来建站时，是否支持 `Markdown` 文件内容中所写的各种语法，并展示下实际的效果。

<!--more-->

## 标题样式

让我们从所有可能的标题开始，在 HTML 中 `<h1>`-`<h6>`元素分别表示六个不同级别的标题样式，其中 `<h1>` 为最大标题，`<h6>`为最小标题，效果如下：

# 标题 1
## 标题 2
### 标题 3
#### 标题 4
##### 标题 5
###### 标题 6


## 段落格式

根据[ W3C ](https://www.w3.org/)定义的[ HTML5 规范](https://www.w3.org/TR/html5/dom.html#elements)，**HTML 文档由元素和文本组成**。每个元素的组成都由一个[开始标记](https://www.w3.org/TR/html5/syntax.html#syntax-start-tags)表示，例如： `<body>` ，和[结束标记](https://www.w3.org/TR/html5/syntax.html#syntax-end-tags)表示，例如： `</body>` 。（*某些开始标记和结束标记在某些情况下可以省略，并由其他标记暗示。*）
元素可以具有属性，这些属性控制元素的工作方式。例如：超链接是使用 `a` 元素及其 `href` 属性形成的。

### Markdown 语法

```markdown
![图像说明](图像地址)
```
![hugo-next-primary](//lisenhui.gitee.io/imgs/hugo-next/logo/hugo-next-primary.png)

### HTML IMG 标签

```html
<img src="图像地址" width="宽度" height="高度" />
```
<img src="//lisenhui.gitee.io/imgs/hugo-next/logo/hugo-next-secondary.png" width="150"/>

### SVG 格式

```html
<svg>xxxxxx</svg>
```

<svg class="canon" xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 496 373" height="373" width="496"><g fill="none"><path stroke="#000" stroke-width=".75" d="M.599 372.348L495.263 1.206M.312.633l494.95 370.853M.312 372.633L247.643.92M248.502.92l246.76 370.566M330.828 123.869V1.134M330.396 1.134L165.104 124.515"></path><path stroke="#ED1C24" stroke-width=".75" d="M275.73 41.616h166.224v249.05H275.73zM54.478 41.616h166.225v249.052H54.478z"></path><path stroke="#000" stroke-width=".75" d="M.479.375h495v372h-495zM247.979.875v372"></path><ellipse cx="498.729" cy="177.625" rx=".75" ry="1.25"></ellipse><ellipse cx="247.229" cy="377.375" rx=".75" ry="1.25"></ellipse></g></svg>

## 列表类型

### 有序列表

1. 第一个元素
2. 第二个元素
3. 第三个元素

### 无序列表

* 列表元素
* 另一个元素
* 和其它元素

### 嵌套列表

借助 HTML 的 `ul` 元素来实现。

<ul>
  <li>第一项</li>
  <li>第二项
    <ul>
      <li>第二项第一个子项目</li>
      <li>第二项第二个子项目
        <ul>
          <li>第二项第二分项第一分项</li>
          <li>第二项第二分项第二分项</li>
          <li>第二项第二分项第三分项</li>
        </ul>
      </li>
      <li>第二项第三个子项目
        <ol>
          <li>第二项第三分项第一分项</li>
          <li>第二项第三分项第二分项</li>
          <li>第二项第三分项第三分项</li>
        </ol>
    </ul>
  </li>
  <li>第三项</li>
</ul>

### 自定义列表

通过 HTML 的 `dl` 元素还支持自定义列表（表格列表）。

<dl>
  <dt>Hugo 目录结构</dt>
  <dd>assets</dd>
  <dd>config.toml</dd>
  <dd>content</dd>
  <dd>data</dd>
  <dd>theme</dd>
  <dd>static</dd>
  <dt>Hugo 模板</dt>
  <dd>基础模板</dd>
  <dd>列表模板</dd>
  <dd>单页模板</dd>
</dl>

## 块引用

`blockquote` 元素表示从另一个源引用的内容，可以选择引用必须在 `footer` 或 `cite` 元素中，也可以选择使用注释和缩写等行内更改。

> 引用文本
> 这一行也是同样的引用
> 同样你也在 `blockquote` 中使用 **Markdown** 语法书写

带有引文的 `Blockquote` 元素效果。

<blockquote>
  <p>我的目标不是赚大钱,是为了制造好的电脑。当我意识到我可以永远当工程师时，我才创办了这家公司。</p>
  <footer>— <cite>史蒂夫·沃兹尼亚克</cite></footer>
</blockquote>

根据 Mozilla 的网站记录，<q cite="https://www.mozilla.org/en-US/about/history/details/">Firefox 1.0 于 2004 年发布，并取得了巨大成功。</q>

## 表格

表格并不算是 `Markdown` 的核心要素，但 `Hugo` 同样支持它。

| ID  | 创建者     | 模型   | 年份 |
| --- | --------- | ------- | ---- |
| 1   | Honda     | Accord  | 2009 |
| 2   | Toyota    | Camry   | 2012 |
| 3   | Hyundai   | Elantra | 2010 |

可以使用 : （英文格式冒号）来对表格内容进行对齐。

|  表格 | 可以是 | 很酷 |
|:----- |:-----:| ----:|
| 左对齐 | 居中 | 右对齐 |
| 左对齐 | 居中 | 右对齐 |
| 左对齐 | 居中 | 右对齐 |

同样也可以在表格中使用 `Markdown` 语法。

| 表格    |    中     |    使用    | Markdown 语法 |
| ------ | --------- | ---------- | ------------- |
| *斜体*  | **粗体**  | ~~中划线~~ |    `代码块`    |

## Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

{{< highlight html >}}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

## 其它元素： abbr、sub、sup、kbd等等

<abbr title="Graphics Interchange Format">GIF</abbr> 是位图图像格式。

H<sub>2</sub>O

C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

按<kbd>X</kbd>获胜。或按<kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>F</kbd></kbd>显示 FPS 计数器。

<mark>比特作为信息论中的信息单位，也被称为 shannon </mark>，以信息论领域的创始人 Claude shannon 的名字命名。

参考：
- 来自 **Mainroad** 主题的 [Basic Elements](https://mainroad-demo.netlify.app/post/basic-elements/) 内容
