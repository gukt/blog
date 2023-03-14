---
date: 2023/2/13 10:46:25
tags: [jupyter, python]
cover: https://images.unsplash.com/photo-1605036683982-d31ba38d90bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80
---

# 启动 Jupyter Notebook 内核时，出现 "Failed to start the Kernel AttributeError KQueueIOLoop object has no attribute asyncio_loop" 错误的解决方案

在使用 Jupyter Notebook 进行编程时，有时会遇到如标题所示的启动内核失败的情况。本文将分析并解决此问题。

## 问题描述

在启动 Jupyter Notebook 内核时，出现以下错误：

```bash
Failed to start the Kernel. 
AttributeError: 'KQueueIOLoop' object has no attribute 'asyncio_loop'. 
View Jupyter log for further details.
```

## 原因分析

此错误通常是由于 Tornado 库的版本问题所引起的。在 Jupyter Notebook 内核启动过程中，Tornado 库会被加载并使用。然而，在早期的 Tornado 版本中，它没有 asyncio_loop 属性。因此引发了上述错误。

## 解决方案

要解决此问题，请升级 Tornado 库。

```bash
pip install --upgrade tornado
```

确认 Tornado 库已成功升级。

```bash
pip show tornado
Name: tornado
Version: 6.1
...
```

再次启动 Jupyter Notebook，问题解决。


