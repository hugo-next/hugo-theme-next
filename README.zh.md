[中文](#) | [English](https://github.com/hugo-next/hugo-theme-next/blob/main/README.md)

<a title="Hugo NexT 站点" href="https://preview.hugo-next.eu.org">
<img align="right" alt="NexT logo" width="266" src="images/hugo-next-primary.png">
</a>

## Hugo NexT

«Hugo NexT» 是一款高质量且优雅的 [Hugo](https://gohugo.io) 主题，从原来 `Hexo` 引擎的 [`NexT`](https://github.com/next-theme/hexo-theme-next) 主题中移植过来，继续保留其经典的设计和 4 种不同页面布局模式，一切因 :heart: 重新出发愿你也能喜欢。

> [!NOTE]
> 本主题的所有页面设计和配置项都与原来 `Hexo` 引擎的 `NexT` 主题保持了良好的兼容性，可以非常平滑的从 `Hexo` 迁移至 `Hugo` 引擎，欢迎大家使用并反馈。

[![Gitter](https://img.shields.io/gitter/room/hugo-next/hugo-them-next?logo=gitter&style=flat-square&label=Gitter)](https://app.gitter.im/#/room/#hugo-next_community:gitter.im) [![Build Hugo Version](https://img.shields.io/badge/Hugo-%3E=0.146.0-red?style=flat-square&logo=hugo&color=%23FF4088&&label=Hugo%20Extended)](https://github.com/gohugoio/hugo/releases/latest) [![GitHub deployments](https://img.shields.io/github/deployments/hugo-next/hugo-next.github.io/github-pages?style=flat-square&logo=GitHub&label=Github%20Pages)](https://github.com/hugo-next/hugo-theme-next)  [![Contributors](https://img.shields.io/github/contributors/hugo-next/hugo-theme-next?style=flat-square&color=%235E0D73&logo=contributorcovenant&label=Contributors)](https://github.com/hugo-next/hugo-theme-next/graphs/contributors) [![Latest Release](https://img.shields.io/github/v/release/hugo-next/hugo-theme-next?include_prereleases&style=flat-square&color=%23DD2C00&logo=semanticrelease&label=Latest%20Release)](https://github.com/hugo-next/hugo-theme-next/releases) [![Repos Size](https://img.shields.io/github/repo-size/hugo-next/hugo-theme-next?style=flat-square&color=%23FFBF3B&logo=Files&label=Repo%20Size)](https://github.com/hugo-next/hugo-theme-next/find/main) [![GitHub](https://img.shields.io/github/license/hugo-next/hugo-theme-next?logo=webauthn&style=flat-square&label=License)](https://github.com/hugo-next/hugo-theme-next/blob/main/LICENSE)

![截图](images/screenshot.png)

## 🎨 4 种页面模式

* :heart_decoration: 冥想 (Muse)
* :six_pointed_star: 迷雾 (Mist)
* :pisces: 双鱼座 (Pisces)
* :gemini: 双子座 (Gemini) (**默认**)

## 👀 在线预览

| 演示环境 | :gemini: (**Default**) | :heart_decoration: | :six_pointed_star: | :pisces: | 运行状态 |
| :-----: | :--------------------: | :----------------: | :----------------: | :------: | :----: |
| 开发版本 | [双子座](https://preview.hugo-next.eu.org/) | [冥想](https://preview.hugo-next.eu.org/muse/) | [迷雾](https://preview.hugo-next.eu.org/mist/) | [双鱼座](https://preview.hugo-next.eu.org/pisces/) | ![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=hugo-next&style=for-the-badge) |
| 正式版本 | [双子座](https://hugo-next.eu.org/) | [冥想](https://hugo-next.eu.org/muse/) | [迷雾](https://hugo-next.eu.org/mist/) | [双鱼座](https://hugo-next.eu.org/pisces/) | ![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=hugo-next&style=for-the-badge) |

> [!NOTE]
> - 开发版本： 所有的新功能开发都会在此第一时间发布预览
> - 正式版本： 只有测试稳定且符合要求的功能才会正式发布

## 👣 快速开始

在使用 `Hugo NexT` 主题之前，请确认你的电脑上已经安装 `Git` 和 `Hugo Extended` 两款软件。

### 📦 快速预览

如想快速预览主题实际效果，可直接克隆当前主题的仓库代码，然后运行示例站点：

```shell
$ git clone --single-branch -b main https://github.com/hugo-next/hugo-theme-next.git hugo-theme-next
$ cd hugo-theme-next/exampleSite/
$ sh startup.sh
```

打开电脑浏览器输入`http://127.0.0.1:1414/`即可访问查看。

### 📰 使用模板

如果你是初次建站的话，可以使用 `Github` 的模板功能，一键生成你的站点仓库代码。访问 [hugo-theme-next-starter](https://github.com/hugo-next/hugo-theme-next-starter) 点击右上角的 `Use this template` 绿色按钮然后填写代码仓库的相关信息，参考如下：

![使用模板创建](images/use-hugo-next-starter.png)

最后点击 `Create repository from template` 绿色按钮，会直接在你的空间中生成站点代码，再把它克隆到本地进行创作。

### 📐 直接引用

如果你已经有站点，可通过 `submodule` 模式引用本主题，参考如下命令：

```shell
$ cd hugo-next-example
$ git submodule add https://github.com/hugo-next/hugo-theme-next.git themes/hugo-theme-next
$ cp themes/hugo-theme-next/exampleSite/hugo.yaml .
$ mv hugo.toml hugo.toml.backup
```

或通过 `Hugo module` 模式引用本主题，参考如下命令：

```shell
$ cd hugo-next-example
$ hugo mod init hugo-next-example
$ wget -O hugo.yaml https://github.com/hugo-next/hugo-theme-next/raw/main/exampleSite/hugo.yaml
$ sed -i 's/hugo-theme-next/github.com\/hugo-next\/hugo-theme-next\/v4/' hugo.yaml
$ mv hugo.toml hugo.toml.backup
```

### 💻 本地预览

```shell
$ cd hugo-next-example
$ hugo server
```

打开浏览器，在地址栏输入 http://127.0.0.1:1313/ 查看主题效果，祝你好运！:tada::tada::tada:

> [!NOTE]
> 要注意下 `hugo server` 命令只是用于本地开发或写文章时预览，并非是将其直接对外网开放访问。在正式发布时，可通过 `hugo` 命令生成全站静态文件，然后部署到类似 `Nginx` 的 Web 服务器即可。

### 🔄 主题更新

后续更新主题只需要在你的站点目录中，执行如下命令：

```shell
$ cd hugo-next-example
$ git submodule update --remote
```

如使用 `Hugo module`，执行如下命令：

```shell
$ cd hugo-next-example
$ hugo mod get -u
```

> [!NOTE]
> 本主题的代码同时也同步到 `Gitee` 仓库，在国内环境可切换用 [https://gitee.com/hugo-next/hugo-theme-next.git](https://gitee.com/hugo-next/hugo-theme-next.git) 镜像速度更快，也更稳定。

## 📝 发表新文章

主题已经配置了默认的文章模板，建议使用如下 Hugo 命令快速创建新的文章：

```sh
$ hugo new posts/hello-world.md
```

> [!IMPORTANT]
> 其中 `posts` 路径是 `content` 根目录下的子文件夹，可依据自己的文件管理形态调整。
> 同时你也可以增加不同的文件夹进行分类管理，比如：`content/life/` 、`content/blog/` 、`content/docs/` 等，
> 并要把这些文件夹加入到 `hugo.yaml` 文件的 `mainSections` 配置项中。
> 另外要保留 `content/archives` 文件夹及在里面创建一个`_index.md`文件，它将作为文章归档的默认页面。

关于文章头部那些参数作用的说明参考如下：

```yml
---
# 文章标题
title: "{{ replace .Name "-" " " | title }}"
# 文章内容摘要
description: "{{ .Name }}"
# 文章内容关键字
keywords: "{{replace .Name "-" ","}}"
# 发表日期
date: {{ .Date }}
# 最后修改日期
lastmod: {{ .Date }}
# 分类
categories:
 -
# 标签
tags:
  -
  -

# 原文作者
#author:
# 原文链接
#link:
# 图片链接，用在open graph和twitter卡片上
#imgs:
# 在首页展开内容
#expand: true
# 外部链接地址，访问时直接跳转
#extlink:
# 在当前页面关闭评论功能
#comment:
# enable: false
# 关闭当前页面目录功能
# 注意：正常情况下文章中有H2-H4标题会自动生成目录，无需额外配置
#toc: false
# 绝对访问路径
#url: "{{ lower .Name }}.html"
# 开启文章置顶，数字越小越靠前
#weight: 1
# 开启数学公式渲染，可选值： mathjax, katex
#math: mathjax
---

## 📊 统计分析集成

Hugo NexT 主题支持多种分析服务，用于跟踪网站流量和用户行为。

目前支持的分析服务包括：
- 51La 统计
- 百度统计
- Google Analytics
- Cloudflare Analytics
- Busuanzi Count
- **Umami Analytics** (新增)

要启用 Umami Analytics，请在您的 `hugo.yaml` 中添加以下配置：

```yaml
params:
  analytics:
    umami:
      enable: true
      websiteId: '<your-umami-website-id>'
      scriptUrl: 'https://<your-umami-domain>/script.js'
```

```

## 🎉 用户案例

- [Hugo Docs & Demo](https://hugo-next.eu.org/)
- [凡梦星尘空间站](https://lisenhui.cn/)
- [阿哈吉](https://a.happy2008.top/)
- [研究僧](https://yuanlucas.com/)
- [Zero's Record](https://izeroo.cn/)
- [更多案例上线](https://hugo-next.eu.org/flinks.html)

如你也正在使用 `Hugo NexT` 主题，欢迎在 [flinks.yaml](https://github.com/hugo-next/hugo-next-docs/blob/develop/data/flinks.yaml)  文件底部提交贵站的名称、描述、头像、链接等信息，具体格式内容参考如下：

```yaml
- name: NexT 主题
  desc: 保持简单的易用性和强大的功能
  avatar: https://hugo-next.eu.org/imgs/hugo_next_avatar.png
  link: https://hugo-next.eu.org
```

## 🙋 使用反馈

- 加入 [GitHub Discussions](https://github.com/hugo-next/hugo-theme-next/discussions) 或 [Gitter](https://gitter.im/hugo-next/community) 在线讨论 :beers:
- [GitHub Issues](https://github.com/hugo-next/hugo-theme-next/issues/new?labels=Bug&template=bug-report.md) 提交错误报告 :bug:
- [GitHub Feature](https://github.com/hugo-next/hugo-theme-next/issues/new?labels=Feature+Request&template=feature-request.md) 表新功能的想法 :sparkles:

> 国内用户也可加入 QQ 群交流： 604710815

## 👨‍👩‍👧‍👦 欢迎加入

关于本主题的开发进度和后续的发展路线图，可访问 [Hugo NexT V4 Roadmap](https://github.com/hugo-next/hugo-theme-next/issues/9) 查看详情，也欢迎大家参与一起来完善。

[![Contributors](https://contrib.rocks/image?repo=hugo-next/hugo-theme-next)](https://github.com/hugo-next/hugo-theme-next/graphs/contributors)

[![HugoNexT Stars](https://starchart.cc/hugo-next/hugo-theme-next.svg?variant=adaptive)](https://github.com/hugo-next/hugo-theme-next/stargazers)

## 📜 许可证

[MIT License](LICENSE)

Copyright (c) 2022， hugo-next 团队

## 💖 致谢

开发 `Hugo NexT` 主题原本是个人的业余爱好，但没想到网友们这么的热情，感谢有你们的支持，让我们一起来见证它的成长。

以下是打赏名单列表（按时间倒序）：

|  打赏时间  | 打赏者 | 打赏方式 | 打赏内容 | 留言                             |
| :--------: | ------ | -------- | -------- | -------------------------------- |
| 2024.05.11 | *祥    | 支付宝   | ￥66.66  | 感谢创作这么好的主题             |
| 2023.07.25 | *五    | 微信支付 | ￥50.00  | 很喜欢next主题，感谢，请你喝咖啡 |
| 2023.06.01 | **霖   | 支付宝   | ¥10.00  | /                                |
| 2022.11.15 | f888   | 咸鱼     | ¥6.20   | 聊表心意                         |
| 2022.09.30 | *軒    | 微信支付 | ¥66.66  | 愿项目造福更多人！               |
| 2022.09.30 | N*l    | 微信支付 | ¥20.00  | /                                |
| 2022.07.09 | *风    | 微信支付 | ¥10.00  | /                                |
| 2022.05.08 | *泉    | 微信支付 | ¥6.60   | 祝开发next顺利                   |
| 2022.02.28 | *娇    | 微信支付 | ¥5.00   | /                                |
| 2021.12.21 | z*y    | 微信支付 | ¥18.88  | /                                |