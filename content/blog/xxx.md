---
slug: docker-registry-mirrors
tags: [docker, how-to, java, javascript, typescript, ts]
date: 2023/2/13 10:46:25
---

# 概述

常用的国内 docker 镜像下载源有：

- Docker 中国区官方镜像 - https://registry.docker-cn.com，

  NOTE：该镜像库只包含流行的公有镜像，不包含的仍然要从 registry.docker.com 下载。

- 网易 - http://hub-mirror.c.163.com

- 中国科学技术大学 - https://docker.mirrors.ustc.edu.cn

- 阿里云 - [https://<your-id>.mirror.aliyuncs.com](https://<your-id>.mirror.aliyuncs.com)

如果你有阿里云账号，可以登录 `阿里云控制台 > 容器镜像服务 > 镜像工具 > 镜像加速器` 页面。

https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors

该页面会显示一个加速器地址，比如我的地址是：https://4a6mzasx.mirror.aliyuncs.com。



## 配置镜像加速器

您可以通过修改 `daemon` 配置文件 `/etc/docker/daemon.json` 来使用加速器。

```bash
$ sudo mkdir -p /etc/docker
$ sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://4a6mzasx.mirror.aliyuncs.com"]
}
EOF
$ sudo systemctl daemon-reload
$ sudo systemctl restart docker
```

registry-mirrors 是一个数组，你可以同时指定多个下载源。

**NOTE：**如果之前已经存在 `/etc/docker/daemon.json` 文件，**以上命令会覆盖之前的内容**，此时你可以使用 `vi /etc/docker/daemon.json` 进行编辑。

> tee 命令会从标准输入设备读取数据，将其内容输出到标准输出设备，同时保存成文件。
>
> 参考：[Use tee example.txt <<EOF to quickly create a file and insert contents.](https://medium.com/@forest.dewberry/use-tee-example-txt-eof-to-quickly-create-a-file-and-insert-contents-98d267c5ea9c)



## 验证

查看 `Registry Mirrors` 是否配置成功：

```bash
$ docker info
...
 Registry Mirrors:
  https://docker.mirrors.ustc.edu.cn/
  https://4a6mzasx.mirror.aliyuncs.com/
...
```



（完）

