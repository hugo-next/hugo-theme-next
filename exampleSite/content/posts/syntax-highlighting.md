---
title: "Hugo 内置的 Chroma 语法高亮"
description: "描述下 Chroma 所支持的各种语法及高亮效果展示"
keywords: "Chroma,语法,高亮"

date: 2022-06-07T19:09:52+08:00
lastmod: 2022-06-07T19:09:52+08:00

categories:
 - 示例
tags:
  - 语法
  - 高亮
  - Chroma

url: post/syntax-highlighting.html
---

Hugo 通过 Chroma 提供非常快速的语法高亮显示，现 Hugo 中使用 Chroma 作为代码块高亮支持，它内置在 Go 语言当中，速度是真的非常、非常快，而且最为重要的是它也兼容之前我们使用的 Pygments 方式。

以下通过 Hugo 内置短代码 `highlight` 和 `Markdown` 代码块方式分别验证不同语言的代码块渲染效果并能正确高亮显示，有关优化语法突出显示的更多信息，请参阅 [Hugo 文档](https://gohugo.io/getting-started/configuration-markup#highlight)。

<!--more-->

# 编程语言

## GO

{{< highlight go "linenos=table,hl_lines=8 15-17,linenostart=199" >}}

func GetTitleFunc(style string) func(s string) string {
  switch strings.ToLower(style) {
  case "go":
    return strings.Title
  case "chicago":
    return transform.NewTitleConverter(transform.ChicagoStyle)
  default:
    return transform.NewTitleConverter(transform.APStyle)
  }
}

{{< / highlight >}}

## Java

```java
import javax.swing.JFrame;  //Importing class JFrame
import javax.swing.JLabel;  //Importing class JLabel
public class HelloWorld {
    public static void main(String[] args) {
        JFrame frame = new JFrame();           //Creating frame
        frame.setTitle("Hi!");                 //Setting title frame
        frame.add(new JLabel("Hello, world!"));//Adding text to frame
        frame.pack();                          //Setting size to smallest
        frame.setLocationRelativeTo(null);     //Centering frame
        frame.setVisible(true);                //Showing frame
    }
}
```

## Python

``` python
print "Hello, world!"
```

## Git 对比

``` diff {hl_lines=[4,"6-7"]， linenos=true}
*** /path/to/original ''timestamp''
--- /path/to/new  ''timestamp''
***************
*** 1 ****
! This is a line.
--- 1 ---
! This is a replacement line.
It is important to spell
-removed line
+new line
```

```diff {hl_lines=[4,"6-7"], linenos=false}
*** /path/to/original ''timestamp''
--- /path/to/new  ''timestamp''
***************
*** 1 ****
! This is a line.
--- 1 ---
! This is a replacement line.
It is important to spell
-removed line
+new line
```

# 文件

## Make 文件

``` makefile {linenos=false}
CC=gcc
CFLAGS=-I.

hellomake: hellomake.o hellofunc.o
     $(CC) -o hellomake hellomake.o hellofunc.o -I.
```

## Markdown 文档

``` markdown
**bold**
*italics*
[link](www.example.com)
```

# 数据内容

## JSON 数据

``` json
{"employees":[
    {"firstName":"John", "lastName":"Doe"},
]}
```

## XML 内容

``` xml
<employees>
    <employee>
        <firstName>John</firstName> <lastName>Doe</lastName>
    </employee>
</employees>
```

## SQL 查询

{{< highlight sql >}}

SELECT column_name,column_name
FROM
  Table
WHERE column_name = "condition"
{{< / highlight >}}


除以上列举的代码高亮显示外，还支持诸如：C 语言、C++、HTML、CSS、Shell脚本等各主流的代码语言高亮显示，可自行测试效果。