---
title: "数学公式渲染"
description: "主题支持mathjs和katex两种不同插件的数学公式渲染方案。"
keywords: "math,formula"

date: 2022-09-11T10:16:02+08:00
lastmod: 2022-09-11T10:16:02+08:00

categories:
  - 第三方引入
  - 数学公式
tags:
  - 数学公式
  - mathjax
  - katex


url: "post/math-formula.html"
math: mathjax
---

本主题支持 `mathjax` 和 `katex` 两种不的方案支持数学公式的渲染，可根据自已的需求进行选择。

<!--more-->

接下的示例中，将使用 [MathJax](https://www.mathjax.org/) 方案来展示渲染效果。

{{< note info >}}

- 使用 `hugo new` 命令创建一篇新的文章
- 可以全局启用数据公式渲染，请在项目配置参数 `math: katex` 或 `math: mathjax`
- 或是将该参数配置到需要显示数学公式的页面头部（减少不必要的加载消耗）

{{< /note >}}

**注意：**  使用[支持的TeX功能](https://docs.mathjax.org/en/latest/input/tex/index.html)的联机参考资料。

## 例子


### 重复的分数
$$
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} \equiv 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }
$$


### 总和记号
$$
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$


### 几何级数之和
我把接下来的两个例子分成了几行，这样它在手机上表现得更好。这就是为什么它们包含 `\displaystyle`。或者可使用类似 `\displaylines{x = a + b \\\ y = b + c}` 语法进行截断，具体信息可见：[mathjax-issues2312](https://github.com/mathjax/MathJax/issues/2312)

$$
\displaystyle\sum_{i=1}^{k+1}i
$$

$$
\displaystyle= \left(\sum_{i=1}^{k}i\right) +(k+1)
$$

$$
\displaystyle= \frac{k(k+1)}{2}+k+1
$$

$$
\displaystyle= \frac{k(k+1)+2(k+1)}{2}
$$

$$
\displaystyle= \frac{(k+1)(k+2)}{2}
$$

$$
\displaystyle= \frac{(k+1)((k+1)+1)}{2}
$$

### 乘记号
$$
\displaystyle 1 + \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots = 
$$

$$
\displaystyle \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, 
\displaystyle\text{ for }\lvert q\rvert < 1.
$$


### 随文数式
这是一些线性数学: $$ k_{n+1} = n^2 + k_n^2 - k_{n-1} $$ ， 然后是更多的文本。


### 希腊字母
$$
\displaylines{\Gamma\ \Delta\ \Theta\ \Lambda\ \Xi\ \Pi\ \Sigma\ \Upsilon\ \Phi\ \Psi\ \Omega
\alpha\ \beta\ \gamma\ \delta\ \epsilon\ \zeta\ \\\\ \eta\ \theta\ \iota\ \kappa\ \lambda\ \mu\ \nu\ \xi \ \omicron\ \pi\ \rho\ \sigma\ \tau\ \upsilon\ \phi\ \chi\ \psi\ \omega\ \varepsilon\ \vartheta\ \varpi\ \varrho\ \varsigma\ \varphi}
$$


### 箭头
$$
\gets\ \to\ \leftarrow\ \rightarrow\ \uparrow\ \Uparrow\ \downarrow\ \Downarrow\ \updownarrow\ \Updownarrow
$$

$$
\displaylines{\Leftarrow\ \Rightarrow\ \leftrightarrow\ \Leftrightarrow\ \mapsto\ \hookleftarrow
\leftharpoonup\ \leftharpoondown\ \\\\\ \rightleftharpoons\ \longleftarrow\ \Longleftarrow\ \longrightarrow}
$$

$$
\Longrightarrow\ \longleftrightarrow\ \Longleftrightarrow\ \longmapsto\ \hookrightarrow\ \rightharpoonup
$$

$$
\rightharpoondown\ \leadsto\ \nearrow\ \searrow\ \swarrow\ \nwarrow
$$


## 符号
$$
\surd\ \barwedge\ \veebar\ \odot\ \oplus\ \otimes\ \oslash\ \circledcirc\ \boxdot\ \bigtriangleup
$$

$$
\bigtriangledown\ \dagger\ \diamond\ \star\ \triangleleft\ \triangleright\ \angle\ \infty\ \prime\ \triangle
$$


### 微积分学
$$
\int u \frac{dv}{dx}\,dx=uv-\int \frac{du}{dx}v\,dx
$$

$$
f(x) = \int_{-\infty}^\infty \hat f(\xi)\,e^{2 \pi i \xi x}
$$

$$
\oint \vec{F} \cdot d\vec{s}=0
$$


### 洛伦茨方程
$$
\begin{aligned} \dot{x} & = \sigma(y-x) \\\\ \dot{y} & = \rho x - y - xz \\\\ \dot{z} & = -\beta z + xy \end{aligned}
$$


### 交叉乘积
这在KaTeX中是可行的，但在这种环境中馏分的分离不是很好。

$$
\mathbf{V}_1 \times \mathbf{V}_2 = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\\\ \frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \\\\ \frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0 \end{vmatrix}
$$

这里有一个解决方案:使用“mfrac”类(在MathJax情况下没有区别)的额外类使分数更小:

$$
\mathbf{V}_1 \times \mathbf{V}_2 = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\\\ \frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \\\\ \frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0 \end{vmatrix}
$$


## 强调
$$
\hat{x}\ \vec{x}\ \ddot{x}
$$


### 有弹性的括号
$$
\left(\frac{x^2}{y^3}\right)
$$


### 评估范围
$$
\left.\frac{x^3}{3}\right|_0^1
$$


### 诊断标准
$$
f(n) = \begin{cases} \frac{n}{2}, & \text{if } n\text{ is even} \\\\ 3n+1, & \text{if } n\text{ is odd} \end{cases}
$$


### 麦克斯韦方程组
$$
\begin{aligned} \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}} \\\\ \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\\\ \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\\\ \nabla \cdot \vec{\mathbf{B}} & = 0 \end{aligned}
$$


## 统计学
固定词组：

$$
\frac{n!}{k!(n-k)!} = {^n}C_k
{n \choose k}
$$

### 分数在分数
$$
\frac{\frac{1}{x}+\frac{1}{y}}{y-z}
$$


### ｎ次方根
$$
\sqrt[n]{1+x+x^2+x^3+\ldots}
$$


### 矩阵
$$
\begin{pmatrix} a_{11} & a_{12} & a_{13}\\\\ a_{21} & a_{22} & a_{23}\\\\ a_{31} & a_{32} & a_{33} \end{pmatrix}
\begin{bmatrix} 0 & \cdots & 0 \\\\ \vdots & \ddots & \vdots \\\\ 0 & \cdots & 0 \end{bmatrix}
$$


## 标点符号
$$
f(x) = \sqrt{1+x} \quad (x \ge -1)
f(x) \sim x^2 \quad (x\to\infty)
$$

现在用标点符号:

$$
f(x) = \sqrt{1+x}, \quad x \ge -1
f(x) \sim x^2, \quad x\to\infty
$$