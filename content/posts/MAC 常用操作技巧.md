---
date: 2024-02-15
---

## 如何让 `iterm2` 关闭时不提示确认框？

1. 依次打开 `Preferences` > `General` > `Closing`

![image-20230320034133229](https://typora-images.obs.cn-east-3.myhuaweicloud.com/upload/202303210234375.png)

2. 取消勾选：Disable all confirmations on system shutdown, restart, and log out

![what-is-going-on](https://906-images.obs.cn-east-3.myhuaweicloud.com/upload/202303210246570.jpg)

## 如何关闭 MAC 系统状态栏上的 “ VPN 未配置” 图标

是不是感觉怎么去都去不了？其实很简单，按以下步骤操作：

- 打开“网络偏好设置” > "网络"。
- 点击左下角的 `+` ，在弹出框中的接口下拉框中选择 `VPN`，添加一个 VPN。
- 选中刚刚添加的 VPN，将 “在菜单栏中显示 VPN 状态” 取消勾选。
- 删除刚刚添加的这个 VPN。
- 完成 👌

我看这个图标不爽了好久，感谢 [这位朋友](https://www.bilibili.com/video/av723270904/?vd_source=d63ce22867c1ccfe8aecc1518b8c6757) 提供的解决方案。

## Python 从数组中随机获取一个或多个元素

1. 随机获取一个元素

   ```python
   import random
   random.choice([1,2,3,4,5,6])
   # 输出：2
   ```

2. 随机获取多个元素

   ```python
   import random
   random.sample([1,2,3,4,5,6], 4)
   # 输出：[3, 1, 4, 5]
   ```

## 如何控制 VSCode 资源管理器中目录树的缩进？

打开“设置”，搜索：Tree: Indent，将“控制树缩进”从原来的 4 像素改为 8 像素。

参考：[How to add more indentation in the Visual Studio code explorer file tree structure?](https://stackoverflow.com/questions/55310734/how-to-add-more-indentation-in-the-visual-studio-code-explorer-file-tree-structu)

## 如何显示 VSCode 正在运行的扩展

`Command + P` > Developer: Show Running Extensions

在扩展里搜索 @enabled ，每个启用的插件后面也显示了启动时间。

重点检查超过 300 ms 的扩展。

点击右上角的圆形按钮，可以分析每个扩展的性能。

如果你想看看 VSCode 启动时发生了什么？可以按 Command + P 后，输入 Developer Startup Performance。

## 如何为 NPM 设置代理？

先检查一下 npm 当前设置。

```bash
$ npm config list
```

设置代理

```bash
$ npm config set proxy http://127.0.0.1:7890
$ npm config set https-proxy http://127.0.0.1:7890
```
