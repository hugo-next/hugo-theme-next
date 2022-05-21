---
title: '{{ replace .Name "-" " " | title }}'
description: 'Short description of the article.'
keywords: 'Key words'
isCJKLanguage: true

author: 'Author of the article'
lastmod: '{{ .Date }}'
publishDate: '{{ .Date }}'
weight: 1

categories:
 -
tags:
 -
 -

toc: false
draft: true
url: '{{ lower .Name }}.html'
---
