---
Title: "Hugo's Built in Chroma Grammar Highlighting"
description:  Describe the various syntax and highlighting effects supported by Chroma
Keywords: "Chroma, syntax, highlighting"

date: 2025-01-29T20:09:52+08:00
lastmod: 2025-01-29T20:09:52+08:00

categories:
  - Example
  - Grammar
tags:
  - Grammar
  - Highlight
  - Chroma

url: demo/syntax-highlighting.html
---

Hugo provides very fast syntax highlighting through Chroma, and now uses Chroma as code block highlighting support in Hugo. It is built into the Go language, and the speed is really, really fast. Most importantly, it is also compatible with the Pygments method we used before.

The following verifies the rendering effect of code blocks in different languages and their correct highlighting through Hugo's built-in short code 'highlight' and 'Markodown' code blocks. For more information on optimizing syntax highlighting, please refer to the [Hugo Documentation](https://gohugo.io/getting-started/configuration-markup#highlight).

<!--more-->

## Programming language

### GO

```makrdown
{{</* highlight go "linenos=table,hl_lines=8 15-17,linenostart=199" */>}}

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

{{</* / highlight */>}}
```

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

### Java

```java
import javax.swing.JFrame;  // Importing class JFrame
import javax.swing.JLabel;  // Importing class JLabel
public class HelloWorld {
public static void main(String[] args) {
JFrame frame = new JFrame();           // Creating frame
frame.setTitle("Hi!");                 // Setting title frame
frame.add(new JLabel("Hello, world!"));// Adding text to frame
frame.pack();                          // Setting size to smallest
frame.setLocationRelativeTo(null);     // Centering frame
frame.setVisible(true);                // Showing frame
}
}
```

### Python

``` python
print "Hello, world!"
```

### Git Comparison

```diff {hl_lines=[4,"6-7"], linenos=true}
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

## File

### Make file

``` makefile {linenos=false}
CC=gcc
CFLAGS=-I.

hellomake: hellomake.o hellofunc.o
$(CC) -o hellomake hellomake.o hellofunc.o -I.
```

### Markdown document

``` markdown
**bold**
*italics*
[link](www.example.com)
```

## Data content

### JSON data

``` json
{"employees":[
{"firstName":"John", "lastName":"Doe"},
]}
```

### XML Content

``` xml
<employees>
<employee>
<firstName>John</firstName> <lastName>Doe</lastName>
</employee>
</employees>
```

### SQL Query

{{< highlight sql >}}

SELECT column_name,column_name
FROM
Table
WHERE column_name = "condition"
{{< / highlight >}}

### Auto guess code highlighted

```
.highlight {

  //Other codes
  ......

  > .chroma {
    position: relative;
      
    
    //Fix code block overflow issue
    pre {
      overflow-wrap: break-word;
      white-space: pre-wrap;
      line-break: anywhere;
      word-break: break-all; 
      overflow-x: auto;
    }
  }
}
```


In addition to the code highlighting listed above, it also supports highlighting in mainstream code languages such as C, C++, HTML, CSS, Shell scripts, etc., and can be tested for effectiveness on its own.