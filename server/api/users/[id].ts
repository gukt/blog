import useDatabase from '~~/composables/useDatabase'

export default defineEventHandler(async (event: any) => {
  const { connection } = useDatabase()
  connection.connect()

  // let id = useRoute().params.id
  // 通过 Context 获取 id
  const id = event.context.params.id
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
