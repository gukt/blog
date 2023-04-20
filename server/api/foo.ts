// https://github.com/redis/node-redis
import { createClient } from 'redis'
// 导入 CommandOptions
import type { CommandOptions } from '@redis/client/dist/lib/command-options'
// 导入 ClientCommandOptions
import type { ClientCommandOptions } from '@redis/client/dist/lib/client'

export default defineEventHandler(async (event) => {
  console.log('api/foo.ts: ' + event.node.req.url)
  const client = createClient({
    socket: {
      host: 'codedog996.com',
      port: 16379,
    },
  }).on('error', (err: any) => console.log('Redis Server Error', err))
  await client.connect()

  // const options: CommandOptions<ClientCommandOptions> = {
  //   asap: true,
  //   chainId: Symbol('xxx'),
  //   returnBuffers: false,
  //   // [Symbol('command-options')]: true, // 添加符号属性
  // }

  const options = {
    asap: true,
    [Symbol('foo')]: 'xxx',
  }

  await client.zIncrBy('article:views', 1.0 ,'slug1')
  await client.zIncrBy('article:views', 3.0 ,'slug2')
  await client.zIncrBy('article:views', 2.0 ,'slug3')
  await client.zIncrBy('article:views', 4.0, 'slug4')
  


  return await client.incr('count')
})
