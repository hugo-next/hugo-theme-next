---
title: "支持在Markdown文档中实现块信息强调标注"
description: "在新版本Hugo框架中添加了对blockquote样式渲染，支持自定义样式设计，实现类似Github的警告风格样式。"
keywords: "hugo,block,quote"

date: 2025-01-02T16:08:02+08:00
lastmod: 2025-01-02T19:08:02+08:00

categories:
  - 示例文章
  - 语法
tags:
  - blockquote
  - Hugo

url: "demo/hugo-blockquote.html"
toc: true
expired: true
---

过去 `HugoNexT` 主题都是通过自定义短语来实现块信息的标注，近期发现 `Hugo` 从[v0.134.0](https://github.com/gohugoio/hugo/releases/tag/v0.134.0)版本开始便是可以支持通过hook方式渲染Markdown文档中的Blockquote样式（需要自己实现），实现类似Github的警告风格样式。于是便在 `HugoNexT` 主题中添加7种不同风格供用户可选择使用，还可以自定义图标与颜色配置。


<!--more-->


用户可以找到如下两处配置项的位置，然后根据自己喜欢的风格和颜色进行调整：

```yaml
# config.yaml 或 hugo.toml
postAlerts:
  info:
    icon: "circle-info"
    color: "#4A90E2"
  note:
    icon: "bell"
    color: "#17A2B8"
  help:
    icon: "circle-question"
    color: "#967ADC"
  error:
    icon: "circle-xmark"
    color: "#DC3545"
  warning:
    icon: "triangle-exclamation"
    color: "#F39C12"
  success:
    icon: "circle-check"
    color: "#32CD32"
  important:
    icon: "circle-plus"
    color: "#007BFF"
```

```yaml
# i18n/zh-cn.yaml
PostAlert:
  info     : "信息"
  note     : "注意"
  help     : "帮助"
  error    : "错误"
  warning  : "警告"
  success  : "成功"
  important: "重要"
```

在Maarkdown文档中的写法和实现的具体效果参考如下：

## 信息提示

```markdown
> [!INFO]
> `HugoNexT` 主题支持自定义样式设计，你可实现属于自己站点的个性化设计。
```

> [!INFO]
> `HugoNexT` 主题支持自定义样式设计，你可实现属于自己站点的个性化设计。

## 注意信息

```markdown
> [!NOTE]
> 最新版本的 `HugoNexT` 主题支持Markdown文档的Blockquote渲染，有7种不同风格可选择使用或自定义配置。
```

> [!NOTE]
> 最新版本的 `HugoNexT` 主题支持Markdown文档的Blockquote渲染，有7种不同风格可选择使用或自定义配置。

## 帮助信息

```markdown
> [!HELP]
> `HugoNexT` 主题提供了完整的示例使用说明及源代码，上手更为简单易用。
```

> [!HELP]
> `HugoNexT` 主题提供了完整的示例使用说明及源代码，上手更为简单易用。

## 警告信息

```markdown
> [!WARNING]
> `HugoNexT` 主题使用了SCSS 预编译，需要下载 Hugo 官方 `hugo-extended` 版本使用。
```

> [!WARNING]
> `HugoNexT` 主题使用了SCSS 预编译，需要下载 Hugo 官方 `hugo-extended` 版本使用。

## 错误信息

```markdown
> [!ERROR]
> `HugoNexT` 主题只支持在 Hugo v0.132.0 及以上版本中使用。
```

> [!ERROR]
> `HugoNexT` 主题只支持在 Hugo v0.132.0 及以上版本中使用。

## 成功信息

```markdown
> [!SUCCESS]
> 恭喜你已经成功部署 `HugoNexT` 主题，请尽情的开始你的创作吧。
```

> [!SUCCESS]
> 恭喜你已经成功部署 `HugoNexT` 主题，请尽情的开始你的创作吧。

## 重要信息

```markdown
> [!IMPORTANT]
> `HugoNexT` 主题支持使用外部的CDN服务，但此时请确保你的网络是正常且可访问CDN服务。
```

> [!IMPORTANT]
> `HugoNexT` 主题支持使用外部的CDN服务，但此时请确保你的网络是正常且可访问CDN服务。


## 自定义标题

```markdown
> [!Info]+ 自定义标题说明 
> `HugoNexT` 主题提供很开放的灵活配置，用户可按自己的想法改造。
```

> [!Info]+ 自定义标题说明 
> `HugoNexT` 主题提供很开放的灵活配置，用户可按自己的想法改造。