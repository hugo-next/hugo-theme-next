---
title: "Mermaid支持流程图"
description: "mermaid-flow-chart"
keywords: "mermaid,flow,chart"

date: 2022-09-18T20:58:13+08:00
lastmod: 2022-09-18T20:58:13+08:00

categories:
  - 第三方引入
  - 图序功能
tags:
  - 流程图
  - 时序图

url: "post/mermaid-charts.html"
mermaid: true
toc: true
---


本主题已支持 `Mermaid` 实现以纯文本的方式绘制流程图、序列图、甘特图、状态图、关系图行等等，随着 `Mermaid` 也在逐步发展，后续还会有各种各样的图被引入进来，更多的类型及使用方式可关注其官方网站：[https://mermaid-js.github.io/](https://mermaid-js.github.io/)。

<!--more-->

## 使用说明

{{< note info >}}

- 通过 `hugo new` 命令创建一篇新的文章
- 在文章头部配置 `mermaid: true`
- 使用短代码书写各种类型的图，自带2个参数： align（对齐） 和 bc（背景色），可参考如下使用示例

{{< /note >}}

## 流程图

```shell
{{</* mermaid align="left" */>}}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
{{</* /mermaid */>}}
```

{{< mermaid align="left" >}}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
{{< /mermaid >}}

## 时序图

```shell
{{</* mermaid bc="#eee"  */>}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
{{</* /mermaid */>}}
```

{{< mermaid bc="#eee" >}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
{{< /mermaid >}}

## 类图

```shell
{{</* mermaid */>}}
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
{{</* /mermaid */>}}
```
{{< mermaid >}}
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
{{< /mermaid >}}

## 甘特图

```shell
{{</* mermaid */>}}
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d
{{</* /mermaid */>}}
```
{{< mermaid >}}
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d
{{< /mermaid >}}

## 实体关系图

```shell
{{</* mermaid */>}}
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{{</* /mermaid */>}}
```
{{< mermaid >}}
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{{< /mermaid >}}

## 用户旅程

```shell
{{</* mermaid */>}}
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
{{</* /mermaid */>}}
```
{{< mermaid >}}
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
{{< /mermaid >}}
