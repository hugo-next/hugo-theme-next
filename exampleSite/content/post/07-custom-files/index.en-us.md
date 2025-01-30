---
title:  "Support user-defined design"
description:  "Users can customize file configurations to achieve personalized adjustments to the style and layout of the site"
keywords: "custom,files,layout"

date: 2025-01-25T21:12:32+08:00
lastmod: 2025-01-25T20:59:12+08:00

categories:
  - Example

tags:
  - Customize
  - Personalization
  - Layout

url: "demo/custom-files.html"
toc: true
---

For users familiar with front-end development, personalized adjustments can be made to the style and layout of the site through custom file configuration. In terms of layout, it mainly supports the site overview section in the left sidebar, as well as the two positions at the bottom of the site, but the style reset can be anywhere on the entire site.

## Open configuration parameters

Firstly, it is necessary to clarify that the following parameters are configured in the `params` area of the configuration file:

```yaml
customFilePath:
sidebar: custom_sidebar.html
footer: custom_footer.html
style: /css/custom_style.css
```

> [!WARNING]
> **Attention:** The file names of `sidebar` and `footer` cannot be the same as their parameter names, otherwise it will affect the default layout design of the system. Remember!!!: smile:


Then create two directories, 'layouts/partitions', in the root directory of the site to store custom layout design files. Additionally, create two directories,' static/css', in the root directory of the site to store custom CSS style files. After everything is ready, you can refer to the following steps to complete your design idea.

## Sidebar design

Create a new file with the suffix 'html' in the 'partitions' directory earlier, where you can write the design or content you want to express, such as introducing some third-party component content. The example is as follows:

```html
<div class="mydefined animated" itemprop="custom">
<span>Support custom CSS and Sidebar layout now 💄💄💄</ span>
</div>
```

Configure the path of the file to the corresponding parameters, please refer to the effect at the bottom of the left sidebar for the effect.

## Footer design

Create a new file with the suffix 'html' in the 'partitions' directory earlier, where you can write the design or content you want to express, such as introducing some third-party component content. The example is as follows:

```html
<div class="custom-footer">
Website source code <a href=" https://github.com/hugo-next/hugo-theme-next/tree/develop/exampleSite/layouts/partials/custom-footer.html " target="_blank">here</a>
</div>
```

Configure the path of the file to the corresponding parameters, please refer to the effect at the bottom of the site for the effect.

## Custom Style

Create a new file with the suffix 'css' in the' css' directory earlier, and then redefine the style of the site or add some custom style designs to reference when writing articles. The example is as follows:

```html
.custom-head5 {
font-size: 1.2em;
color: #ed6c24;
font-weight: bold;
}
```

Configure the path of the file to the corresponding parameters, and the effect reference is as follows:

<span class="custom-head5"> I am customizing the title style effect. </span>