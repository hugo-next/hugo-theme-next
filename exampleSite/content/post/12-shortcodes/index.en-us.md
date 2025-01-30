---
title:  "Custom shortcode example"
description:  "Set commonly used block references, label cards, buttons, and other information as short codes for quick referencing"
Keywords: "short code, short code"

date: 2025-01-29T21:08:50+08:00
lastmod: 2025-01-29T21:08:50+08:00

categories:
  - Example
  - Grammar
tags:
  - ShortCode
  - Grammar
url: "demo/shortcodes.html"
toc: true
---

Although the `Markdown` syntax is already very rich and can meet the vast majority of our writing needs, in order to better layout the content of the article in a more friendly way, a set of custom phrases has been designed for citation, which can be quickly referenced when used.

<!--more-->

## Block reference

When quoting some classic quotes, this phrase can be used. The grammar reference is as follows:

```markdown
{{</* quote */>}}

###  block quote

Write down the words you want to express!
{{</* /quote */>}}
```

Actual effect:

{{< quote >}}

Hope is indifferent to existence, indifferent to nothingness, just like the road on earth.


In fact, there is no road on the ground, and with more people walking, it becomes a road.

**Lu Xun**

{{< /quote >}}

## Information Block

Support 'default'` The presentation of five different effects, including info, success, warning, and danger, with the following syntax reference:

```markdown
{{</* note [class] [no-icon] */>}}
Write and express information
Support Markdown syntax
{{</* /note */>}}
```

Actual effect:

{{< note default no-icon >}}

###  Default Header without icon

**Welcome** to [Hugo NexT!](https://preview.hugo-next.eu.org)
{{< /note >}}

{{< note default >}}
###  Default Header
**Welcome** to [Hugo NexT!](https://preview.hugo-next.eu.org)
{{< /note >}}

{{< note primary >}}
###  Primary Header
**Welcome** to [Hugo NexT!](https://preview.hugo-next.eu.org)
{{< /note >}}

{{< note info >}}
###  Info Header
**Welcome** to [Hugo NexT!](https://preview.hugo-next.eu.org)
{{< /note >}}

{{< note success >}}
###  Success Header
**Welcome** to [Hugo NexT!](https://preview.hugo-next.eu.org)
{{< /note >}}

{{< note warning >}}
###  Warning Header
**Welcome** to [Hugo NexT!](https://preview.hugo-next.eu.org)
{{< /note >}}

{{< note danger >}}
###  Danger Header
**Welcome** to [Hugo NexT!](https://preview.hugo-next.eu.org)
{{< /note >}}


## Bilibili video

```markdown
{{</* bilibili BV1Sx411T7QQ */>}}
perhaps
{{</* bilibili id=BV1Sx411T7QQ */>}}
```
{{< bilibili id=BV1Sx411T7QQ >}}

## Music player

Based on [Player](https://github.com/DIYgod/APlayer) And [MatingJS](https://github.com/metowolf/MetingJS) The library implements a responsive music player embedded in the meeting, with automatically recognized music platform URLs, including:` Netease, Tencent, Kugou, Baidu, and Xiami platforms also support user-defined music sources. Other relevant parameter explanations are as follows:

|Parameter Name | Default | Description|
| :----: | :------: | :--- |
| **id** | _Required_  | Music ID, which is the unique identifier of the music on the music platform |
| **server** | _Required_  | Music platform, supports `netease`、 `tencent`、 `kugou`、 `baidu` and `xiami` |
| **type** | _Required_  | Play type, currently supports `song` 、 `playlist`、 `album`、 `search` and `artist` |
| **auto** | _Optional_  | Music address, only supports the platform in the server parameter |
| **theme** | `#448aff`  | The theme color of the player defaults to `#448aff` |
| **url** | Empty  |Custom music source URL, default to empty |
| **name** | Empty | Music name, default to empty |
| **artist** | Empty  | Music author, default to empty |
| **cover** | Empty  | Music cover URL, default to empty |
| **fixed** | `false` | Fixed player, default to `false` |
| **mini** | `false`  | Display mini player, default to `false` |
| **autoplay** | `false`  | Autoplay the music, default to `false` |
| **loop** | `all`  | Loop playback, supports `all`、`one` and `none`，default to `all` |
| **order** | `list`  | Play order `list` and `random`，default to `list` |
| **volume** | `0.7`  | Volume, default is `0.7` |
| **mutex** | `true` | When multiple pieces of music are playing, should only the current player be turned on，default to `true` |
| **list-folded** | `false`  | List collapse, default is `false` |
| **list-max-height** | `340px`  | The maximum height of the list is 340px by default |

### Single playback

```markdown
{{</* music theme="#2980b9" server="tencent" type="song" id="002u4ZTb0CXmJA" mini="true" */>}}
```

{{< music theme="#2980b9" server="tencent" type="song" id="002u4ZTb0CXmJA" mini="true" >}}

### List playback

```markdown
{{</* music server="netease" type="playlist" id="1982066521" list-max-height="140" */>}}
```

{{< music server="netease" type="playlist" id="1982066521" list-max-height="140" >}}

### Customize music source

```markdown
{{</* music url="/music/sky.mp3" name="Sky City" artist="Hayao Miyazaki" cover="/music/gongqijun.jpg" autoplay="true" */>}}
```

{{< music url="/music/sky.mp3" name="City of the Sky" artist="Hayao Miyazaki" cover="/music/gongqijun.jpg" autoplay="true" >}}