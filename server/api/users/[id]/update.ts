import useDatabase from '~~/composables/useDatabase'

export default defineEventHandler(async (event: any) => {
  const { connection } = useDatabase()
  connection.connect()

  // 从路径中获取 id 参数
  const id = event.node.req.url.split('/')[3]
  console.log('id', id)

  return await new Promise((resolve, reject) => {
    const query = connection.query(
      'SELECT * FROM users where id =' + id,
      function (error: any, results: any, fields: any) {
        if (error) reject(error)
        resolve(results)
      }
    )
  }).finally(() => {
    connection.end()
    console.log('disconnected.')
  })
})
