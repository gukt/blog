# 安装 charles 软件

官方下载地址：https://www.charlesproxy.com/download/

# 安装 Charles 根证书

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