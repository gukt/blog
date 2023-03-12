---
slug: how-to-run-redis-in-docker-container
tags: [docker, redis, data]
description: 搜索 `redis` 镜像，使用 `stars` 数最高的那个
date: 2023/2/13 10:46:25
---

搜索 `redis` 镜像，使用 `stars` 数最高的那个：

```bash
$ docker search redis
```

运行 `redis` 容器：

```bash
$ VERSION=;PORT=16380; PWD='RED!!is*32'; docker run \
	-d \
  -v /data/redis:/data \
	--name redis${VERSION} \
	--restart always \
	-p $PORT:6379 \
	redis:${VERSION:-latest} redis-server \
	--requirepass "${PWD}" \
  --appendonly yes;
```

变量说明：

- `VERSION` - 版本。如果指定为空则表示安装最新版（latest）。
- `PORT` -映射到宿主机的端口。
- `PWD`：密码。

客户端连接测试：

```bash
$ docker exec -it redis redis-cli
127.0.0.1:6379> auth RED!!is*32
OK

# 输入 exit 退出
127.0.0.1:6379> exit
```

NOTE：上面的 6379 是容器中 redis 实例的运行端口。

（完）