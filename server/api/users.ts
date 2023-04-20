import useDatabase from '~~/composables/useDatabase'

export default defineEventHandler(async (event) => {
  const {connect} = useDatabase()
  const connection = connect()

  // 从 mysql 中读取 users 表中的所有用户列表
  return await new Promise((resolve, reject) => {
    // 从 mysql 中读取 users 表中的所有用户列表，然后返回
    const query = connection.query(
      'SELECT * FROM users',
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
