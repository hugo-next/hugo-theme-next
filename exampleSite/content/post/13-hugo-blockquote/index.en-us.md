---
title:  "Support block information emphasis annotation in Markdown documents"
description:  "Added rendering of blockquote style in the new version of Hugo framework, supports custom style design, and implements a warning style similar to Github"
keywords: "hugo,block,quote"

date: 2025-01-29T21:24:02+08:00
lastmod: 2025-01-29T21:24:02+08:00

categories:
  - Example
  - Grammar
tags:
  - blockquote
  - Hugo

url: "demo/hugo-blockquote.html"
toc: true
expired: true
---

In the past, the `Hugo NexT` theme used to annotate block information through custom phrases. Recently, it has been discovered that `Hugo` has been updated from [v0.134.0](https://github.com/gohugoio/hugo/releases/tag/v0.134.0). From the beginning of the version, it is possible to support rendering Blockquote styles in Markdown documents through hook mode (which needs to be implemented by oneself), achieving warning style styles similar to Github. So 7 different styles were added to the `Hugo NexT` theme for users to choose from, and they could also customize icons and color configurations.


<!--more-->


Users can find the positions of the following two configuration items and adjust them according to their preferred style and color:

```yaml
#Config. yaml or hugo.toml
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
info     :  Information
note     :  Attention
help     :  'Help'
error    :  Error
warning  :  Warning
success  :  'Success'
important:  'Important'
```

The writing style and specific implementation effects in the Maarkdown document are as follows:

## Information prompt

```markdown
> [!INFO]
> HugoNexT theme supports custom style design, allowing you to achieve personalized design for your own site.
```

> [!INFO]
> HugoNexT theme supports custom style design, allowing you to achieve personalized design for your own site.

## Attention to information

```markdown
> [!NOTE]
> The latest version of the `Hugo NexT` theme supports Blockquote rendering for Markdown documents, with 7 different styles to choose from or customize.
```

> [!NOTE]
> The latest version of the `Hugo NexT` theme supports Blockquote rendering for Markdown documents, with 7 different styles to choose from or customize.

## Help Information

```markdown
> [!HELP]
> The HugoNexT theme provides complete example usage instructions and source code, making it easier to get started and use.
```

> [!HELP]
> The HugoNexT theme provides complete example usage instructions and source code, making it easier to get started and use.

## Warning message

```markdown
> [!WARNING]
> The HugoNexT theme uses SCSS precompilation and requires downloading the official Hugo extended version for use.
```

> [!WARNING]
> The HugoNexT theme uses SCSS precompilation and requires downloading the official Hugo extended version for use.

## Error message

```markdown
> [!ERROR]
> The `Hugo NexT` theme is only supported in Hugo v0.132.0 and above versions.
```

> [!ERROR]
> The `Hugo NexT` theme is only supported in Hugo v0.132.0 and above versions.

## Success message

```markdown
> [!SUCCESS]
> Congratulations on successfully deploying the `Hugo NexT` theme. Please feel free to start your creative work.
```

> [!SUCCESS]
>Congratulations on successfully deploying the `Hugo NexT` theme. Please feel free to start your creative work.

## Important information

```markdown
> [!IMPORTANT]
> The HugoNexT theme supports the use of external CDN services, but please ensure that your network is functioning properly and accessible to CDN services at this time.
```

> [!IMPORTANT]
> The HugoNexT theme supports the use of external CDN services, but please ensure that your network is functioning properly and accessible to CDN services at this time.


## Custom Title

```markdown
> [!Info]+Custom Title Description
> The HugoNexT theme provides very open and flexible configurations, allowing users to customize according to their own ideas.
```

> [!Info]+Custom Title Description
> The HugoNexT theme provides very open and flexible configurations, allowing users to customize according to their own ideas.