---
tags: [docker, private-registry, dev, tech, faq, troubleshooting]
date: 2022/3/13 10:46:25
update: 2022/3/23 10:45:22
_path: /blog/fix-docker-private-registry-https-error
cover: https://cdn.pixabay.com/photo/2021/05/21/17/30/ship-6271649__480.jpg
layout: article
---

# 执行 docker pull 从远程私有仓库下载镜像时，抛出 HTTPS 访问错误的解决方案 2

如果你的 Docker 私有仓库不支持通过 HTTPS 访问，当你从远程私有仓库下载镜像时就会出现 HTTPS 访问错误。本文将解决此问题。

## 问题描述

### H3 问题描述问题描述问题描述问题描述

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.

#### H4 问题描述

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.

##### H5问题描述

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.

###### H6问题描述

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.

当使用 "docker pull" 命令从远程私有仓库下载镜像时，可能会抛出以下错误：

```bash
Error response from daemon: Get <https://registry.example.com/v2/> http: server gave HTTP response to HTTPS client
```

## 原因分析

这是因为私有仓库没有提供通过 HTTPS 访问的方式，而 "docker pull" 命令默认使用 HTTPS 访问私有仓库。

### H3 问题描述问题描述问题描述问题描述

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.

## 解决方案

要解决这个问题，需要在执行 `docker pull` 命令的主机上的 `/etc/docker/daemon.json` 配置文件中的 `insecure-registries` 字段中添加你的私有仓库地址。

### H3 问题描述问题描述问题描述问题描述

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.

```json
{
    "insecure-registries": [
        "registry.example.com"
    ],
    "registry-mirrors": [
      "https://docker.mirrors.ustc.edu.cn"
    ]
}
```

1. `insecure-registries` 是一个数组，可以添加多个地址。
2. `registry-mirrors` 是之前添加的镜像加速源地址列表。如果你之前没有设置过该项，则 `/etc/docker/daemon.json` 文件可能不存在。
3. 如果没有这个字段，甚至没有 `/etc/docker/daemon.json` 文件，你可以手动创建，添加并设置 `insecure-registries` 字段。

保存退出，重启 Docker。

```bash
sudo systemctl restart docker
```

## 参考

- https://github.com/docker/distribution/issues/1874

- http://stackoverflow.com/questions/38695515/can-not-pull-push-images-after-update-docker-to-1-12









