---
title:  Mathematical Formula Rendering
description:  The theme supports mathematical formula rendering schemes for two different plugins, mathjs and katex
keywords: "math,formula"

date: 2025-01-29T20:50:02+08:00
lastmod: 2025-01-29T20:50:02+08:00

categories:
  - ThirdParty
  - Mathematical
tags:
  - Mathematical
  - mathjax
  - katex


url: "demo/math-formula.html"
math: mathjax
---

This theme supports two different schemes, `mathjax` and `katex`, and supports rendering mathematical formulas. You can choose according to your own needs.

<!--more-->

In the following example, [MathJax](https://www.mathjax.org/) will be used Plan to showcase rendering effects.

{{< note info >}}

- Create a new article using the `hugo new` command;
- You can globally enable data formula rendering. Please configure the parameter `math: katex` or `math: mathjax` in the article front parameters;
- Or configure the parameter to the header of the page where mathematical formulas need to be displayed.
> reducing unnecessary resource loading consumption

{{< /note >}}

**Attention:** Use [Supported TeX Features](https://docs.mathjax.org/en/latest/input/tex/index.html) Online reference materials.

## Example

### Insider formula

Quadratic formula:$ Ax ^ 2+bx+c=0 $(supports using ` \ $...)\$` Format of inline formulas

Quadratic formula (line break display formula) $$ax ^ 2+bx+c=0$$

The more complex formula is as follows:$ \lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}$ 

Other inline formulas display ( _score_ _expression_ ): \(\frac{1}{2}\) (Supports inline formula effects in `\(...\)` format)


### Repeated scores

$$
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} \equiv 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }
$$


### Sum mark

$$
\left(\sum_{k=1}^n a_k b_k \right)^2 \leq \left(\sum_{k=1}^n a_k^2 \right) \left(\sum_{k=1}^n b_k^2 \right)
$$


### Sum of geometric series

I have divided the next two examples into several lines so that they perform better on mobile phones. That's why they contain '\ display style'. Alternatively, truncation can be performed using syntax similar to '\ showlines {x=a+b \ \ y=b+c}', as detailed in: [mathjax-issues2312](https://github.com/mathjax/MathJax/issues/2312)

$$
\displaystyle\sum_{i=1}^{k+1}i
$$

$$
\displaystyle= \left(\sum_{i=1}^ {k}i \right) +(k+1)
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

### Riding symbols

$$
\displaystyle 1 + \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots = 
$$

$$
\displaystyle \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, 
\displaystyle\text{ for }\lvert q\rvert < 1.
$$


### Random number formula

These are some linear mathematics:$ k_{n+1} = n^2 + k_n^2 - k_{n-1} $ ，  Then there are more texts.


### Greek alphabet

$$
\displaylines{\Gamma\ \Delta\ \Theta\ \Lambda\ \Xi\ \Pi\ \Sigma\ \Upsilon\ \Phi\ \Psi\ \Omega
\alpha\ \beta\ \gamma\ \delta\ \epsilon\ \zeta\ \\\\ \eta\ \theta\ \iota\ \kappa\ \lambda\ \mu\ \nu\ \xi \ \omicron\ \pi\ \rho\ \sigma\ \tau\ \upsilon\ \phi\ \chi\ \psi\ \omega\ \varepsilon\ \vartheta\ \varpi\ \varrho\ \varsigma\ \varphi}
$$

### Arrow

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


## Symbols

$$
\surd\ \barwedge\ \veebar\ \odot\ \oplus\ \otimes\ \oslash\ \circledcirc\ \boxdot\ \bigtriangleup
$$

$$
\bigtriangledown\ \dagger\ \diamond\ \star\ \triangleleft\ \triangleright\ \angle\ \infty\ \prime\ \triangle
$$


### Calculus

$$
\int u \frac{dv}{dx}\,dx=uv-\int \frac{du} {dx}v \, dx
$$

$$
f(x) = \int_{-\infty}^\infty \hat f(\xi)\,e^{2 \pi i \xi x}
$$

$$
\oint \vec{F} \cdot d\vec{s}=0
$$


### Lorenz equation

$$
\begin{aligned} \dot{x} & = \sigma(y-x) \\\\ \dot{y} & = \rho x - y - xz \\\\ \dot{z} & = -\beta z + xy \end{aligned}
$$


### Cross product

This is feasible in KaTeX, but the separation of fractions is not very good in this environment.

$$
\mathbf {V}_1  \times \mathbf {V}_2  = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\\\ \frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \\\\ \frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0 \end{vmatrix}
$$

Here is a solution: use additional classes of the "mfrac" class (no difference in the case of MathJax) to make the score smaller:

$$
\mathbf {V}_1  \times \mathbf {V}_2  = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\\\ \frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \\\\ \frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0 \end{vmatrix}
$$


## Emphasize

$$
\hat{x}\ \vec{x}\ \ddot{x}
$$


### Elastic parentheses

$$
\left(\frac{x^2}{y^3}\right)
$$


### Scope of evaluation

$$
\left. \frac{x^3}{3}\right|_0^1
$$


### Diagnostic criteria

$$
f(n) = \begin{cases} \frac{n}{2}, & \text{if } n\text{ is even} \\\\ 3n+1, & \text{if } n\text{ is odd} \end{cases}
$$


### Maxwell's equations system

$$
\begin{aligned} \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}} \\\\ \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\\\ \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\\\ \nabla \cdot \vec{\mathbf{B}} & = 0 \end{aligned}
$$


## Statistics

Fixed phrases:$$ \frac{n!}{k!(n-k)!} = {^n}C_k{n \choose k}$$

### Score in Score

$$
\frac{\frac{1}{x}+\frac{1}{y}}{y-z}
$$


### Nth root

$$
\sqrt[n]{1+x+x^2+x^3+\ldots}
$$


### Matrix

$$
\begin{pmatrix} a_{11} & a_{12} & a_{13}\\\\ a_{21} & a_{22} & a_{23}\\\\ a_{31} & a_{32} & a_{33} \end{pmatrix}
\begin{bmatrix} 0 & \cdots & 0 \\\\ \vdots & \ddots & \vdots \\\\ 0 & \cdots & 0 \end{bmatrix}
$$


## Punctuation marks

$$
f(x) = \sqrt{1+x} \quad (x \ge -1)
f(x) \sim x^2 \quad (x\to\infty)
$$

Now use punctuation marks:

$$
f(x) = \sqrt{1+x}, \quad x \ge -1
f(x) \sim x^2, \quad x\to\infty
$$