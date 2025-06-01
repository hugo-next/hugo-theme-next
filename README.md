[中文](https://github.com/hugo-next/hugo-theme-next/blob/main/README.zh.md) | [English](#)

<a title="Hugo NexT Website" href="https://preview.hugo-next.eu.org">
<img align="right" alt="NexT logo" width="266" src="images/hugo-next-primary.png">
</a>

## Hugo NexT

«Hugo NexT» is a high quality elegant [Hugo](https://gohugo.io) theme. Migrate it from `Hexo` engine themes which name is [`NexT`](https://github.com/next-theme/hexo-theme-next), keep all kind page layout designs and 4 different shcemes, start new journey with :heart: and hope you would like it.

> All page designs & configuration compatibility with Hexo NexT, it's very easy migrate your site from Hexo to Hugo and enjoy yourself.

[![Build Hugo Version](https://img.shields.io/badge/Hugo-%3E=0.146.0-red?style=flat-square&logo=hugo&color=%23FF4088&&label=Hugo%20Extended)](https://github.com/gohugoio/hugo/releases/latest) [![GitHub deployments](https://img.shields.io/github/deployments/hugo-next/hugo-next.github.io/github-pages?style=flat-square&logo=GitHub&label=Github%20Pages)](https://github.com/hugo-next/hugo-theme-next)  [![Contributors](https://img.shields.io/github/contributors/hugo-next/hugo-theme-next?style=flat-square&color=%235E0D73&logo=contributorcovenant&label=Contributors)](https://github.com/hugo-next/hugo-theme-next/graphs/contributors) [![Latest Release](https://img.shields.io/github/v/release/hugo-next/hugo-theme-next?include_prereleases&style=flat-square&color=%23DD2C00&logo=semanticrelease&label=Latest%20Release)](https://github.com/hugo-next/hugo-theme-next/releases)  [![Repos Size](https://img.shields.io/github/repo-size/hugo-next/hugo-theme-next?style=flat-square&color=%23FFBF3B&logo=Files&label=Repo%20Size)](https://github.com/hugo-next/hugo-theme-next/find/main) [![GitHub](https://img.shields.io/github/license/hugo-next/hugo-theme-next?logo=webauthn&style=flat-square&label=License)](https://github.com/hugo-next/hugo-theme-next/blob/main/LICENSE)

![Screenshot](images/screenshot.png)

## 🎨 4 Scheme

* :heart_decoration: Muse
* :six_pointed_star: Mist
* :pisces: Pisces
* :gemini: Gemini (**default**)

## 👀 Live Preview

| Environment | :gemini: (**Default**) | :heart_decoration: | :six_pointed_star: | :pisces: | Status |
| :---------: | :--------------------: | :----------------: | :----------------: | :------: | :----: |
| Preliminary | [Gemini](https://preview.hugo-next.eu.org/) | [Muse](https://preview.hugo-next.eu.org/muse/) | [Mist](https://preview.hugo-next.eu.org/mist/) | [Pisces](https://preview.hugo-next.eu.org/pisces/) | ![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=preview-hugo-next&style=for-the-badge) |
| Production |  [Gemini](https://hugo-next.eu.org/) | [Muse](https://hugo-next.eu.org/muse/) | [Mist](https://hugo-next.eu.org/mist/) | [Pisces](https://hugo-next.eu.org/pisces/) | ![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=hugo-next&style=for-the-badge) |

> [!NOTE]
> - Preliminary: all new feature developments will be previewed as soon as possible.
> - Production: Only the features that are tested stably and meet the requirements will be officially released.

## 👣 Quick Start

Before use `Hugo NexT` theme, please make sure installed `Git` & `Hugo Extended` software in your PC.

### 📦 Install Hugo

If you want to quickly preview the actual effect of the theme, you can directly clone the repository code of the current theme and run the example site:

```shell
$ git clone --single-branch -b main https://github.com/hugo-next/hugo-theme-next.git hugo-theme-next
$ cd hugo-theme-next/exampleSite/
$ sh startup.sh
```

Open a computer browser and enter `http://127.0.0.1:1414/`, then you can access and view it.

### 📰 Use Template

If there your first time build blog site, Recommended use template of `Github` which can easily create your site code. Click & visit this repository: [hugo-theme-next-starter](https://github.com/hugo-next/hugo-theme-next-starter), then click the green button which name call `Use this template` upper right corner on the page. Just like below image:

![Use Template](images/use-hugo-next-starter.png)

After do that click the green button which name call `Create repository from template`, then will create your site code automatic, and clone it on your PC environment.

### 📐 Direct Reference

If you had a blog site, then use `submodule` to lead into the theme, see below commands:

```shell
$ cd hugo-next-example
$ git submodule add https://github.com/hugo-next/hugo-theme-next.git themes/hugo-theme-next
$ cp themes/hugo-theme-next/exampleSite/hugo.yaml .
$ mv hugo.toml hugo.toml.backup
```

Or use `Hugo module` to lead into the theme, see below commands:

```shell
$ cd hugo-next-example
$ hugo mod init hugo-next-example
$ wget -O hugo.yaml https://github.com/hugo-next/hugo-theme-next/raw/main/exampleSite/hugo.yaml
$ sed -i 's/hugo-theme-next/github.com\/hugo-next\/hugo-theme-next\/v4/' hugo.yaml
$ mv hugo.toml hugo.toml.backup
```

### 💻 Preview on Local

```shell
$ cd hugo-next-example
$ hugo server
```

Done that input address http://127.0.0.1:1313/ on browser will see the effect & good luck for you! :tada::tada::tada:

> [!NOTE]
> Don't use `hugo server` command deploy your site and enable internet visit, it just used to preview when you develop on local environment. Recommended use `hugo` command build static files all site, then deploy them into Web server such as `Nginx`.

### 🔄 Upgrade Theme

Execute command as below in your site directory when the theme upgrade.

```shell
$ cd hugo-next-example
$ git submodule update --remote
```

Execute command as below if you are using `Hugo module`:

```shell
$ cd hugo-next-example
$ hugo mod get -u
```

## 📝 New Post

There had ready a new post template for you,  It is recommended to use the following Hugo command to quickly create a new post:

```sh
$ hugo new posts/hello-world.md
```

> [!NOTE]
> By default `hugo new` command will create new post under `content` root directory, so in here `posts` were you custom subfolder in `content` root directory.
> At the same time, you can also add different folders for classification management. For example: `content/life/`, `content/blog/`, `content/docs/` etc,
> And add these folders to the `mainSections` configuration item in the `hugo.yaml` file.
> Additionally, it is necessary to keep the `content/archives` folder and create a `_index. md` file within it, which will serve as the default page for article archiving.

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
# Disabled comment plugins in this post
#comment:
# enable: false
# Disable table of content int this post
# Notice: By default will automatic build table of content 
# with h2-h4 title in post and without other settings
#toc: false
# Absolute link for visit
#url: "{{ lower .Name }}.html"
# Sticky post set-top in home page and the smaller number will more forward.
#weight: 1
# Support Math Formulas render, options: mathjax, katex
#math: mathjax
---
```

## 🎉 User's Cases

- [Hugo Docs & Demo](https://hugo-next.eu.org/)
- [凡梦星尘空间站](https://lisenhui.cn/)
- [阿哈吉](https://a.happy2008.top/)
- [研究僧](https://yuanlucas.com/)
- [Zero's Record](https://izeroo.cn/)
- [More Cases](https://hugo-next.eu.org/flinks.html)

Hope could submit your site information in this file [flinks.yaml](https://github.com/hugo-next/hugo-next-docs/blob/develop/data/flinks.yaml) end line such as below code style when you use `Hugo NexT` theme, thanks.

```yaml
- name: NexT 主题
  desc: 保持简单的易用性和强大的功能
  avatar: https://hugo-next.eu.org/imgs/hugo_next_avatar.png
  link: https://hugo-next.eu.org
```

## 🙋 Feedback

- Join us [GitHub Discussions](https://github.com/hugo-next/hugo-theme-next/discussions) or [Gitter](https://gitter.im/hugo-next/community) to chat :beers:
- [GitHub Issues](https://github.com/hugo-next/hugo-theme-next/issues/new?labels=Bug&template=bug-report.md) submit a new bug :bug:
- [GitHub Feature](https://github.com/hugo-next/hugo-theme-next/issues/new?labels=Feature+Request&template=feature-request.md) tell me your ideas :sparkles:

## 👨‍👩‍👧‍👦 Join us

All features development progress and new request in [Hugo NexT V4 Roadmap](https://github.com/hugo-next/hugo-theme-next/issues/9), welcome to join us and complete it together.

[![Contributors](https://contrib.rocks/image?repo=hugo-next/hugo-theme-next)](https://github.com/hugo-next/hugo-theme-next/graphs/contributors)

[![HugoNexT Stars](https://starchart.cc/hugo-next/hugo-theme-next.svg?variant=adaptive)](https://github.com/hugo-next/hugo-theme-next/stargazers)

## 📜 License

[MIT License](LICENSE)

Copyright (c) 2022, hugo-next teams.

## 💖 Thanks

It's my hobby to develop `Hugo NexT` theme, thanks all people who donated, and let we follow it growth up.

List of Donors(Order desc by Date):

| Donation time | Donors | Donation mode | Donation content | Message                                                                    |
| :-----------: | ------ | ------------- | ---------------- | -------------------------------------------------------------------------- |
|  2024.05.11  | *祥    | alipay        | RMB 66.66        | Thank you for creating such a great theme.                                 |
|  2023.07.25  | *五    | alipay        | RMB 50.00        | I really like the 'Next' theme, thank you, let me buy you a cup of coffee. |
|  2023.06.01  | **霖   | alipay        | RMB 10.00        | /                                                                          |
|  2022.11.15  | f888   | xianyu        | RMB 6.20         | Good luck.                                                                 |
|  2022.09.30  | *軒    | wechat pay    | RMB 66.66        | Hope it could help more people.                                            |
|  2022.09.30  | N*l    | wechat pay    | RMB 20.00        | /                                                                          |
|  2022.07.09  | *风    | wechat pay    | RMB 10.00        | /                                                                          |
|  2022.05.08  | *泉    | wechat pay    | RMB 6.60         | Good luck with next develop.                                               |
|  2022.02.28  | *娇    | wechat pay    | RMB 5.00         | /                                                                          |
|  2021.12.21  | z*y    | wechat pay    | RMB 18.88        | /                                                                          |
