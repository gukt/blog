---
_path: /posts/how-to-using-charles-to-capture-https-packets
date: 2021/3/23 10:46:25
layout: article
---

# 如何使用 Charles 抓取 HTTPS 包

本文介绍了如何使用 Charles 软件来抓取 HTTPS 包，以便进行网络调试和安全测试。具体步骤包括安装 Charles 软件、安装 Charles 根证书、配置代理连接和信任证书。通过这些步骤，可以成功地抓取 HTTPS 包。



## 引言

在网络调试和安全测试中，抓取 HTTPS 包是一项非常有用的技能。HTTPS 协议通过 SSL/TLS 加密通信，可以保证通信的安全性和机密性。然而，对于调试和测试人员来说，需要查看和分析通信过程，因此需要一种方法来抓取和解密 HTTPS 包。本文将介绍如何使用 Charles 软件来实现这一目标。



## 安装 charles 软件

官方下载地址：https://www.charlesproxy.com/download/



## 安装根证书

在 Charles 软件中，点击 `Help > SSL Proxing > Install Charles Root Certification`，弹出“添加证书”界面，钥匙串中选择“登陆”，然后点击“添加”按钮。

![https://raw.githubusercontent.com/gukt/images/master/github/images20210515100651.png](https://raw.githubusercontent.com/gukt/images/master/github/images20210515100651.png)

点击 `Proxy > Proxy Settings`，按如下界面配置：

![https://raw.githubusercontent.com/gukt/images/master/github/images20210515100754.png](https://raw.githubusercontent.com/gukt/images/master/github/images20210515100754.png)

接下来要手机安装证书，点击 `Help > SSL Proxing > Install Charles Root ... Device Or Remote Browser` 弹出对话框：

![https://raw.githubusercontent.com/gukt/images/master/github/images20210515100759.png](https://raw.githubusercontent.com/gukt/images/master/github/images20210515100759.png)

按照对话框中的提示，首先要配置手机端的网络使用代理连接，配置步骤如下：

打开’设置 -> 无线局域网 -> 点击当前连接的局域网后面的感叹号 > 配置代理 > 选择手动，在服务器中填写服务器地址（可以在电脑端Charles中点击Help > Local IP Address中得到）和端口（前面设置的 8888）

然后浏览器中访问：http://chls.pro/ssl 根据提示操作。

注：此时，第一次访问时，电脑端 Charles 会弹出一个对话框提示是否信任连接，选择 `Allow`。

接下来，设置信任证书，点击`设置 > 通用 > 关于本机 > 证书信任设置`，选择 `Charles Proxy CA...`，将其设置为信任。

至此，安装结束，在手机端打开地址，Charles 中可以看到监视结果。



![image-20230412004034572](/Users/ktgu/Pictures/typora/image-20230412004034572.png)

![image-20230412004101909](/Users/ktgu/Pictures/typora/image-20230412004101909.png) 

![image-20230412004326496](/Users/ktgu/Pictures/typora/image-20230412004326496.png)

![image-20230412004437392](/Users/ktgu/Pictures/typora/image-20230412004437392.png)