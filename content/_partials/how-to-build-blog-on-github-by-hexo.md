---
title: 使用 Hexo 在 github 上建立博客
slug: how-to-build-blog-on-github-by-hexo
date: 2010-08-25 14:07:42
tags: [github, hexo]
---

### 初始化

运行如下命令以完成初始化操作

```javascript
$ hexo init ~/blog && cd ~/blog && cnpm install
```

成功执行后查看文件夹下的内容如下：

```
total 24
drwxr-xr-x   9 ktgu  staff   306  7 28 13:23 .
drwxr-xr-x+ 66 ktgu  staff  2244  7 28 13:23 ..
-rw-r--r--   1 ktgu  staff    65  7 28 13:23 .gitignore
-rw-r--r--   1 ktgu  staff  1477  7 28 13:23 _config.yml
drwxr-xr-x  12 ktgu  staff   408  7 28 13:24 node_modules
-rw-r--r--   1 ktgu  staff   442  7 28 13:23 package.json
drwxr-xr-x   5 ktgu  staff   170  7 28 13:23 scaffolds
drwxr-xr-x   3 ktgu  staff   102  7 28 13:23 source
drwxr-xr-x   3 ktgu  staff   102  7 28 13:23 themes
```

### 生成文件

Hexo 生成文件速度非常快，使用如下命令即可生成文件

```
$ hexo generate
或者
$ hexo g
```

### 部署到 github

Hexo 提供了便捷的一键部署功能，并且支持部署到多个目的地，如：Git，HeroKu，Rsync，OpenShift，FTPSync 等。下面以部署到 github 为例：

首先要安装 hexo-deployer-git 插件

> $ cnpm install hexo-deployer-git --save

然后打开\_config.yaml 文件，修改如下配置：

```
...
deploy:
  type: git
  repo: git@github.com:gukt/pages1.git
  branch: gh-pages
```

然后执行生成并部署

```
$ hexo g && hexo d
或者
$ hexo g --deploy
或者
$ hexo d --generate
```

若成功部署，会看到如下信息：

```
...
To git@github.com:gukt/pages.git
* [new branch]      master -> gh-pages
Branch master set up to track remote branch gh-pages from git@github.com:gukt/pages.git.
INFO  Deploy done: git
```

**注意**：如部署失败，默认不显示任何错误信息，你可以加上--debug 参数查看详情

> $ hexo d --debug

最后，打开 github 博客验证是否成功部署：

`http://{github-username}.github.io/{project-name}`
