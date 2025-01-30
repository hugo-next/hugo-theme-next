---
Title: "Markdown Syntax Support"
description:  Describe the various markdown syntax and effect displays supported by NexT themes
isCJKLanguage: false

publishDate: 2025-01-25T20:52:18+08:00
lastmod: 2025-01-25T20:52:18+08:00

author: Mainroad
originLink:  https://mainroad-demo.netlify.app/demo/basic-elements/

categories:
  - Example
  - MarkdownSyntax
 
tags:
  - Markdown
  - Grammar

toc: false
draft: false
url: demo/markdown-syntax.html
---

Only use this article to test whether the various syntax written in the content of the `Markdown` file is supported when building a website using the `Hugo` engine in the `NexT` theme, and demonstrate the actual effect.

<!--more-->

## Title Style

Let's start with all possible headings, where the `<h1>` - `<h6>` elements in HTML represent six different levels of heading styles, with `<h1>` being the maximum heading`< H6>` is the minimum title, with the following effect:

# Title 1
## Title 2
### Title 3
#### Title 4
##### Title 5
###### Title 6


## Paragraph format

According to [W3C](https://www.w3.org/)Defined [HTML5 Specification](https://www.w3.org/TR/html5/dom.html#elements)，**HTML documents consist** of elements and text. The composition of each element consists of a [Start marker](https://www.w3.org/TR/html5/syntax.html#syntax), for example:`<body>` ， And [End Mark](https://www.w3.org/TR/html5/syntax.html#syntax), for example:`</body>` . 

(*Some start and end markers may be omitted in certain situations and implied by other markers*.)

Elements can have attributes that control how they work. For example, hyperlinks are formed using the `a` element and its `ref` attribute.

### Markdown syntax

```markdown
! [Image Description] (Image Address)
```
![hugo-next-primary](//hugo-next.github.io/imgs/logo/hugo-next-primary.png)

### HTML IMG tags

```html
<img src="Image Address" width="Width" height="Height"/>
```

<img src="//hugo-next.github.io/imgs/logo/hugo-next-secondary.png" width="150"/>

### SVG format

```html
<svg>xxxxxx</svg>
```

<svg class="canon" xmlns=" http://www.w3.org/2000/svg " overflow="visible" viewBox="0 0 496 373" height="373" width="496"><g fill="none"><path stroke="#000" stroke-width=".75" d="M.599 372.348L495.263 1.206M.312.633l494.95 370.853M.312 372.633L247.643.92M248.502.92l246.76 370.566M330.828 123.869V1.134M330.396 1.134L165.104 124.515"></path><path stroke="#ED1C24" stroke-width=".75" d="M275.73 41.616h166.224v249.05H275.73zM54.478 41.616h166.225v249.052H54.478z"></path><path stroke="#000" stroke-width=".75" d="M.479.375h495v372h-495zM247.979.875v372"></path><ellipse cx="498.729" cy="177.625" rx=".75" ry="1.25"></ellipse><ellipse cx="247.229" cy="377.375" rx=".75" ry="1.25"></ellipse></g></svg>

## List type

### Ordered List

1. The first element
2. The second element
3. The third element

### Unordered List

* List elements
* Another element
* And other elements

### Nested List

Using HTML's `ul` element to implement.

<ul>
  <li>First item</li>
  <li>Second item
    <ul>
      <li>Second item First subitem</li>
      <li>Second item second subitem
        <ul>
          <li>Second item Second subitem First sub-subitem</li>
          <li>Second item Second subitem Second sub-subitem</li>
          <li>Second item Second subitem Third sub-subitem</li>
        </ul>
      </li>
      <li>Second item Third subitem
        <ol>
          <li>Second item Third subitem First sub-subitem</li>
          <li>Second item Third subitem Second sub-subitem</li>
          <li>Second item Third subitem Third sub-subitem</li>
        </ol>
    </ul>
  </li>
  <li>Third item</li>
</ul>

### Custom List

Custom lists (table lists) are also supported through HTML's `dl` element.

<dl>
  <dt>Hugo directory structure</dt>
  <dd>assets</dd>
  <dd>hugo.toml</dd>
  <dd>content</dd>
  <dd>data</dd>
  <dd>theme</dd>
  <dd>static</dd>
  <dt>Hugo Template</dt>
  <dd>Basic Template</dd>
  <dd>List Template</dd>
  <dd>Single page template</dd>
</dl>

## Block reference


The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

> Quoted text.
> This line is part of the same quote.
> Also you can *put* **Markdown** into a blockquote.

Blockquote with a citation.

<blockquote>
  <p>My goal wasn't to make a ton of money. It was to build good computers. I only started the company when I realized I could be an engineer forever.</p>
  <footer>— <cite>Steve Wozniak</cite></footer>
</blockquote>

According to Mozilla's website, <q cite="https://www.mozilla.org/en-US/about/history/details/">Firefox 1.0 was released in 2004 and became a big success.</q>

## Table

Tables aren't part of the core `Markdown` spec, but `Hugo` supports them.

| ID  | Make      | Model   | Year |
| --- | --------- | ------- | ---- |
| 1   | Honda     | Accord  | 2009 |
| 2   | Toyota    | Camry   | 2012 |
| 3   | Hyundai   | Elantra | 2010 |

Colons can be used to align columns.

| Tables      | Are           | Cool         |
|:----------- |:-------------:| ------------:|
| align: left | align: center | align: right |
| align: left | align: center | align: right |
| align: left | align: center | align: right |

You can also use inline Markdown.

| Inline     | Markdown  | In                | Table      |
| ---------- | --------- | ----------------- | ---------- |
| *italics*  | **bold**  | ~~strikethrough~~ | `code`     |

## Code

Use Markdown syntax to write code blocks:

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

Use Hugo's `highlight` shortcode to write code blocks:

{{< highlight html "hl_lines=2 5-7, linenostart=44" >}}
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


## Other stuff — abbr, sub, sup, kbd, etc.

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>X</kbd> to win. Or press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>F</kbd></kbd> to show FPS counter.

<mark>As a unit of information in information theory, the bit has alternatively been called a shannon</mark>, named after Claude Shannon, the founder of field of information theory.

Reference resources:

- Refert from **Mainroad** theme [Basic Elements](https://mainroad-demo.netlify.app/post/basic-elements/)Content
