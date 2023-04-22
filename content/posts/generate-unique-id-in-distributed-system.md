title: 游戏服务器中的ID生成策略
d: generate-unique-id-in-distributed-system
date: 2013-06-17 19:45:37
tags: [game, distributed, mongodb, redis]
---
常见的游戏架构和部署中，很多采用分服的一服一库的部署模式，而且运营过程中经常会有合服要求。

> 所谓合服就是随着游戏单服活跃用户数不断的下降，为节省资源和提高用户活跃度，在运营过程中将两个或多个服务数据合并到一起的做法。

合服时经常碰到的一个最大的问题就是：相同表中的记录不能有ID重复的情况发生。如果有重复ID的情况，那么合服时就要写特定的脚本去处理重复ID的问题，这会比较麻烦。

要解决不能有重复ID的情况，最好的办法是让每台服务器上出生的ID都是全局唯一的。

#### 1. 使用UUID

首先想到的是[UUID](https://en.wikipedia.org/w/index.php?title=Universally_unique_identifier&redirect=no)，它天生就是全局唯一的并运用于分布式计算中，UUID是16字节128位长的数字，通常以36字节的字符串表示：

> UUID: 21e58ba8-5c7e-4524-ae8f-079faf987b3b

由于它太长而且可读性差，因此不用这货。

#### 2. Flickr的Ticket Server方案

Flickr的实现方式比较简单巧妙，它是利用两台Ticket Server按指定的步长递增生成ID。将两台服务器的初始偏移值设置不一样，会让两台服务器交替生成ID而不会产生冲突，其配置如下：

```
TicketServer1:
auto-increment-increment = 2
auto-increment-offset = 1

TicketServer2:
auto-increment-increment = 2
auto-increment-offset = 2
```

这样，TicketServer1将一直生成"奇数ID"，TicketServer2生成“偶数ID”

两台Ticket Server做负载均衡，使用Round-Robin策略轮询访问，避免了单点故障，如果两台不够也可以扩展至更多台。

关于该技术方案的细节请见[官方博客原文(要翻墙)](http://code.flickr.net/2010/02/08/ticket-servers-distributed-unique-primary-keys-on-the-cheap/)，也可见[这篇译文](http://blog.csdn.net/wangzhen199009/article/details/38761575)

**该方案的缺点：**

1. TicketServer会成为性能瓶颈，当负载较重时数据库写压力较大，对于Flickr这种读频繁写较少的应用来说也许够用，但是对于游戏服务器来说，会有短期内密集生成ID的需求，该方案似乎应付这样的需求会显得有点吃力。

2. 生成的ID不带时间信息，IDC机房信息，或机器ID等信息

#### 3. MongoDB的ObjectId方案

ObjectId使用了12个字节来存储，每个字节用16进制字符串来表示，所以的表示形式是由24个字符组成，如：507f1f77bcf86cd799439011

ObjectId组成部分有：

* 4字节：UNIX时间戳
* 3字节：表示运行MongoDB的机器
* 2字节：表示生成此_id的进程
* 3字节：由一个随机数开始的计数器生成的值

**该方案的好处：**

ObjectId是可按时间排序的并且带机器ID的，根据ObjectId可以反推得到时间戳和机器ID信息，而且比UUID短。

但是，我们希望最好能够用长整形来表示ID，因为那样既短小不占空间又容易识别。

#### 4. Twitter的Snowflake算法

Snowflake是twitter为解决在分布式系统中高效生成全局ID所提出的解决方案，该算法使用Scale实现的并且已开源，地址在：[https://github.com/twitter/snowflake](https://github.com/twitter/snowflake)

其原理是用一个64位的长整形来储存ID，其内部位的表示如下：

> 毫秒时间（41bits）+ datacenterId(5bits) + workerId(5bits) + sequence(12bits)

该方案的优点明显：
* 生成的ID能够按时间排序，并且可带机器ID，IDC等信息
* 用64位表示的，储存空间小，并且易读
* 每台机器可独立生成ID，无需中心节点，无单点故障风险
* 生成ID高效并且速度快，如果用12位表示sequence，那么每毫秒将可以生成1024个ID

在游戏应用中，我们可将内部位调整为如下表现形式：

> 毫秒时间（37bits）+ serverId (20bits) + sequence (16bits)

说明：

* 37bits的毫秒时间可供我们使用约93年
* serverId最大可以表示为2^20(1048576)个服务器
* 每毫秒最多可以生成2^16(65535)个ID

### 总结

在分布式应用或游戏服务器中，Snowflake作为全局唯一ID的生成算法具有生产ID迅速高效，无单点故障，ID带丰富的信息，并且可按时间排序等诸多特性，是可靠高效的方案。

------

### 附录

Twitter是用Scale实现该算法并开源的，其中Java版本如下：

```
/**
 * @author zhujuan
 *         From: https://github.com/twitter/snowflake
 *         An object that generates IDs.
 *         This is broken into a separate class in case
 *         we ever want to support multiple worker threads
 *         per process
 */
public class IdWorker {

    protected static final Logger LOG = LoggerFactory.getLogger(IdWorker.class);

    private long workerId;
    private long datacenterId;
    private long sequence = 0L;

    private long twepoch = 1288834974657L;

    private long workerIdBits = 5L;
    private long datacenterIdBits = 5L;
    private long maxWorkerId = -1L ^ (-1L << workerIdBits);
    private long maxDatacenterId = -1L ^ (-1L << datacenterIdBits);
    private long sequenceBits = 12L;

    private long workerIdShift = sequenceBits;
    private long datacenterIdShift = sequenceBits + workerIdBits;
    private long timestampLeftShift = sequenceBits + workerIdBits + datacenterIdBits;
    private long sequenceMask = -1L ^ (-1L << sequenceBits);

    private long lastTimestamp = -1L;

    public IdWorker(long workerId, long datacenterId) {
        // sanity check for workerId
        if (workerId > maxWorkerId || workerId < 0) {
            throw new IllegalArgumentException(String.format("worker Id can't be greater than %d or less than 0", maxWorkerId));
        }
        if (datacenterId > maxDatacenterId || datacenterId < 0) {
            throw new IllegalArgumentException(String.format("datacenter Id can't be greater than %d or less than 0", maxDatacenterId));
        }
        this.workerId = workerId;
        this.datacenterId = datacenterId;
        LOG.info(String.format("worker starting. timestamp left shift %d, datacenter id bits %d, worker id bits %d, sequence bits %d, workerid %d", timestampLeftShift, datacenterIdBits, workerIdBits, sequenceBits, workerId));
    }

    public synchronized long nextId() {
        long timestamp = timeGen();

        if (timestamp < lastTimestamp) {
            LOG.error(String.format("clock is moving backwards.  Rejecting requests until %d.", lastTimestamp));
            throw new RuntimeException(String.format("Clock moved backwards.  Refusing to generate id for %d milliseconds", lastTimestamp - timestamp));
        }

        if (lastTimestamp == timestamp) {
            sequence = (sequence + 1) & sequenceMask;
            if (sequence == 0) {
                timestamp = tilNextMillis(lastTimestamp);
            }
        } else {
            sequence = 0L;
        }

        lastTimestamp = timestamp;

        return ((timestamp - twepoch) << timestampLeftShift) | (datacenterId << datacenterIdShift) | (workerId << workerIdShift) | sequence;
    }

    protected long tilNextMillis(long lastTimestamp) {
        long timestamp = timeGen();
        while (timestamp <= lastTimestamp) {
            timestamp = timeGen();
        }
        return timestamp;
    }

    protected long timeGen() {
        return System.currentTimeMillis();
    }
}
```
