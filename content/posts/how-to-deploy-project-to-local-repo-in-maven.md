title: 如何将mave项目部署到本地仓库
s: howto-deploy-project-to-local-repo-in-maven
date: 2012-11-18 13:26:50
tags: [maven, howto, nexus]
---
在pom.xml文件中添加以下配置节点

```
<distributionManagement>
    <repository>
        <id>nexus-releases</id>
        <name>Local nexus releases repository</name>
        <url>
            http://localhost/nexus/content/repositories/releases/ 
        </url>
    </repository>
    
    <snapshotRepository>
        <id>nexus-snapshots</id >
            <name>Local nexus snapshots repository</name>       
        <url>
            http://localhost/nexus/content/repositories/snapshots/
        </url>
    </snapshotRepository>
</distributionManagement>
```

说明：上面的配置文件中指定的是将打包文件部署到本地的一个仓库，对外部或本地仓库的访问一般都需要配置权限，所以还需要在settings.xml文件中配置访问权限

```
<servers>
          <server>
               <id>nexus-releases</id>
               <username>admin</username>
               <password>admin123</password>
          </server>
          <server>
               <id>nexus-snapshots</id>
               <username>admin</username>
               <password>admin123</password>
          </server>
</servers>
```


**注意：** 上面的`<server>`/`<id>`节点中的名称和`<repository>`的`<id>`中的名称要保持一致

执行部署

```
# mvn deploy
```