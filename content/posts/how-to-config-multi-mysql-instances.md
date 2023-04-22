title: 如何启动多个MySQL实例
s: howto-config-multi-mysql-instances
date: 2008-04-18 19:23:15
tags: [howto, mysql]
---
首先，要在/etc/my.cnf文件中追加[mysqld_multi]的相关配置（这可以通过执行mysqld_multi --example获取配置文件内容模板）

```
mysqld_multi --example
```

将下面文件内容追加到/etc/my.cnf文件末尾

```
[mysqld_multi]
mysqld     = /usr/bin/mysqld_safe
mysqladmin = /usr/bin/mysqladmin

#user       = multi_admin
#password   = 1234+aaaa

[mysqld1]
port       = 3306
datadir    = /var/lib/mysql1
socket     = /var/lib/mysql1/mysql.sock
pid-file   = /var/run/mysqld/mysqld1.pid
#language   = /usr/share/mysql/english
user       = mysql

[mysqld2]
port       = 3307
datadir    = /var/lib/mysql2
socket     = /var/lib/mysql2/mysql.sock
pid-file   = /var/run/mysqld/mysqld2.pid
#language   = /usr/share/mysql/english
user       = mysql

[mysqld3]
port       = 3308
datadir    = /var/lib/mysql3
socket     = /var/lib/mysql3/mysql.sock
pid-file   = /var/run/mysqld/mysqld3.pid
#language   = /usr/share/mysql/english
user       = mysql
```

查看各个mysqld实例的运行状态

```
[root@localhost etc]# mysqld_multi report
Reporting MySQL servers
MySQL server from group: mysqld1 is not running
MySQL server from group: mysqld2 is not running
MySQL server from group: mysqld3 is not running
```

三个实例都还没有启动过，下面开始启动MySQL实例

```
[root@localhost etc]# mysqld_multi start 1
```

检查运行状态

```
[root@localhost etc]# mysqld_multi report
Reporting MySQL servers
MySQL server from group: mysqld1 is not running
MySQL server from group: mysqld2 is not running
MySQL server from group: mysqld3 is not running
```

发现mysqld1仍没有启动成功，怎么回事？

查看mysqld日志，发现端口号被占用了

```
>cat /var/log/.mysqld.log
...
150519 16:50:08 [ERROR] Can't start server: Bind on TCP/IP port: Address already in use
150519 16:50:08 [ERROR] Do you already have another mysqld server running on port: 3306 ?
150519 16:50:08 [ERROR] Aborting
...
```

这是因为本机上mysqld默认实例正在启动中

```
[root@localhost etc]# service mysqld status
mysqld (pid  4535) is running...
```

我们要将mysqld服务停掉

```
[root@localhost etc]# service mysqld stop
Stopping mysqld:                                           [  OK  ]
```

再次启动mysqld1,并检查是否成功

```
[root@localhost etc]# mysqld_multi start 1 && mysqld_multi report
Reporting MySQL servers
MySQL server from group: mysqld1 is not running
MySQL server from group: mysqld2 is not running
MySQL server from group: mysqld3 is not running
```

**Damn it !!!** 仍然没有成功，再次检查日志（/var/log/mysqld.log)

```
/usr/libexec/mysqld: Table 'mysql.plugin' doesn't exist
150519 17:03:27 [ERROR] Can't open the mysql.plugin table. Please run mysql_upgrade to create it.
```

这是因为datadir下还没有安装默认数据库（注：datadir指定的目录会在首次执行mysqld_mult start 1时自动创建并且添加了如下几个文件）
```
[root@localhost lib]# ls /var/lib/mysql1
ibdata1  ib_logfile0  ib_logfile1
```

在datadir下安装数据库

```
[root@localhost mysql1]# mysql_install_db --datadir=/var/lib/mysql1
Installing MySQL system tables...
OK
...
```

安装数据成功后，再执行mysql1，成功！

```
[root@localhost mysql1]# mysqld_multi start 1
[root@localhost mysql1]# mysqld_multi report
Reporting MySQL servers
MySQL server from group: mysqld1 is running
MySQL server from group: mysqld2 is not running
MySQL server from group: mysqld3 is not running
```

同样的步骤，将mysqld2,mysql3配置好,然后一并启动三个实例

```
[root@localhost mysql1]# mysqld_multi start 1-3
[root@localhost mysql1]# mysqld_multi report
Reporting MySQL servers
MySQL server from group: mysqld1 is running
MySQL server from group: mysqld2 is running
MySQL server from group: mysqld3 is running
```

到/var/run/mysqld下瞧瞧，发现有三个pid文件，它们分别对应三个mysqld进程

```
[root@localhost mysql1]# ls /var/run/mysqld
mysqld1.pid  mysqld2.pid  mysqld3.pid
```

通过指定的socket连接mysqld实例
```
[root@localhost mysql1]# mysql -S /var/lib/mysql1/mysql.sock
```

显示pid信息

```
mysql> show variables like '%pid%';
+---------------+-----------------------------+
| Variable_name | Value                       |
+---------------+-----------------------------+
| pid_file      | /var/run/mysqld/mysqld1.pid |
+---------------+-----------------------------+
1 row in set (0.00 sec)
```

显示port

```
mysql> show variables like 'port%';
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| port          | 3306  |
+---------------+-------+
1 row in set (0.00 sec)
```