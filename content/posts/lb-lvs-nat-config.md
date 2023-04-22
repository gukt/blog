title: 负载均衡(2) - LVS/NAT配置
s: lb-lvs-nat-config
date: 2008-08-22 10:15:25
tags: [linux, load balancer, ipvs, lvs, howto]
---
本文记录LVA/NAT模式的配置过程，先对接下来出现的名词做必要的解释

*   Director（负载均衡器）
*   RS（Real Server，真实服务器）
*   VIP（Virtual IP，虚拟IP，该IP用在负载均衡器上用以对外提供服务）
*   DIP（Director的内网IP）

## 1. Director服务器配置

在NAT模式下，Director需要能够转发报文给RS，因此首先要开启IP路由转发功能，缺省情况是默认关闭的。

#### 开启路由转发功能

```
> # 开启IP路由转发，以便Director能将IP报文转发给对应的RS
> `$ echo 1 > /proc/sys/net/ipv4/ip_forward`
```

或者打开相关配置文件进行如下设置

```
$ vim /etc/sysctl.conf
# 设置：net.ipv4.ip_forward = 1
$ sysctl -p
```

#### 绑定VIP到当前网卡

VIP作为对外服务的IP，要将其绑定到Director的网卡上（下面是使用了别名）

```
$ ifconfig eth0:1 10.0.0.1 broadcast 10.255.255.255 netmask 255.0.0.0 up
```

#### 设置Director，并且添加RS

Linux内核为我们提供了用于管理ipvs模块的工具`ipvsadm`，下面利用该工具来对Director进行相关设置，包括：添加RS以及设置调度算法等。

```
$ ipvsadm -C
$ ipvsadm -A -t 10.0.0.1:80 -s rr
$ ipvsadm -a -t 10.0.0.1:80 -r 172.16.115.103:80 -m
$ ipvsadm -a -t 10.0.0.1:80 -r 172.16.115.104:80 -m
```

#### 检查IPVS模块配置信息

完成配置，现在可以使用命令查看ipvs模块配置信息

```
$ ipvsadm -ln

IP Virtual Server version 1.2.1 (size=4096)
Prot LocalAddress:Port Scheduler Flags
  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn
TCP  10.0.0.1:80 rr
  -> 172.16.115.103:80            Masq    1      0          1         
  -> 172.16.115.104:80            Masq    1      0          1         
```

至此，完成了对Director的配置！

### 2. RS服务器配置

#### 设置默认网关为DIP

由于在NAT模式下，RS处理报文完成后，需要将响应报文回发给Director，因此，最简单的办法就是在RS的路由表中添加一个新的默认路由为：DIP，除此以外，RS不用做任何其他配置。

```
$ route del default
$ route add default gw 172.16.115.101
```

然后，检查刚刚添加的默认路由是否在路由表中

```
$ route
```

#### 确认VS/NAT是否正常工作

在每台RS上都进行如下配置：

``` bash
# 安装Apache web服务器
$ yum -y install httpd.x86_64

# 启动apache服务器
$ service httpd start

# 创建index.html,并设置简单的内容,其中：RS1上的index.html内容设置为'web1',RS2上设置为'web2'
$ vim /var/www/html/index.html 

# 为了测试方便，关闭RS上的防火墙
$ service iptables stop
```
 
在Client上确认IPVS是否正常的转发请求到相应的RS,多次执行curl请求VIP

```
$ curl 10.0.0.1
web1
$ curl 10.0.0.1
web2
$ curl 10.0.0.1
web1
```

从上述命令输出可以看出，交替输出web1和web2字符串，说明Director已经正常工作，并且执行的是轮询策略RR。
 