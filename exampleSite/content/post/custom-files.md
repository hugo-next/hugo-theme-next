---
title: "支持用户自定义设计"
description: "用户可以通过自定义文件配置，实现对站点的样式和布局进行个性化的调整。"
keywords: "custom,files,layout"

date: 2022-09-10T21:02:32+08:00
lastmod: 2022-09-10T21:02:32+08:00

categories:
  - 示例文章

tags:
  - 自定义
  - 个性化
  - 布局

url: "post/custom-files.html"
toc: true
---

对于熟悉前端开发的用户来说，可以通过自定义文件配置，实现对站点的样式和布局进行个性化的调整。其中布局方面主要是支持左侧边栏的站点概览部分，以及站点底部2个位置，但样式的重置可以是整个站点的任意位置。

<!--more-->

## 打开配置参数

首先要明确在配置文件的 `params` 区域中有配置如下参数：

```yaml
customFilePath:
  sidebar: custom_sidebar.html
  footer: custom_footer.html
  style: /css/custom_style.css
```

{{< note warning >}}

**注意：** `sidebar` 和 `footer` 的文件命名不可以与它们的参数名称相同，不然会影响系统默认的布局设计，切记！！！ :smile:

{{< /note >}}

然后在站点的根目录下创建 `layouts/partials` 2个目录，用于存放自定布局设计文件，另外在站点根目录下创建 `statics/css` 2个目录，用于存放自定义 CSS 样式文件。一切就绪后，就可以参考如下的步骤，完成自己的设计想法。

## 侧边栏设计

在前面创建 `partials` 目录中新一个后缀名为 `html` 的文件，可以在里面书写你所想表达的设计或内容，比如引入一些第三方组件内容。示例如下：

```html
<div class="mydefined animated" itemprop="custom">
  <span>支持自定义CSS和Sidebar布局啦💄💄💄</span>
</div>
```

再把该文件的路径配置到相应的参数中，效果请查看左侧边栏底部的效果。

## 底部设计

在前面创建 `partials` 目录中新一个后缀名为 `html` 的文件，可以在里面书写你所想表达的设计或内容，比如引入一些第三方组件内容。示例如下：

```html
<div class="custom-footer">
Website source code <a href="https://github.com/hugo-next/hugo-theme-next/tree/develop/exampleSite/layouts/partials/custom-footer.html" target="_blank">here</a>
</div>
```

再把该文件的路径配置到相应的参数中，效果请查看站点底部的效果。


## 自定义样式

在前面创建 `css` 目录中新一个后缀名为 `css` 的文件，然后可以在里面把站点的样式进行重定义，或是增加一些自己定义的样式设计，在写文章时进行引用，示例如下：

```html
.custom-head5 {
  font-size: 1.2em;
  color: #ed6c24;
  font-weight: bold;
}
```

再把该文件的路径配置到相应的参数中，效果参考如下：

<span class="custom-head5">我是自定义的标题样式效果!!!</span>
