[中文](README.zh.md) | [English](#)

<a title="Hugo NexT Website" href="https://preview.hugo-next.eu.org">
  <img align="right" alt="NexT logo" width="266" src="https://lisenhui.gitee.io/imgs/hugo-next/logo/hugo-next-primary.png">
</a>

## Hugo NexT

«Hugo NexT» is a high quality elegant [Hugo](https://gohugo.io) theme. Migrate it from `Hexo` engine themes which name is [`NexT`](https://github.com/next-theme/hexo-theme-next), keep all kind page layout designs and 4 different shcemes, start new journey with :heart: and hope you would like it.

> All page designs & configuration compatibility with Hexo NexT, it's very easy migrate your site from Hexo to Hugo and enjoy yourself.

[![Gitter](https://img.shields.io/gitter/room/hugo-next/hugo-them-next?logo=gitter&style=flat-square)](https://gitter.im/hugo-next/community) [![Build Hugo Version](https://img.shields.io/badge/Hugo-%3E=0.89.0-red?style=flat-square&logo=hugo&color=%23FF4088&&label=Hugo%20Extended)](https://github.com/gohugoio/hugo/releases/latest) [![GitHub deployments](https://img.shields.io/github/deployments/hugo-next/hugo-next.github.io/github-pages?style=flat-square&label=gh-pg&logo=GitHub)](https://github.com/hugo-next/hugo-theme-next) [![Repos Size](https://img.shields.io/github/repo-size/hugo-next/hugo-theme-next?style=flat-square&color=%23FFBF3B&logo=Files)](https://github.com/hugo-next/hugo-theme-next/find/main) [![GitHub](https://img.shields.io/github/license/hugo-next/hugo-theme-next?logo=webauthn&style=flat-square)](https://github.com/hugo-next/hugo-theme-next/blob/main/LICENSE)

## 4 Scheme

* :heart_decoration: Muse
* :six_pointed_star: Mist
* :pisces: Pisces
* :gemini: Gemini (**default**)

## Live Preview

| Environment | :gemini: (**Default**) | :heart_decoration: | :six_pointed_star: | :pisces: | Status |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Preliminary | [Gemini](https://preview.hugo-next.eu.org/) | [Muse](https://preview.hugo-next.eu.org/muse/) | [Mist](https://preview.hugo-next.eu.org/mist/) | [Pisces](https://preview.hugo-next.eu.org/pisces/) | ![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=preview-hugo-next&style=for-the-badge) |
| Production | [Gemini](https://hugo-next.eu.org/) | [Muse](https://hugo-next.eu.org/muse/) | [Mist](https://hugo-next.eu.org/mist/) | [Pisces](https://hugo-next.eu.org/pisces/) | ![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=hugo-next&style=for-the-badge) |

> - Preliminary: all new feature developments will be previewed as soon as possible.
> - Production: Only the features that are tested stably and meet the requirements will be officially released.

## Quick Start

Before use `Hugo NexT` theme, please make sure installed `Git` & `Hugo Extened` software in your PC, then use `submodule` to lead into the theme, see below commands:

```shell
$ hugo new site hugo-next-exmaple
$ cd hugo-next-exmaple
$ git init
$ git submodule add https://github.com/hugo-next/hugo-theme-next.git themes/hugo-theme-next
$ cp -r themes/hugo-theme-next/exampleSite/* .
$ rm -rf config.toml
$ hugo server
```

Done that input adrress http://127.0.0.1:1313/ on browser will see the effect & good luck for you! :tada::tada::tada:

Execute command as below in your site directory when the theme upgrade.

```shell
$ cd hugo-next-exmaple
$ git submodule update --remote
```

## New Post

There had ready a new post template for you,  It is recommended to use the following Hugo command to quickly create a new post:

```sh
$ hugo new posts/hello-world.md
```

All front matter parameters's description in post as below:


```yml
---
title: "{{ replace .Name "-" " " | title }}"
description: "{{ .Name }}"
keywords: "{{replace .Name "-" ","}}"

date: {{ .Date }}
lastmod: {{ .Date }}

categories:
 -
tags:
  -
  -

# Post's origin author name
#author:
# Post's origin link URL
#link:
# Image source link that will use in open graph and twitter card
#imgs:
# Expand content on the home page
#expand: true
# It's means that will redirecting to external links
#extlink:
# Switch to enabled or disabled comment plugins in this post
#comment:
# enable: false
# Enable table of content
#toc: false
# Absolute link for visit
#url: "{{ lower .Name }}.html"
# Sticky post set-top in home page and the smaller nubmer will more forward.
#weight: 1
---
```

## Feedback

- Join us [GitHub Discussions](https://github.com/hugo-next/hugo-theme-next/discussions) or [Gitter](https://gitter.im/hugo-next/community) to chat :beers:
- [GitHub Issues](https://github.com/hugo-next/hugo-theme-next/issues/new?labels=Bug&template=bug-report.md) submit a new bug :bug:
- [GitHub Feature](https://github.com/hugo-next/hugo-theme-next/issues/new?labels=Feature+Request&template=feature-request.md) tell me your ideas :sparkles:

## Join us

All features development progress and new request in [Hugo NexT V4 Roadmap](https://github.com/hugo-next/hugo-theme-next/issues/9), welcome to join us and compelete it together.

## License

[MIT License](LICENSE)

Copyright (c) 2022, hugo-next teams.

## Thanks

That's my hobby to develop `Hugo NexT` theme, thanks all people who gived the donate, and let we follow it growth up.

List of Donors(Order by Date):

| Donation time | Donors | Donation mode | Donation content | Message |
| ------- | ------ | ------ | ---- | ---- |
| 2021.12.21 | z*y | wechat pay | RMB 18.88 |  / |
| 2022.05.08 | *泉 | wechat pay | RMB 6.60 | Good luck with next develop. |