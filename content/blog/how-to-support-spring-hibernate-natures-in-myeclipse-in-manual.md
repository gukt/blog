title: 如何手动为MyEclipse添加对Spring和Hibernate框架的支持
s: howto-support-spring-hibernate-natures-in-myeclipse-in-manual
date: 2008-04-18 13:04:31
tags: [myeclipse, spring, hibernate]
---

打开.project项目文件，找到<natures>节点

```
<natures>
          <!-- 支持hibernate -->
          <nature>com.genuitec.eclipse.hibernate.hibernatenature</nature>
          <!-- 支持Spring Framework -->
          <nature>com.genuitec.eclipse.springframework.springnature</nature>
          <nature>com.genuitec.eclipse.ast.deploy.core.deploymentnature</nature>
          <nature>org.maven.ide.eclipse.maven2Nature</nature>
          <nature>com.genuitec.eclipse.j2eedt.core.webnature</nature>
          <nature>org.eclipse.jdt.core.javanature</nature>
          <nature>org.eclipse.wst.jsdt.core.jsNature</nature>
</natures>
```

同时在<buildSpec>节点下添加了两个<buildCommand>节点

```
<buildSpec>
     ...
     <buildCommand>
               <name>com.genuitec.eclipse.springframework.springbuilder</name>
               <arguments>
               </arguments>
          </buildCommand>
          <buildCommand>
               <name>com.genuitec.eclipse.hibernate.HibernateBuilder</name>
               <arguments>
               </arguments>
          </buildCommand>
</buildSpec>
```

**说明：** 

以上操作都可以在myclipse IDE中通过界面操作，手动操作的意图只是想了解myeclipse在背后都为我们做了些什么
